/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["bubbles"] }] */
import * as THREE from 'three';
import { Power1, TweenMax, Power2 } from 'gsap';
import _ from 'lodash';
import flashingV from '../shaders/flashing.vert';
import flashingF from '../shaders/flashing.frag';
import flashingCoordinates from '../data/flashingCoordinates.json';

class ThinkingAnimation {
    constructor(mainBrain) {
        this.mainBrain = mainBrain;
        this.isFlashing = false;
        this.memorySelected = mainBrain.memorySelected;
        this.alphaAnimation = { v: 0.0 };
        this.secuenceAnimation = 0;
        // Per-brain performance metrics (0-100)
        this.metrics = {
            attention: 0,
            engagement: 0,
            excitement: 0,
            interest: 0,
            relaxation: 0,
            stress: 0,
        };
        // Color mapping for metrics
        this.metricColors = {
            attention: 0x00ff00,    // Green
            engagement: 0x40e0d0,   // Turquoise
            excitement: 0xffff00,   // Yellow
            interest: 0xffa500,     // Orange
            relaxation: 0x0066ff,   // Blue
            stress: 0x800080,       // Purple
        };
    }

    initAnimation() {
        const { scene, camera } = this.mainBrain;

        const particles = 10;
        const geometry = new THREE.BufferGeometry();
        const sizes = [];
        const positions = [];
        const colors = [];
        const delay = [];
        const duration = 2.5;
        const maxPointDelay = 1.5;

        Object.keys(flashingCoordinates).forEach((memory, index) => {
            const light = flashingCoordinates[memory];

            positions.push(light.x, light.y, light.z);

            sizes[index] = light.size;

            delay[index * 2 + 0] = THREE.Math.randFloat(0.5, maxPointDelay);
            delay[index * 2 + 1] = duration;
        });

        geometry.addAttribute(
            'aDelayDuration',
            new THREE.Float32BufferAttribute(delay, 2),
        );
        geometry.addAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3),
        );
        geometry.addAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.addAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
        geometry.computeBoundingSphere();
    // Ensure full draw range so points keep rendering continuously
    const pointCount = positions.length / 3;
    geometry.setDrawRange(0, pointCount);
        const customMaterial = new THREE.ShaderMaterial({
            uniforms: {
                c: { type: 'f', value: 0.9 },
                p: { type: 'f', value: 2.8 },
                glowColor: { type: 'c', value: new THREE.Color(0x2c3e93) },
                viewVector: { type: 'v3', value: camera.position },
                uTime: { type: 'f', value: 0.0 },
                uFadeTime: { type: 'f', value: 0.0 },
                uMouse: { type: 'f', value: new THREE.Vector2(0.0) },
                isCustomAlpha: { type: 'b', value: false },
                uAlpha: { type: 'float', value: 0.0 },
                uMetricIntensity: { type: 'f', value: 1.0 },
                uResolution: {
                    type: 'v2',
                    value: new THREE.Vector2(window.innerWidth, window.innerHeight),
                },
            },
            vertexShader: flashingV,
            fragmentShader: flashingF,
            vertexColors: THREE.VertexColors,
            blending: THREE.AdditiveBlending,
            side: THREE.DoubleSide,
            depthTest: false,
            transparent: true,
        });
        this.flashing = new THREE.Points(geometry, customMaterial);
        this.flashing.name = 'flashing';
        scene.add(this.flashing);
    }

    // Update metrics from UI (values 0-100)
    setMetrics(partialMetrics) {
        this.metrics = { ...this.metrics, ...partialMetrics };
    }

    // Compute the dominant metric color
    getDominantColor() {
        const entries = Object.entries(this.metrics);
        if (!entries.length) return this.metricColors.attention;
        // Find max value; tie-break by order Attention, Engagement, Excitement, Interest, Relaxation, Stress
        const priority = ['attention', 'engagement', 'excitement', 'interest', 'relaxation', 'stress'];
        let maxKey = priority[0];
        let maxVal = -Infinity;
        for (const [k, v] of entries) {
            const val = typeof v === 'number' ? v : 0;
            if (val > maxVal || (val === maxVal && priority.indexOf(k) < priority.indexOf(maxKey))) {
                maxVal = val;
                maxKey = k;
            }
        }
        return { color: this.metricColors[maxKey] || this.metricColors.attention, value: Math.max(0, Math.min(100, maxVal)) };
    }

    // Compute blended color and intensity data based on weighted metrics
    getBlendedColorAndIntensity() {
        const keys = ['attention', 'engagement', 'excitement', 'interest', 'relaxation', 'stress'];
        let sum = 0;
        let maxVal = 0;
        const weights = {};
        keys.forEach((k) => {
            const v = Math.max(0, Math.min(100, Number(this.metrics[k] || 0)));
            weights[k] = v;
            sum += v;
            if (v > maxVal) maxVal = v;
        });

        if (sum <= 0) {
            return { color: new THREE.Color(0x000000), maxVal: 0, sumVal: 0 };
        }

        // Weighted blend in linear space
        let r = 0, g = 0, b = 0;
        keys.forEach((k) => {
            const w = weights[k] / sum;
            if (w <= 0) return;
            const c = new THREE.Color(this.metricColors[k]);
            r += c.r * w;
            g += c.g * w;
            b += c.b * w;
        });

        const color = new THREE.Color().setRGB(r, g, b);
        return { color, maxVal, sumVal: sum };
    }

    animationCamera(val) {
        this.mainBrain.isRecording = false;
        // this.isActive(true);
        this.flashing.material.uniforms.uFadeTime.value = 1;
        this.isFlashing = true;

        if (this.alphaAnimation.v === 0.0) {
            TweenMax.fromTo(
                this.alphaAnimation,
                2.5,
                { v: 0.0 },
                {
                    v: 1.0,
                    ease: Power1.easeInOut,
                    onStart: () => {
                        this.selectMemoryThinking(val);
                    },
                    onUpdate: () => {
                        this.flashing.material.uniforms.uAlpha.value = this.alphaAnimation.v;
                    },
                },
            );
        } else {
            TweenMax.fromTo(
                this.alphaAnimation,
                1.0,
                { v: 1.0 },
                {
                    v: 0.0,
                    ease: Power1.easeInOut,
                    onUpdate: () => {
                        this.flashing.material.uniforms.uAlpha.value = this.alphaAnimation.v;
                    },
                    onComplete: () => {
                        this.thinkingFadeIn(val);
                    },
                },
            );
        }

        // keep full draw range so the thinking points continue rendering during camera animation
        if (this.flashing.geometry && this.flashing.geometry.attributes && this.flashing.geometry.attributes.position) {
            this.flashing.geometry.setDrawRange(0, this.flashing.geometry.attributes.position.count);
        }
    }

    selectMemoryThinking(val) {
        const lights = Object.keys(flashingCoordinates);
        const light = lights[Math.floor(val)];

        const locations = flashingCoordinates[light];
        if (!locations) {
            return;
        }

        const positions = this.flashing.geometry.attributes.position.array;

        for (let i = 0; i < positions.length; i += 1) {
            positions[i * 3] = locations.x;
            positions[i * 3 + 1] = locations.y;
            positions[i * 3 + 2] = locations.z;
        }

        this.flashing.material.uniforms.isCustomAlpha.value = true;

        const { camera } = this.mainBrain;

        const cameraPos = {
            x: camera.position.x,
            y: camera.position.y,
            z: camera.position.z,
        };

        TweenMax.fromTo(
            cameraPos,
            1.5,
            { x: cameraPos.x, y: cameraPos.y, z: cameraPos.z },
            {
                x: locations.camera.x,
                y: locations.camera.y,
                z: locations.camera.z,
                ease: Power1.easeInOut,
                onUpdate: () => {
                    camera.position.x = cameraPos.x;
                    camera.position.y = cameraPos.y;
                    camera.position.z = cameraPos.z;
                },
                onComplete: () => {
                    this.secuenceAnimation += 1;
                    this.animationCamera(this.secuenceAnimation);
                },
            },
        );
    }

    thinkingFadeIn(val) {
        TweenMax.fromTo(
            this.alphaAnimation,
            2.5,
            { v: 0.0 },
            {
                v: 1.0,
                ease: Power1.easeInOut,
                onUpdate: () => {
                    this.flashing.material.uniforms.uAlpha.value = this.alphaAnimation.v;
                },
                onStart: () => {
                    this.selectMemoryThinking(val);
                },
            },
        );
    }

    updateSubSystem(subsystemPayload) {
        this.bubbles.geometry.attributes.bubbles.needsUpdate = false;
        const cameraPos = this.mainBrain.camera.position;
        const { target } = this.mainBrain.orbitControls;
        const bubblesAttr = this.bubbles.geometry.attributes.bubbles.array;
        const progress = { p: 1.0 };

        this.mainBrain.font.removeText();
        TweenMax.fromTo(
            progress,
            2.5,
            { p: 1.0 },
            {
                p: 0.0,
                ease: Power1.easeInOut,
                onUpdate: () => {
                    this.updateBurbleUp(progress.p);
                    this.mainBrain.orbitControls.target.set(
                        target.x,
                        target.y - progress.p,
                        target.z,
                    );
                    this.mainBrain.camera.position.set(
                        cameraPos.x,
                        cameraPos.y - progress.p,
                        cameraPos.z,
                    );
                },
                onComplete: () => {
                    this.getBubblesSelected(bubblesAttr, subsystemPayload);
                    this.flashing.geometry.attributes.flashing.needsUpdate = true;
                    this.animate(true);
                },
            },
        );
    }

    update(camera, delta) {
        this.flashing.material.uniforms.viewVector.value = new THREE.Vector3().subVectors(
            camera.position,
            this.flashing.position,
        );
        this.flashing.material.uniforms.uTime.value = delta;
        // Ensure the shader uses dynamic alpha (not a frozen custom alpha)
        const uniforms = this.flashing.material.uniforms;
        uniforms.isCustomAlpha.value = false;
        // Keep full draw range in case other code modified it
        if (this.flashing.geometry && this.flashing.geometry.attributes && this.flashing.geometry.attributes.position) {
            this.flashing.geometry.setDrawRange(0, this.flashing.geometry.attributes.position.count);
        }
        // Set blended color and intensity based on current metrics
        const { color, maxVal, sumVal } = this.getBlendedColorAndIntensity();
        uniforms.glowColor.value = color;
        // When no data (all 0), hide the glow entirely
        if (maxVal <= 0 || sumVal <= 0) {
            uniforms.uFadeTime.value = 0.0;
            uniforms.uMetricIntensity.value = 0.0;
            return;
        }
        // Ensure glow is visible when there's data
        uniforms.uFadeTime.value = 1.0;
        // Intensity: base on the strongest metric and slightly modulated by overall energy
        // Base map 0..100 -> 0.4..2.0
        let base = 0.4 + (maxVal / 100) * (2.0 - 0.4);
        // Energy factor based on total (0..600) -> 0.9..1.1
        const energyFactor = 0.9 + Math.min(600, sumVal) / 600 * 0.2;
        const intensity = Math.max(0.4, Math.min(2.0, base * energyFactor));
        uniforms.uMetricIntensity.value = intensity;
    }
    isActive(val) {
        if (val) {
            const progress = { p: 0.0 };
            TweenMax.fromTo(
                progress,
                2.5,
                { p: 0.0 },
                {
                    p: 1.0,
                    ease: Power1.easeInOut,
                    onUpdate: () => {
                        this.flashing.material.uniforms.uFadeTime.value = progress.p;
                        this.isFlashing = true;
                    },
                },
            );
        } else {
            const progress = { p: 1.0 };
            TweenMax.fromTo(
                progress,
                2.5,
                { p: 1.0 },
                {
                    p: 0.0,
                    ease: Power1.easeInOut,
                    onUpdate: () => {
                        this.flashing.material.uniforms.uFadeTime.value = progress.p;
                        this.isFlashing = false;
                    },
                },
            );
        }
    }
    updateMouse(coordinates) {
        this.flashing.material.uniforms.uMouse.value = coordinates;
    }

    flashingAnimation(isActive) {
        this.flashing.material.uniforms.uIsFlashing.value = isActive;

        if (isActive) {
            const progress = { p: 0.0 };
            TweenMax.fromTo(
                progress,
                2.5,
                { p: 0.0 },
                {
                    p: 1.0,
                    ease: Power1.easeInOut,
                    onUpdate: (value) => {
                        this.flashing.material.uniforms.uFlashingAlpha.value = progress.p;
                        this.isFlashing = true;
                    },
                },
            );
        } else {
            const progress = { p: 1.0 };
            TweenMax.fromTo(
                progress,
                2.5,
                { p: 1.0 },
                {
                    p: 0.0,
                    ease: Power1.easeInOut,
                    onUpdate: (value) => {
                        this.flashing.material.uniforms.uFlashingAlpha.value = progress.p;
                        this.isFlashing = false;
                    },
                },
            );
        }
    }

    animate(isActive) {
        const cameraPos = this.mainBrain.camera.position;
        const { target } = this.mainBrain.orbitControls;
        if (!this.isFlashing) {
            this.flashingAnimation(true);
        }
        if (isActive) {
            const progress = { p: 0.0 };
            TweenMax.fromTo(
                progress,
                2.5,
                { p: 0.0 },
                {
                    p: 1.0,
                    ease: Power1.easeInOut,
                    onUpdate: () => {
                        this.updateBurbleUp(progress.p);
                        this.mainBrain.orbitControls.target.set(
                            target.x,
                            target.y + progress.p,
                            target.z,
                        );
                        this.mainBrain.camera.position.set(
                            cameraPos.x,
                            cameraPos.y + progress.p,
                            cameraPos.z,
                        );
                    },
                },
            );
        } else {
            const progress = { p: 1.0 };
            TweenMax.fromTo(
                progress,
                2.5,
                { p: 1.0 },
                {
                    p: 0.0,
                    ease: Power1.easeInOut,
                    onUpdate: () => {
                        this.updateBurbleUp(progress.p);
                        this.mainBrain.orbitControls.target.set(
                            target.x,
                            target.y - progress.p,
                            target.z,
                        );
                        this.mainBrain.camera.position.set(
                            cameraPos.x,
                            cameraPos.y - progress.p,
                            cameraPos.z,
                        );
                    },
                },
            );
        }
    }
}

export default ThinkingAnimation;
