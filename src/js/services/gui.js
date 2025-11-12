import * as THREE from "three";
import { Power1, Back, TweenMax } from "gsap";
import * as dat from "three/examples/js/libs/dat.gui.min";

class GUI {
  constructor(props) {
    this.initGui(props);
  }

  initGui(props) {
    const mainBrain = props;
    this.controls = new (function c() {
      this.rotationSpeed = 0.22;

      this.floor = 0x000000;
      this.transitioning = false;
      this.autoRotate = true;
      this.lightIntensity = 1.5;
      this.lightDistance = 175;

      this.lightHelper = false;
      this.angle = 1.0;
      this.uBurbleUp = 0.0;
      this.burbleProgress = 0.1;

      this.showBubbles = false;
      this.particleGlow = 0x000000;
      this.memory = 1;
      this.thinking = false;
      this.startIntro = true;
      this.recording = false;
      this.cameraAnimation = 1;
      this.c = 1.1;
      this.p = 1.0;
      this.offsetY = 0.1;
      this.showXray = false;
    })();

    const gui = new dat.GUI();

    // Apply initial defaults to the scene
    mainBrain.orbitControls.autoRotate = this.controls.autoRotate;
    mainBrain.spotLight.intensity = this.controls.lightIntensity;
    mainBrain.spotLight.position.set(0, this.controls.lightDistance, -10);
    mainBrain.scene.background = new THREE.Color(this.controls.particleGlow);
    mainBrain.plane.material.color = new THREE.Color(this.controls.floor);

    gui.add(this.controls, "rotationSpeed", 0.1, 2.0);
    gui.add(this.controls, "autoRotate").onChange((val) => {
      mainBrain.orbitControls.autoRotate = val;
    });

    gui.add(this.controls, "recording").onChange((val) => {
      mainBrain.isRecording = val;
    });

    gui.add(this.controls, "showXray").onChange((e) => {
      mainBrain.particlesSystem.isXRayActive(e);
    });

    gui.add(this.controls, "lightIntensity", 0.0, 2.0).onChange((val) => {
      mainBrain.spotLight.intensity = val;
    });

    gui.add(this.controls, "c", 0.0, 2.0).onChange((val) => {
      mainBrain.particlesSystem.xRay.material.uniforms.c.value = val;
    });
    gui.add(this.controls, "p", 0.0, 20.0).onChange((val) => {
      mainBrain.particlesSystem.xRay.material.uniforms.p.value = val;
    });

    gui.add(this.controls, "offsetY", 0.0, 2.0).onChange((val) => {
      mainBrain.particlesSystem.xRay.material.uniforms.offsetY.value = val;
    });

    gui.add(this.controls, "lightHelper").onChange((val) => {
      if (val) {
        mainBrain.scene.add(mainBrain.spotLightHelper);
      } else {
        mainBrain.scene.remove(mainBrain.spotLightHelper);
      }
    });
    gui.add(this.controls, "cameraAnimation", 0, 4).onFinishChange((val) => {
      mainBrain.thinkingAnimation.animationCamera(val);
    });

    gui.add(this.controls, "lightDistance", 0.0, 1800.0).onChange((val) => {
      mainBrain.spotLight.position.set(0, val, -10);
    });

    // Bubbles controls removed

    gui.addColor(this.controls, "particleGlow").onChange((e) => {
      mainBrain.scene.background = new THREE.Color(e);
    });

    gui.addColor(this.controls, "floor").onChange((e) => {
      mainBrain.plane.material.color = new THREE.Color(e);
    });

    // Bubbles controls removed

    gui.add(this.controls, "startIntro").onChange((val) => {
      mainBrain.startIntro(val);
    });

    gui.add(this.controls, "thinking").onChange((e) => {
      mainBrain.thinkingAnimation.isActive(e);
    });

    gui.add(this.controls, "transitioning").onChange((e) => {
      if (e) {
        const progress = { p: 0.0 };
        TweenMax.fromTo(
          progress,
          2.0,
          { p: 0.0 },
          {
            p: 1.5,
            ease: Power1.easeIn,
            onUpdate: (value) => {
              mainBrain.particlesSystem.updateTransitioning(progress.p);
            },
          }
        );
      } else {
        const progress = { p: 1.0 };
        TweenMax.fromTo(
          progress,
          2.0,
          { p: 1.0 },
          {
            p: 0.5,
            ease: Power1.easeIn,
            onUpdate: (value) => {
              mainBrain.particlesSystem.updateTransitioning(progress.p);
            },
          }
        );
      }
      // return this.material.uniforms['test'].value = e
    });
  }
}

export default GUI;
