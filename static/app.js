webpackJsonp([1], {
    0: function(e, t) {},
    "2J3f": function(e, t) {
        e.exports = {
            affective: [],
            analytic: [],
            process: [],
            semantic: [],
            episodic: [],
            cerebellum: [],
            bridge: [],
            amygdala: [],
            lines: {
                affective: [],
                analytic: [],
                process: [],
                semantic: [],
                episodic: []
            }
        }
    },
    "6KJG": function(e, t) {
        e.exports = "#define GLSLIFY 1\nuniform vec3 glowColor;\nvarying float intensity;\nvarying float alpha;\nuniform float uFlashingAlpha;\nuniform bool uIsFlashing;\nvarying vec4 vBubbles;\nvarying vec4 vMemory;\nuniform bool isWinnerActive;\nuniform float uWinnerSelected;\nvoid main()\n{\n\n        float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n        float pct = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);\n        vec3 color = vec3(1.0) * gl_FragColor.rgb;\n\n        vec3 glow = glowColor * intensity;\n        if(vBubbles.w == 3.0){ //Winner Bubble\n            // glow = vec3(0.0,0.9,0.0) * intensity;\n        }\n\n        if(alpha == 5.0) {\n            //discard;\n        }\n\n        gl_FragColor = vec4(glow, clamp(alpha, 0.0, 1.0));\n        gl_FragColor = vec4(glow, pct * gl_FragColor.a);\n\n        if(uIsFlashing){\n             gl_FragColor = vec4(glow, pct * gl_FragColor.a * uFlashingAlpha);\n        }\n\n        //Show only the brain section activate\n        if(vMemory.w == uWinnerSelected && isWinnerActive){\n            gl_FragColor += vec4(glow,pct * gl_FragColor.a);\n        }\n\n}"
    },
    "6tj6": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = o(n("FAD+")),
            i = o(n("XbjG")),
            a = o(n("joTG"));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = function() {
            return {
                noise: s.default,
                random: i.default,
                rotate: a.default
            }
        }
    },
    "736u": function(e, t) {
        e.exports = "#define GLSLIFY 1\nuniform vec3 glowColor;\nuniform float uFadeTime;\nvarying float intensity;\nvarying float alpha;\n\nvoid main()\n{\n\n float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n        float pct = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);\n        vec3 color = vec3(1.0) * gl_FragColor.rgb;\n\n        vec3 glow = glowColor * intensity;\n\n        gl_FragColor = vec4(glow, clamp(alpha, 0.0, uFadeTime));\n\n        gl_FragColor = vec4(glow, pct * gl_FragColor.a);\n\n\n}"
    },
    "9j+D": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = l(n("Zrlr")),
            i = l(n("wxAW")),
            a = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(n("Ml+6"));
        l(n("DmT9"));
        n("/lXX"), n("hiZs");
        var o = l(n("wH+u")),
            r = n("nS2H");

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = function() {
            function e() {
                (0, s.default)(this, e), this.a_camera = new a.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1e3), this.a_camera.position.z = 1e3, this.a_scene = new a.Scene, this.a_scene.background = new a.Color("#a7b6d2"), this.a_blurScene = new a.Scene, this.a_bloomScene = new a.Scene, this.a_scene.fog = new a.Fog(10991314, 300, 1300), this.a_renderer = new a.WebGLRenderer({
                    antialias: !0,
                    alpha: !0,
                    preserveDrawingBuffer: !1,
                    logarithmicDepthBuffer: !0
                }), this.a_renderer.setPixelRatio(window.devicePixelRatio), this.a_renderer.setSize(window.innerWidth, window.innerHeight), this.a_renderer.sortObjects = !1, this.a_renderer.setClearColor(0, 0), this.a_renderer.shadowMap.enabled = !0, this.a_renderer.shadowMap.type = a.PCFSoftShadowMap, this.a_renderer.gammaInput = !0, this.a_renderer.gammaOutput = !0, this.a_renderer.shadowDepthMaterialSide = a.BackSide, this.composer = new r.EffectComposer(this.a_renderer, {
                    stencilBuffer: !0,
                    depthTexture: !0
                }), this.renderPass = new r.RenderPass(this.scene, this.camera), this.composer.addPass(this.renderPass), this.bloomPass = new r.BloomPass({
                    resolutionScale: .7,
                    resolution: 2.9,
                    intensity: 2.3,
                    distinction: 9,
                    blend: !0
                }), this.bloomPass.renderToScreen = !0, this.composer.addPass(this.bloomPass), this.blurMask = new r.MaskPass(this.blurScene, this.camera), this.renderPass2 = new r.RenderPass(this.blurScene, this.camera), document.body.appendChild(this.a_renderer.domElement), this.stats = e.initStats(document.body), this.orbitControls = new a.OrbitControls(this.camera, this.a_renderer.domElement), this.orbitControls.enableDamping = !0, this.orbitControls.dampingFactor = .25, this.orbitControls.enableZoom = !0, this.orbitControls.zoomSpeed = .1, this.orbitControls.panSpeed = .1, this.orbitControls.minDistance = 50, this.orbitControls.maxDistance = 2500, this.orbitControls.autoRotate = !1, this.orbitControls.autoRotateSpeed = 1, this.orbitControls.rotateSpeed = .1, this.orbitControls.screenSpacePanning = !0, window.addEventListener("resize", this.onWindowResize.bind(this), !1), window.addEventListener("mousemove", this.onMouseMove.bind(this), !1)
            }
            return (0, i.default)(e, [{
                key: "onWindowResize",
                value: function() {
                    this.a_camera.aspect = window.innerWidth / window.innerHeight, this.a_camera.updateProjectionMatrix(), this.a_renderer.setSize(window.innerWidth, window.innerHeight)
                }
            }, {
                key: "animate",
                value: function(e) {
                    requestAnimationFrame(this.animate.bind(this)), this.a_renderer.render(this.a_scene, this.a_camera)
                }
            }, {
                key: "renderer",
                get: function() {
                    return this.a_renderer
                }
            }, {
                key: "camera",
                get: function() {
                    return this.a_camera
                }
            }, {
                key: "scene",
                get: function() {
                    return this.a_scene
                }
            }, {
                key: "blurScene",
                get: function() {
                    return this.a_blurScene
                }
            }, {
                key: "bloomScene",
                get: function() {
                    return this.a_bloomScene
                }
            }], [{
                key: "initStats",
                value: function(e) {
                    var t = new o.default;
                    return t.setMode(0), t.domElement.style.position = "absolute", t.domElement.style.left = "0px", t.domElement.style.tip = "0px", e.appendChild(t.domElement), t
                }
            }, {
                key: "onMouseMove",
                value: function(e) {}
            }]), e
        }();
        t.default = u
    },
    AvWz: function(e, t) {
        e.exports = "#define GLSLIFY 1\nuniform vec3 viewVector;\nuniform float c;\nuniform float p;\nuniform float uTime;\nuniform vec2 uMouse;\nuniform float uFadeTime;\nattribute vec2 aDelayDuration;\nattribute float size;\nvarying float intensity;\nvarying float alpha;\nuniform float uAlpha;\nuniform bool isCustomAlpha;\n\nvoid main()\n{\n    if(uFadeTime > 0.00001){\n\n    vec3 vNormal = normalize( normalMatrix * normal );\n\tvec3 vNormel = normalize( normalMatrix * viewVector );\n\tintensity = pow( c - dot(vNormal, vNormel), p );\n\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    gl_PointSize = size * ( 300.0 / -mvPosition.z );\n\n    float m = mod(size, sin( uTime * 10.0 + (position.x + position.y) / 100.0));\n\n        if(m > 0.5 && m < 0.7){\n          alpha = clamp(abs(sin(uTime * 10.0)), 0.2, 0.5);\n        }\n        if(m > 0.8){\n          alpha = clamp(abs(sin(uTime * 10.0)), 0.2, 0.5);\n        }\n\n        if(m > 0.0 && m < 0.5){\n          alpha = clamp(abs(sin(uTime * 10.0)), 0.2, 0.7);\n        }\n\n\n        //static ligthning\n        if( isCustomAlpha ) {\n            alpha = uAlpha;\n        }\n\n\n    gl_PointSize = 9.5 * size;\n\n    gl_Position += projectionMatrix * mvPosition;\n\n   }\n\n}"
    },
    "EYp+": function(e, t) {
        e.exports = "#define GLSLIFY 1\nuniform vec3 glowColor;\nuniform sampler2D lightningTexture;\nvarying float intensity;\nvarying vec2 vUv;\nuniform float offsetY;\nuniform float uTime;\n\nvoid main(){\n    vec2 uv = vUv;\n    uv.y += offsetY;\n\n  \tvec3 glow = glowColor * intensity;\n    vec3 color = vec3(step(0.1, uv.y) - step(0.2, uv.y)) - vec3(texture2D(lightningTexture, uv));\n\n\tfloat alpha = clamp(cos(uTime* 3.0) , 0.5, 1.0);\n\n    gl_FragColor = vec4( glow + color, alpha);\n}"
    },
    "FAD+": function(e, t) {
        e.exports = "float noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    // Smooth Interpolation\n\n    // Cubic Hermine Curve.  Same as SmoothStep()\n    vec2 u = f*f*(3.0-2.0*f);\n    // u = smoothstep(0.,1.,f);\n\n    // Mix 4 coorners porcentages\n    return mix(a, b, u.x) +\n        (c - a)* u.y * (1.0 - u.x) +\n        (d - b) * u.x * u.y;\n}"
    },
    "Mz7+": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = w(n("fZjL")),
            i = w(n("Dd8w")),
            a = w(n("Zx67")),
            o = w(n("Zrlr")),
            r = w(n("wxAW")),
            l = w(n("zwoO")),
            u = w(n("Pf15")),
            c = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(n("Ml+6")),
            m = n("+Uzz");
        n("9ezR");
        var d = w(n("9j+D")),
            f = w(n("n7fH")),
            p = w(n("Pr7j")),
            h = w(n("wGpE")),
            b = w(n("Wh61")),
            v = w(n("p4IY")),
            g = w(n("rXwf")),
            y = w(n("2J3f"));

        function w(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var S = function(e) {
            function t() {
                (0, o.default)(this, t);
                var e = (0, l.default)(this, (t.__proto__ || (0, a.default)(t)).call(this));
                return e.clock = new c.Clock, e.addBrain = e.addBrain.bind(e), e.addFloor(), e.addIllumination(), e.deltaTime = 0, e.particlesColor = new c.Color(16777215), e.particlesStartColor = new c.Color(16777215), e.loaders = new f.default(e.runAnimation.bind(e)), e.memories = y.default, e.memorySelected = ["analytic", "episodic", "process", "semantic", "affective"], e.frame = 0, e.frameName = 0, e.isRecording = !1, setTimeout(function() {
                    e.startIntro()
                }, 1e3), e
            }
            return (0, u.default)(t, e), (0, r.default)(t, [{
                key: "addFloor",
                value: function() {
                    var e = new c.PlaneBufferGeometry(2e4, 2e4),
                        t = new c.MeshPhongMaterial({
                            opacity: .1,
                            transparent: !0
                        });
                    this.plane = new c.Mesh(e, t), this.plane.receiveShadow = !0, this.plane.position.y = -160, this.plane.rotation.x = -.5 * Math.PI, this.scene.add(this.plane)
                }
            }, {
                key: "addIllumination",
                value: function() {
                    this.ambienlight = new c.AmbientLight(12109263, 0), this.scene.add(this.ambienlight), this.spotLight = new c.SpotLight(12109263, 1.45, 175, Math.PI / 2, 0, 0), this.spotLight.position.set(0, 500, -10), this.spotLight.castShadow = !0, this.spotLight.castShadow = !0, this.spotLight.shadow = new c.LightShadow(new c.PerspectiveCamera(54, window.innerWidth / window.innerHeight, 1, 2e3)), this.spotLight.shadow.bias = -222e-6, this.spotLight.shadow.mapSize.width = 1024, this.spotLight.shadow.mapSize.height = 1024, this.scene.add(this.spotLight), this.spotLightHelper = new c.SpotLightHelper(this.spotLight)
                }
            }, {
                key: "addBrain",
                value: function() {
                    var e = this;
                    this.brainBufferGeometries = [], this.loaders.BRAIN_MODEL.traverse(function(n) {
                        n instanceof c.LineSegments && (e.memories.lines = (0, i.default)({}, e.memories.lines, t.addLinesPath(n, e.memories))), n instanceof c.Mesh && (n.geometry.verticesNeedUpdate = !0, e.brainBufferGeometries.push(n.geometry), e.memories = (0, i.default)({}, e.memories, t.storeBrainVertices(n, e.memories)))
                    }), this.endPointsCollections = c.BufferGeometryUtils.mergeBufferGeometries(this.brainBufferGeometries)
                }
            }, {
                key: "startIntro",
                value: function() {
                    var e = this,
                        t = {
                            p: 1e3
                        };
                    m.TweenMax.fromTo(t, 6.5, {
                        p: 1e3
                    }, {
                        p: 380,
                        ease: m.Power4.easeInOut,
                        onUpdate: function() {
                            e.camera.position.z = t.p
                        },
                        onStart: function() {
                            e.particlesSystem.transform(!0)
                        },
                        onComplete: function() {
                            e.particlesSystem.xRay.material.uniforms.c.value = 1, e.startAutoDemo()
                        }
                    })
                }
            }, {
                key: "startAutoDemo",
                value: function() {
                    var e = this,
                        t = 1;
                    this.scene.add(this.particlesSystem.xRay);
                    var n = void 0;
                    setTimeout(function() {
                        e.particlesSystem.isXRayActive(!0), setTimeout(function() {
                            e.particlesSystem.isXRayActive(!1), n = setInterval(function() {
                                t < 5 ? (e.bubblesAnimation.updateSubSystem(t), t += 1) : (e.bubblesAnimation.updateSubSystem(0), clearInterval(n))
                            }, 9e3)
                        }, 4e3)
                    }, 2e3)
                }
            }, {
                key: "runAnimation",
                value: function() {
                    this.gui = new b.default(this), this.addBrain(), this.addParticlesSystem(), this.font = new v.default(this.loaders, this.scene), this.bubblesAnimation = new p.default(this), this.bubblesAnimation.initAnimation(), this.thinkingAnimation = new h.default(this), this.thinkingAnimation.initAnimation(), this.animate()
                }
            }, {
                key: "animate",
                value: function(e) {
                    this.orbitControls.update(), this.orbitControls.autoRotateSpeed = this.gui.controls.rotationSpeed, this.deltaTime += this.clock.getDelta(), this.particlesSystem.update(this.deltaTime, this.camera, this.particlesSystem.xRay), this.bubblesAnimation.update(this.camera, this.deltaTime), this.thinkingAnimation.update(this.camera, this.deltaTime), this.stats.update(), requestAnimationFrame(this.animate.bind(this)), this.font.facingToCamera(this.camera), this.camera.updateProjectionMatrix(), this.thinkingAnimation.flashing.geometry.verticesNeedUpdate = !0, this.thinkingAnimation.flashing.geometry.attributes.position.needsUpdate = !0, this.composer.render(), this.isRecording && (this.frame > 10 && this.socket.emit("render-frame", {
                        frame: this.frameName += 1,
                        file: document.querySelector("canvas").toDataURL()
                    }), this.frame += 1)
                }
            }, {
                key: "onMouseMove",
                value: function(e) {
                    window.innerHeight, e.clientY, window.innerHeight, e.clientX
                }
            }, {
                key: "addParticlesSystem",
                value: function() {
                    this.particlesSystem = new g.default(this, this.endPointsCollections, this.memories), this.scene.add(this.particlesSystem.particles)
                }
            }], [{
                key: "addLinesPath",
                value: function(e, t) {
                    (0, s.default)(t.lines).map(function(n) {
                        return e.name.includes(n) ? (t.lines[n] = e.geometry.attributes.position.array, t.lines) : []
                    })
                }
            }, {
                key: "storeBrainVertices",
                value: function(e, t) {
                    (0, s.default)(t).map(function(n) {
                        return e.name.includes(n) ? t[n].length ? (t[n].push(e.geometry), t[n] = [c.BufferGeometryUtils.mergeBufferGeometries(t[n])], t) : t[n].push(e.geometry) : []
                    })
                }
            }, {
                key: "getRandomPointOnSphere",
                value: function(e) {
                    var t = c.Math.randFloat(0, 1),
                        n = c.Math.randFloat(0, 1),
                        s = 2 * Math.PI * t,
                        i = Math.acos(2 * n - 1);
                    return {
                        x: e * Math.sin(s) * Math.sin(i),
                        y: e * Math.cos(s) * Math.sin(i),
                        z: e * Math.cos(i)
                    }
                }
            }]), t
        }(d.default);
        t.default = S
    },
    Pr7j: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = d(n("Zrlr")),
            i = d(n("wxAW")),
            a = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(n("Ml+6")),
            o = n("+Uzz"),
            r = d(n("M4fF")),
            l = d(n("tE7Q")),
            u = d(n("6KJG")),
            c = d(n("VGPT")),
            m = d(n("cQvb"));

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = function() {
            function e(t) {
                (0, s.default)(this, e), this.mainBrain = t, this.isFlashing = !1, this.memorySelected = t.memorySelected, this.isBubblesInserted = !1, this.winner = "", this.winnerGroup = "", this.fistCameraReposition = !1
            }
            return (0, i.default)(e, [{
                key: "getBubblesSelected",
                value: function(t, n) {
                    var s = this,
                        i = this.mainBrain.memories,
                        o = [];
                    console.log(n);
                    var r = n.winner,
                        l = n.winnerGroup,
                        u = n.subsystemResults;
                    this.winner = r, this.winnerGroup = l, u.forEach(function(t) {
                        var n = e.getSubsystemGroup(t.subsystem) || "episodic",
                            l = i[n][0].attributes.position.array,
                            u = a.Math.randInt(4500, l.length / 3 - 4),
                            c = l[3 * u + 0] || 0,
                            m = l[3 * u + 1] || 0,
                            d = l[3 * u + 2] || 0,
                            f = (a.Math.randInt(120, 150), s.mainBrain.particlesSystem.particles);
                        if (r === t.subsystem) {
                            200;
                            var p = new a.SphereGeometry(2, 32, 32),
                                h = new a.MeshNormalMaterial,
                                b = new a.Mesh(p, h);
                            f.add(b), b.position.set(c, m, d), o.push(c, m + 150, d, 3)
                        }
                        var v = new a.Object3D;
                        f.add(v)
                    });
                    var c = 0;
                    if (this.isBubblesInserted)
                        for (var m = 0; m < t.length / 4; m += 1) {
                            var d = t[4 * m + 3] || 0;
                            2 !== d && 3 !== d || c < o.length / 4 && (t[4 * m + 0] = o[4 * c + 0], t[4 * m + 1] = o[4 * c + 1], t[4 * m + 2] = o[4 * c + 2], c += 1)
                        } else {
                            for (var f = 0; f < o.length / 4; f += 1) t[4 * f + 0] = o[4 * c + 0], t[4 * f + 1] = o[4 * c + 1], t[4 * f + 2] = o[4 * c + 2], t[4 * f + 3] = o[4 * c + 3], c += 1;
                            this.isBubblesInserted = !0
                        }
                    return o
                }
            }, {
                key: "isWinnerActive",
                value: function(e) {
                    var t = this;
                    if (e)
                        for (var n = function(e) {
                                if (t.mainBrain.memorySelected[e] === t.winnerGroup) {
                                    var n = {
                                        p: 0
                                    };
                                    o.TweenMax.fromTo(n, 2.5, {
                                        p: 0
                                    }, {
                                        p: 1,
                                        ease: o.Power1.easeInOut,
                                        onUpdate: function() {
                                            t.bubbles.material.uniforms.uWinnerAlpha.value = n.p
                                        },
                                        onStart: function() {
                                            t.bubbles.material.uniforms.uWinnerSelected.value = e, t.bubbles.material.uniforms.isWinnerActive.value = !0
                                        }
                                    })
                                }
                            }, s = 0; s < this.mainBrain.memorySelected.length; s += 1) n(s);
                    else {
                        var i = {
                            p: 1
                        };
                        o.TweenMax.fromTo(i, 2.5, {
                            p: 1
                        }, {
                            p: 0,
                            ease: o.Power1.easeInOut,
                            onUpdate: function() {
                                t.bubbles.material.uniforms.uWinnerAlpha.value = i.p
                            },
                            onComplete: function() {
                                t.bubbles.material.uniforms.isWinnerActive.value = !1, t.bubbles.material.uniforms.uWinnerSelected.value = 0
                            }
                        })
                    }
                }
            }, {
                key: "initAnimation",
                value: function() {
                    for (var e = this.mainBrain, t = e.scene, n = e.camera, s = e.memories, i = new a.BufferGeometry, o = [], r = [], c = [], m = [], d = [], f = 0; f < 1e5 - 3 * this.memorySelected.length; f += 1) {
                        var p = a.Math.randInt(0, 4),
                            h = this.memorySelected[p],
                            b = s[h][0].attributes.position.array[3 * f + 0] || 0,
                            v = s[h][0].attributes.position.array[3 * f + 1] || 0,
                            g = s[h][0].attributes.position.array[3 * f + 2] || 0;
                        if (r.push(b, v, g), d.push(b, v, g, p), o[f] = a.Math.randFloat(10, 20), f % 100 == 0) {
                            var y = a.Math.randInt(100, 250) + v;
                            m.push(b, y, g, 1)
                        } else m.push(b, v, g, 0);
                        c[2 * f + 0] = a.Math.randFloat(.5, 1.5), c[2 * f + 1] = 2.5
                    }
                    i.addAttribute("aDelayDuration", new a.Float32BufferAttribute(c, 2)), i.addAttribute("bubbles", new a.Float32BufferAttribute(m, 4)), i.addAttribute("position", new a.Float32BufferAttribute(r, 3)), i.addAttribute("color", new a.Float32BufferAttribute([], 3)), i.addAttribute("size", new a.Float32BufferAttribute(o, 1)), i.addAttribute("aMemory", new a.Float32BufferAttribute(d, 4)), i.computeBoundingSphere();
                    var w = new a.ShaderMaterial({
                        uniforms: {
                            c: {
                                type: "f",
                                value: .9
                            },
                            p: {
                                type: "f",
                                value: 2.8
                            },
                            glowColor: {
                                type: "c",
                                value: new a.Color(2899603)
                            },
                            viewVector: {
                                type: "v3",
                                value: n.position
                            },
                            uTime: {
                                type: "f",
                                value: 0
                            },
                            uSlowTime: {
                                type: "f",
                                value: 0
                            },
                            uBubblesUp: {
                                type: "f",
                                value: 0
                            },
                            uIsFlashing: {
                                type: "b",
                                value: !1
                            },
                            isWinnerActive: {
                                type: "b",
                                value: !1
                            },
                            uWinnerSelected: {
                                type: "f",
                                value: 0
                            },
                            uWinnerAlpha: {
                                type: "f",
                                value: 0
                            },
                            uFlashingAlpha: {
                                type: "f",
                                value: 0
                            },
                            uMouse: {
                                type: "f",
                                value: new a.Vector2(0)
                            }
                        },
                        vertexShader: l.default,
                        fragmentShader: u.default,
                        flatShading: a.SmoothShading,
                        blending: a.AdditiveBlending,
                        side: a.DoubleSide,
                        depthTest: !1,
                        vertexColors: !1,
                        transparent: !0
                    });
                    this.bubbles = new a.Points(i, w), this.bubbles.name = "memory", t.add(this.bubbles), console.log("Bubble Object", this.bubbles)
                }
            }, {
                key: "updateSubSystem",
                value: function(t) {
                    var n = this,
                        s = e.processSubsystemResponses(t);
                    this.mainBrain.thinkingAnimation.isActive(!0), this.bubbles.geometry.attributes.bubbles.needsUpdate = !1;
                    this.mainBrain.camera.position, this.mainBrain.orbitControls.target;
                    var i = this.bubbles.geometry.attributes.bubbles.array,
                        a = {
                            p: 1
                        };
                    this.isWinnerActive(!1), this.mainBrain.font.removeText(), o.TweenMax.fromTo(a, 2.5, {
                        p: 1
                    }, {
                        p: 0,
                        ease: o.Power1.easeInOut,
                        onUpdate: function() {
                            n.updateBurbleUp(a.p)
                        },
                        onStart: function() {
                            n.fistCameraReposition && n.animate(!1)
                        },
                        onComplete: function() {
                            n.getBubblesSelected(i, s), n.bubbles.geometry.attributes.bubbles.needsUpdate = !0, n.animate(!0), n.mainBrain.thinkingAnimation.isActive(!1), n.fistCameraReposition = !0
                        }
                    })
                }
            }, {
                key: "update",
                value: function(e) {
                    this.bubbles.material.uniforms.viewVector.value = (new a.Vector3).subVectors(e.position, this.bubbles.position), this.bubbles.material.uniforms.uTime.value += .05, this.bubbles.material.uniforms.uSlowTime.value += .0025
                }
            }, {
                key: "updateBurbleUp",
                value: function(e) {
                    this.bubbles.material.uniforms.uBubblesUp.value = e
                }
            }, {
                key: "updateMouse",
                value: function(e) {
                    this.bubbles.material.uniforms.uMouse.value = e
                }
            }, {
                key: "flashingAnimation",
                value: function(e) {
                    var t = this;
                    if (this.bubbles.material.uniforms.uIsFlashing.value = e, this.mainBrain.thinkingAnimation.isActive(!1), e) {
                        var n = {
                            p: 0
                        };
                        o.TweenMax.fromTo(n, 2.5, {
                            p: 0
                        }, {
                            p: 1,
                            ease: o.Power1.easeInOut,
                            onUpdate: function() {
                                t.bubbles.material.uniforms.uFlashingAlpha.value = n.p, t.isFlashing = !0
                            }
                        })
                    } else {
                        var s = {
                            p: 1
                        };
                        o.TweenMax.fromTo(s, 2.5, {
                            p: 1
                        }, {
                            p: 0,
                            ease: o.Power1.easeInOut,
                            onUpdate: function() {
                                t.bubbles.material.uniforms.uFlashingAlpha.value = s.p, t.isFlashing = !1
                            }
                        })
                    }
                }
            }, {
                key: "animate",
                value: function(e) {
                    var t = this,
                        n = this.mainBrain.camera.position,
                        s = this.mainBrain.orbitControls.target;
                    if (this.isFlashing || this.flashingAnimation(!0), e) {
                        var i = {
                            p: 0,
                            camera: 0
                        };
                        o.TweenMax.fromTo(i, 2.5, {
                            p: 0,
                            camera: 0
                        }, {
                            p: 1,
                            camera: .5,
                            ease: o.Power1.easeInOut,
                            onUpdate: function() {
                                t.updateBurbleUp(i.p), t.mainBrain.orbitControls.target.set(s.x, s.y + i.camera, s.z), t.mainBrain.camera.position.set(n.x, n.y + i.camera, n.z)
                            },
                            onComplete: function() {
                                t.isWinnerActive(!0)
                            }
                        })
                    } else {
                        var a = {
                            p: 1,
                            camera: .5
                        };
                        o.TweenMax.fromTo(a, 2.5, {
                            p: 1,
                            camera: .5
                        }, {
                            p: 0,
                            camera: 0,
                            ease: o.Power1.easeInOut,
                            onUpdate: function() {
                                t.updateBurbleUp(a.p), t.mainBrain.orbitControls.target.set(s.x, s.y - a.camera, s.z), t.mainBrain.camera.position.set(n.x, n.y - a.camera, n.z)
                            },
                            onStart: function() {
                                t.isWinnerActive(!1)
                            }
                        })
                    }
                }
            }], [{
                key: "processSubsystemResponses",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = Math.floor(m.default[t]) && Math.floor(m.default[t]).attributes || {
                            subsystemResults: []
                        },
                        s = n.winningSubsystem,
                        i = n.subsystemResults;
                    return {
                        winner: s,
                        winnerGroup: e.getSubsystemGroup(s),
                        subsystemResults: i
                    }
                }
            }, {
                key: "getSubsystemGroup",
                value: function(e) {
                    var t = r.default.head(r.default.filter(c.default, {
                        id: e
                    }));
                    if (r.default.has(t, "group")) return t.group
                }
            }]), e
        }();
        t.default = f
    },
    VGPT: function(e, t) {
        e.exports = [{
            id: "IntentFAQ",
            group: "semantic"
        }, {
            id: "SocialTalk",
            group: "semantic"
        }, {
            id: "FAQ",
            group: "semantic"
        }, {
            id: "Semnet",
            group: "semantic"
        }, {
            id: "Escalate",
            group: "semantic"
        }, {
            id: "EpisodicMemory",
            group: "episodic"
        }, {
            id: "Affective",
            group: "affective"
        }, {
            id: "AIML",
            group: "affective"
        }, {
            id: "Bpn",
            group: "process"
        }, {
            id: "Cqa",
            group: "analytic"
        }, {
            id: "EQA",
            group: "analytic"
        }, {
            id: "LogicNet",
            group: "analytic"
        }]
    },
    Wh61: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = c(n("Zrlr")),
            i = c(n("wxAW")),
            a = u(n("Ml+6")),
            o = n("+Uzz"),
            r = u(n("ZApB")),
            l = c(n("cQvb"));

        function u(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var m = function() {
            function e(t) {
                (0, s.default)(this, e), this.initGui(t)
            }
            return (0, i.default)(e, [{
                key: "initGui",
                value: function(e) {
                    var t = this,
                        n = e;
                    this.controls = new function() {
                        this.rotationSpeed = .5, this.floor = 14541801, this.transitioning = !1, this.autoRotate = !0, this.lightIntensity = 1.45, this.lightDistance = 175, this.lightHelper = !1, this.angle = 1, this.uBurbleUp = 0, this.burbleProgress = .1, this.showBubbles = !1, this.particleGlow = 14541801, this.memory = 1, this.thinking = !1, this.startIntro = !0, this.recording = !1, this.cameraAnimation = 1, this.c = 1.11, this.p = 1, this.offsetY = .1, this.showXray = !1
                    };
                    var s = new r.GUI;
                    s.add(this.controls, "rotationSpeed", .1, 2), s.add(this.controls, "autoRotate").onChange(function(e) {
                        n.orbitControls.autoRotate = e
                    }), s.add(this.controls, "recording").onChange(function(e) {
                        n.isRecording = e
                    }), s.add(this.controls, "showXray").onChange(function(e) {
                        n.particlesSystem.isXRayActive(e)
                    }), s.add(this.controls, "lightIntensity", 0, 2).onChange(function(e) {
                        t.spotLight.intensity = e
                    }), s.add(this.controls, "c", 0, 2).onChange(function(e) {
                        n.particlesSystem.xRay.material.uniforms.c.value = e
                    }), s.add(this.controls, "p", 0, 20).onChange(function(e) {
                        n.particlesSystem.xRay.material.uniforms.p.value = e
                    }), s.add(this.controls, "offsetY", 0, 2).onChange(function(e) {
                        n.particlesSystem.xRay.material.uniforms.offsetY.value = e
                    }), s.add(this.controls, "lightHelper").onChange(function(e) {
                        e ? n.scene.add(n.spotLightHelper) : n.scene.remove(n.spotLightHelper)
                    }), s.add(this.controls, "cameraAnimation", 0, 4).onFinishChange(function(e) {
                        n.thinkingAnimation.animationCamera(e)
                    }), s.add(this.controls, "lightDistance", 0, 1800).onChange(function(e) {
                        n.spotLight.position.set(0, e, -10)
                    }), s.add(this.controls, "uBurbleUp", 0, 1).onChange(function(e) {
                        n.bubblesAnimation.updateBurbleUp(e)
                    }), s.add(this.controls, "memory", 0, 4).onChange(function(e) {
                        n.bubblesAnimation.updateSubSystem(l.default)
                    }), s.addColor(this.controls, "particleGlow").onChange(function(e) {
                        n.scene.background = new a.Color(e)
                    }), s.addColor(this.controls, "floor").onChange(function(e) {
                        n.plane.material.color = new a.Color(e)
                    }), s.add(this.controls, "burbleProgress", 0, 1).onChange(function(e) {
                        n.bubblesAnimation.updateBurbleUp(e)
                    }), s.add(this.controls, "showBubbles").onChange(function(e) {
                        n.bubblesAnimation.animate(e)
                    }), s.add(this.controls, "startIntro").onChange(function(e) {
                        n.startIntro(e)
                    }), s.add(this.controls, "thinking").onChange(function(e) {
                        n.thinkingAnimation.isActive(e)
                    }), s.add(this.controls, "transitioning").onChange(function(e) {
                        if (e) {
                            var t = {
                                p: 0
                            };
                            o.TweenMax.fromTo(t, 2, {
                                p: 0
                            }, {
                                p: 1.5,
                                ease: o.Power1.easeIn,
                                onUpdate: function(e) {
                                    n.particlesSystem.updateTransitioning(t.p)
                                }
                            })
                        } else {
                            var s = {
                                p: 1
                            };
                            o.TweenMax.fromTo(s, 2, {
                                p: 1
                            }, {
                                p: .5,
                                ease: o.Power1.easeIn,
                                onUpdate: function(e) {
                                    n.particlesSystem.updateTransitioning(s.p)
                                }
                            })
                        }
                    })
                }
            }]), e
        }();
        t.default = m
    },
    XbjG: function(e, t) {
        e.exports = "float random (in vec2 st) {\n   return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);\n}"
    },
    cQvb: function(e, t) {
        e.exports = [{
            messageId: "d542ac85-88c9-4d49-a5cb-08514cb67ba0",
            conversationId: "LDWNSLVXAAIAA-1",
            inResponseToMessageId: "76186dad-cba3-423f-ae27-35a796028c24",
            sourceSessionId: "b9e1fdeb-4417-463f-a9f2-4f2253d9e38b",
            sourceClass: "ContextDialogManagementService",
            messageText: null,
            attributes: {
                inboundText: "hello",
                preProcessors: [{
                    time: "21.31 μs",
                    processor: "SetCustomConversationAttributesProcessor"
                }, {
                    time: "50.09 μs",
                    processor: "TranslationProcessor"
                }, {
                    time: "723.8 ms",
                    processor: "InboundNlpProcessor"
                }, {
                    time: "48.58 ms",
                    processor: "CorefProcessor"
                }, {
                    time: "322.6 ms",
                    processor: "GoalAndEntityProcessor"
                }, {
                    time: "221.3 ms",
                    processor: "UserAffectUpdateService"
                }, {
                    time: "9.804 ms",
                    processor: "AnalyticsProcessor"
                }, {
                    time: "29.28 μs",
                    processor: "BpnLearningProcessor"
                }],
                winningSubsystem: "analytic",
                initialContext: {
                    dialogState: "ACTIVE",
                    contextId: "763decf0-31b2-4e3c-b44b-531a294c6fcf",
                    preferredResponder: null
                },
                subsystemResults: [{
                    result: "OK",
                    subsystem: "Semnet",
                    responses: [],
                    time: "13.63 ms"
                }, {
                    result: "NONE",
                    subsystem: "Bpn",
                    responses: [],
                    time: "18.43 ms"
                }, {
                    result: "RESPONDED",
                    subsystem: "AIML",
                    responses: ["Hi victor, How can I help you?."],
                    time: "31.98 ms"
                }, {
                    result: "NONE",
                    subsystem: "LogicNet",
                    responses: [],
                    time: "17.74 ms"
                }, {
                    result: "RESPONDED",
                    subsystem: "DontKnow",
                    responses: [null],
                    time: "15.94 ms"
                }, {
                    result: "NONE",
                    subsystem: "FAQ",
                    responses: [],
                    time: "43.49 ms"
                }, {
                    result: "NONE",
                    subsystem: "EQA",
                    responses: [],
                    time: "19.72 ms"
                }, {
                    result: "NONE",
                    subsystem: "EpisodicMemory",
                    responses: [],
                    time: "706.8 ms"
                }, {
                    result: "NONE",
                    subsystem: "IntentFAQ",
                    responses: [],
                    time: "55.04 ms"
                }, {
                    result: "NONE",
                    subsystem: "Affective",
                    responses: [],
                    time: "24.98 ms"
                }, {
                    result: "NONE",
                    subsystem: "Escalate",
                    responses: [],
                    time: "10.61 ms"
                }, {
                    result: "RESPONDED",
                    subsystem: "SocialTalk",
                    responses: [null],
                    time: "22.22 ms"
                }, {
                    result: "NONE",
                    subsystem: "SemnetDoc",
                    responses: [],
                    time: "13.79 ms"
                }, {
                    result: "NONE",
                    subsystem: "AcknowledgeDefault",
                    responses: [],
                    time: "24.76 ms"
                }],
                finalContext: {
                    dialogState: "ACTIVE",
                    contextId: "763decf0-31b2-4e3c-b44b-531a294c6fcf",
                    preferredResponder: null
                }
            },
            fromUserDisplayName: "Amelia",
            secureResponse: !1,
            id: "d542ac85-88c9-4d49-a5cb-08514cb67ba0",
            messageType: "OutboundArbitrationResultsMessage",
            translated: !1,
            voice: "VW Julie"
        }, {
            messageId: "d542ac85-88c9-4d49-a5cb-08514cb67ba0",
            conversationId: "LDWNSLVXAAIAA-1",
            inResponseToMessageId: "76186dad-cba3-423f-ae27-35a796028c24",
            sourceSessionId: "b9e1fdeb-4417-463f-a9f2-4f2253d9e38b",
            sourceClass: "ContextDialogManagementService",
            messageText: null,
            attributes: {
                inboundText: "hello",
                preProcessors: [{
                    time: "21.31 μs",
                    processor: "SetCustomConversationAttributesProcessor"
                }, {
                    time: "50.09 μs",
                    processor: "TranslationProcessor"
                }, {
                    time: "723.8 ms",
                    processor: "InboundNlpProcessor"
                }, {
                    time: "48.58 ms",
                    processor: "CorefProcessor"
                }, {
                    time: "322.6 ms",
                    processor: "GoalAndEntityProcessor"
                }, {
                    time: "221.3 ms",
                    processor: "UserAffectUpdateService"
                }, {
                    time: "9.804 ms",
                    processor: "AnalyticsProcessor"
                }, {
                    time: "29.28 μs",
                    processor: "BpnLearningProcessor"
                }],
                winningSubsystem: "episodic",
                initialContext: {
                    dialogState: "ACTIVE",
                    contextId: "763decf0-31b2-4e3c-b44b-531a294c6fcf",
                    preferredResponder: null
                },
                subsystemResults: [{
                    result: "OK",
                    subsystem: "Semnet",
                    responses: [],
                    time: "13.63 ms"
                }, {
                    result: "NONE",
                    subsystem: "Bpn",
                    responses: [],
                    time: "18.43 ms"
                }, {
                    result: "RESPONDED",
                    subsystem: "AIML",
                    responses: ["Hi victor, How can I help you?."],
                    time: "31.98 ms"
                }, {
                    result: "NONE",
                    subsystem: "LogicNet",
                    responses: [],
                    time: "17.74 ms"
                }, {
                    result: "RESPONDED",
                    subsystem: "DontKnow",
                    responses: [null],
                    time: "15.94 ms"
                }, {
                    result: "NONE",
                    subsystem: "FAQ",
                    responses: [],
                    time: "43.49 ms"
                }, {
                    result: "NONE",
                    subsystem: "EQA",
                    responses: [],
                    time: "19.72 ms"
                }, {
                    result: "NONE",
                    subsystem: "EpisodicMemory",
                    responses: [],
                    time: "706.8 ms"
                }, {
                    result: "NONE",
                    subsystem: "IntentFAQ",
                    responses: [],
                    time: "55.04 ms"
                }, {
                    result: "NONE",
                    subsystem: "Affective",
                    responses: [],
                    time: "24.98 ms"
                }, {
                    result: "NONE",
                    subsystem: "Escalate",
                    responses: [],
                    time: "10.61 ms"
                }, {
                    result: "RESPONDED",
                    subsystem: "SocialTalk",
                    responses: [null],
                    time: "22.22 ms"
                }, {
                    result: "NONE",
                    subsystem: "SemnetDoc",
                    responses: [],
                    time: "13.79 ms"
                }, {
                    result: "NONE",
                    subsystem: "AcknowledgeDefault",
                    responses: [],
                    time: "24.76 ms"
                }],
                finalContext: {
                    dialogState: "ACTIVE",
                    contextId: "763decf0-31b2-4e3c-b44b-531a294c6fcf",
                    preferredResponder: null
                }
            },
            fromUserDisplayName: "Amelia",
            secureResponse: !1,
            id: "d542ac85-88c9-4d49-a5cb-08514cb67ba0",
            messageType: "OutboundArbitrationResultsMessage",
            translated: !1,
            voice: "VW Julie"
        }, {
            messageId: "d542ac85-88c9-4d49-a5cb-08514cb67ba0",
            conversationId: "LDWNSLVXAAIAA-1",
            inResponseToMessageId: "76186dad-cba3-423f-ae27-35a796028c24",
            sourceSessionId: "b9e1fdeb-4417-463f-a9f2-4f2253d9e38b",
            sourceClass: "ContextDialogManagementService",
            messageText: null,
            attributes: {
                inboundText: "hello",
                preProcessors: [{
                    time: "21.31 μs",
                    processor: "SetCustomConversationAttributesProcessor"
                }, {
                    time: "50.09 μs",
                    processor: "TranslationProcessor"
                }, {
                    time: "723.8 ms",
                    processor: "InboundNlpProcessor"
                }, {
                    time: "48.58 ms",
                    processor: "CorefProcessor"
                }, {
                    time: "322.6 ms",
                    processor: "GoalAndEntityProcessor"
                }, {
                    time: "221.3 ms",
                    processor: "UserAffectUpdateService"
                }, {
                    time: "9.804 ms",
                    processor: "AnalyticsProcessor"
                }, {
                    time: "29.28 μs",
                    processor: "BpnLearningProcessor"
                }],
                winningSubsystem: "process",
                initialContext: {
                    dialogState: "ACTIVE",
                    contextId: "763decf0-31b2-4e3c-b44b-531a294c6fcf",
                    preferredResponder: null
                },
                subsystemResults: [{
                    result: "OK",
                    subsystem: "Semnet",
                    responses: [],
                    time: "13.63 ms"
                }, {
                    result: "NONE",
                    subsystem: "Bpn",
                    responses: [],
                    time: "18.43 ms"
                }, {
                    result: "RESPONDED",
                    subsystem: "AIML",
                    responses: ["Hi victor, How can I help you?."],
                    time: "31.98 ms"
                }, {
                    result: "NONE",
                    subsystem: "LogicNet",
                    responses: [],
                    time: "17.74 ms"
                }, {
                    result: "RESPONDED",
                    subsystem: "DontKnow",
                    responses: [null],
                    time: "15.94 ms"
                }, {
                    result: "NONE",
                    subsystem: "FAQ",
                    responses: [],
                    time: "43.49 ms"
                }, {
                    result: "NONE",
                    subsystem: "EQA",
                    responses: [],
                    time: "19.72 ms"
                }, {
                    result: "NONE",
                    subsystem: "EpisodicMemory",
                    responses: [],
                    time: "706.8 ms"
                }, {
                    result: "NONE",
                    subsystem: "IntentFAQ",
                    responses: [],
                    time: "55.04 ms"
                }, {
                    result: "NONE",
                    subsystem: "Affective",
                    responses: [],
                    time: "24.98 ms"
                }, {
                    result: "NONE",
                    subsystem: "Escalate",
                    responses: [],
                    time: "10.61 ms"
                }, {
                    result: "RESPONDED",
                    subsystem: "SocialTalk",
                    responses: [null],
                    time: "22.22 ms"
                }, {
                    result: "NONE",
                    subsystem: "SemnetDoc",
                    responses: [],
                    time: "13.79 ms"
                }, {
                    result: "NONE",
                    subsystem: "AcknowledgeDefault",
                    responses: [],
                    time: "24.76 ms"
                }],
                finalContext: {
                    dialogState: "ACTIVE",
                    contextId: "763decf0-31b2-4e3c-b44b-531a294c6fcf",
                    preferredResponder: null
                }
            },
            fromUserDisplayName: "Amelia",
            secureResponse: !1,
            id: "d542ac85-88c9-4d49-a5cb-08514cb67ba0",
            messageType: "OutboundArbitrationResultsMessage",
            translated: !1,
            voice: "VW Julie"
        }, {
            messageId: "d542ac85-88c9-4d49-a5cb-08514cb67ba0",
            conversationId: "LDWNSLVXAAIAA-1",
            inResponseToMessageId: "76186dad-cba3-423f-ae27-35a796028c24",
            sourceSessionId: "b9e1fdeb-4417-463f-a9f2-4f2253d9e38b",
            sourceClass: "ContextDialogManagementService",
            messageText: null,
            attributes: {
                inboundText: "hello",
                preProcessors: [{
                    time: "21.31 μs",
                    processor: "SetCustomConversationAttributesProcessor"
                }, {
                    time: "50.09 μs",
                    processor: "TranslationProcessor"
                }, {
                    time: "723.8 ms",
                    processor: "InboundNlpProcessor"
                }, {
                    time: "48.58 ms",
                    processor: "CorefProcessor"
                }, {
                    time: "322.6 ms",
                    processor: "GoalAndEntityProcessor"
                }, {
                    time: "221.3 ms",
                    processor: "UserAffectUpdateService"
                }, {
                    time: "9.804 ms",
                    processor: "AnalyticsProcessor"
                }, {
                    time: "29.28 μs",
                    processor: "BpnLearningProcessor"
                }],
                winningSubsystem: "semantic",
                initialContext: {
                    dialogState: "ACTIVE",
                    contextId: "763decf0-31b2-4e3c-b44b-531a294c6fcf",
                    preferredResponder: null
                },
                subsystemResults: [{
                    result: "OK",
                    subsystem: "Semnet",
                    responses: [],
                    time: "13.63 ms"
                }, {
                    result: "NONE",
                    subsystem: "Bpn",
                    responses: [],
                    time: "18.43 ms"
                }, {
                    result: "RESPONDED",
                    subsystem: "AIML",
                    responses: ["Hi victor, How can I help you?."],
                    time: "31.98 ms"
                }, {
                    result: "NONE",
                    subsystem: "LogicNet",
                    responses: [],
                    time: "17.74 ms"
                }, {
                    result: "RESPONDED",
                    subsystem: "DontKnow",
                    responses: [null],
                    time: "15.94 ms"
                }, {
                    result: "NONE",
                    subsystem: "FAQ",
                    responses: [],
                    time: "43.49 ms"
                }, {
                    result: "NONE",
                    subsystem: "EQA",
                    responses: [],
                    time: "19.72 ms"
                }, {
                    result: "NONE",
                    subsystem: "EpisodicMemory",
                    responses: [],
                    time: "706.8 ms"
                }, {
                    result: "NONE",
                    subsystem: "IntentFAQ",
                    responses: [],
                    time: "55.04 ms"
                }, {
                    result: "NONE",
                    subsystem: "Affective",
                    responses: [],
                    time: "24.98 ms"
                }, {
                    result: "NONE",
                    subsystem: "Escalate",
                    responses: [],
                    time: "10.61 ms"
                }, {
                    result: "RESPONDED",
                    subsystem: "SocialTalk",
                    responses: [null],
                    time: "22.22 ms"
                }, {
                    result: "NONE",
                    subsystem: "SemnetDoc",
                    responses: [],
                    time: "13.79 ms"
                }, {
                    result: "NONE",
                    subsystem: "AcknowledgeDefault",
                    responses: [],
                    time: "24.76 ms"
                }],
                finalContext: {
                    dialogState: "ACTIVE",
                    contextId: "763decf0-31b2-4e3c-b44b-531a294c6fcf",
                    preferredResponder: null
                }
            },
            fromUserDisplayName: "Amelia",
            secureResponse: !1,
            id: "d542ac85-88c9-4d49-a5cb-08514cb67ba0",
            messageType: "OutboundArbitrationResultsMessage",
            translated: !1,
            voice: "VW Julie"
        }, {
            messageId: "d542ac85-88c9-4d49-a5cb-08514cb67ba0",
            conversationId: "LDWNSLVXAAIAA-1",
            inResponseToMessageId: "76186dad-cba3-423f-ae27-35a796028c24",
            sourceSessionId: "b9e1fdeb-4417-463f-a9f2-4f2253d9e38b",
            sourceClass: "ContextDialogManagementService",
            messageText: null,
            attributes: {
                inboundText: "hello",
                preProcessors: [{
                    time: "21.31 μs",
                    processor: "SetCustomConversationAttributesProcessor"
                }, {
                    time: "50.09 μs",
                    processor: "TranslationProcessor"
                }, {
                    time: "723.8 ms",
                    processor: "InboundNlpProcessor"
                }, {
                    time: "48.58 ms",
                    processor: "CorefProcessor"
                }, {
                    time: "322.6 ms",
                    processor: "GoalAndEntityProcessor"
                }, {
                    time: "221.3 ms",
                    processor: "UserAffectUpdateService"
                }, {
                    time: "9.804 ms",
                    processor: "AnalyticsProcessor"
                }, {
                    time: "29.28 μs",
                    processor: "BpnLearningProcessor"
                }],
                winningSubsystem: "affective",
                initialContext: {
                    dialogState: "ACTIVE",
                    contextId: "763decf0-31b2-4e3c-b44b-531a294c6fcf",
                    preferredResponder: null
                },
                subsystemResults: [{
                    result: "OK",
                    subsystem: "Semnet",
                    responses: [],
                    time: "13.63 ms"
                }, {
                    result: "NONE",
                    subsystem: "Bpn",
                    responses: [],
                    time: "18.43 ms"
                }, {
                    result: "RESPONDED",
                    subsystem: "AIML",
                    responses: ["Hi victor, How can I help you?."],
                    time: "31.98 ms"
                }, {
                    result: "NONE",
                    subsystem: "LogicNet",
                    responses: [],
                    time: "17.74 ms"
                }, {
                    result: "RESPONDED",
                    subsystem: "DontKnow",
                    responses: [null],
                    time: "15.94 ms"
                }, {
                    result: "NONE",
                    subsystem: "FAQ",
                    responses: [],
                    time: "43.49 ms"
                }, {
                    result: "NONE",
                    subsystem: "EQA",
                    responses: [],
                    time: "19.72 ms"
                }, {
                    result: "NONE",
                    subsystem: "EpisodicMemory",
                    responses: [],
                    time: "706.8 ms"
                }, {
                    result: "NONE",
                    subsystem: "IntentFAQ",
                    responses: [],
                    time: "55.04 ms"
                }, {
                    result: "NONE",
                    subsystem: "Affective",
                    responses: [],
                    time: "24.98 ms"
                }, {
                    result: "NONE",
                    subsystem: "Escalate",
                    responses: [],
                    time: "10.61 ms"
                }, {
                    result: "RESPONDED",
                    subsystem: "SocialTalk",
                    responses: [null],
                    time: "22.22 ms"
                }, {
                    result: "NONE",
                    subsystem: "SemnetDoc",
                    responses: [],
                    time: "13.79 ms"
                }, {
                    result: "NONE",
                    subsystem: "AcknowledgeDefault",
                    responses: [],
                    time: "24.76 ms"
                }],
                finalContext: {
                    dialogState: "ACTIVE",
                    contextId: "763decf0-31b2-4e3c-b44b-531a294c6fcf",
                    preferredResponder: null
                }
            },
            fromUserDisplayName: "Amelia",
            secureResponse: !1,
            id: "d542ac85-88c9-4d49-a5cb-08514cb67ba0",
            messageType: "OutboundArbitrationResultsMessage",
            translated: !1,
            voice: "VW Julie"
        }]
    },
    cRIw: function(e, t) {
        e.exports = "#define GLSLIFY 1\nuniform vec3 viewVector;\nuniform float c;\nuniform float p;\nuniform float uTime;\nvarying float intensity;\nvarying  vec2 vUv;\n\nvoid main(){\n\n    vUv = uv;\n\n    vec3 vNormal = normalize( normalMatrix * normal );\n\tvec3 vNormel = normalize( normalMatrix * viewVector );\n    intensity = pow(c - abs(dot(vNormal, vec3(0, 0, 1))), p);\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n }"
    },
    eslX: function(e, t, n) {
        "use strict";
        n("pTlp");
        var s, i = n("Mz7+");
        new((s = i) && s.__esModule ? s : {
            default: s
        }).default
    },
    hmLD: function(e, t) {
        e.exports = {
            episodic: {
                x: 92,
                y: 45,
                z: 0,
                size: 50,
                camera: {
                    x: 144,
                    y: 30,
                    z: 284.6
                }
            },
            semanticRight: {
                x: 20,
                y: -30,
                z: 65,
                size: 50,
                camera: {
                    x: 100.92543906042464,
                    y: -.9434978080745353,
                    z: -238.15054105700113
                }
            },
            analityc: {
                x: -80,
                y: 20,
                z: 0,
                size: 50,
                camera: {
                    x: -231.7315097929428,
                    y: -17.545964846039936,
                    z: -221.1965290742952
                }
            },
            process: {
                x: -50,
                y: 75,
                z: 0,
                size: 50,
                camera: {
                    x: -152.59773939016097,
                    y: 152.71424382251672,
                    z: 237.33425301574184
                }
            },
            afective: {
                x: -100,
                y: -30,
                z: 0,
                size: 50,
                camera: {
                    x: -236.1407685891055,
                    y: -15.365212485321477,
                    z: -221.51856763625176
                }
            },
            semanticLeft: {
                x: 20,
                y: -30,
                z: -65,
                size: 50,
                camera: -1
            }
        }
    },
    joTG: function(e, t) {
        e.exports = "vec2 rotate2D(vec2 _st, float _angle){\n        _st -= 0.5;\n        _st =  mat2(cos(_angle),-sin(_angle), sin(_angle),cos(_angle)) * _st;\n        _st += 0.5;\n  return _st;\n}"
    },
    n7fH: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = r(n("ifoU")),
            i = r(n("Zrlr")),
            a = r(n("wxAW")),
            o = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(n("Ml+6"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        n("4iZf");
        var l = function() {
            function e(t) {
                (0, i.default)(this, e), this.BRAIN_MODEL = {}, this.brainXRayLight = {}, this.FONT = {}, this.assets = new s.default, this.models = ["BrainUVs.obj"], this.loadingManager = new o.LoadingManager, this.startAnimation = t, this.loadingManager.onLoad = this.handlerLoad.bind(this), this.loadingManager.onProgress = this.handlerProgress, this.loadingManager.onError = this.handlerError, this.loadingManager.onStart = this.handlerStart, this.setModel = this.setModel.bind(this), this.loadBrainTextures(), this.loadOBJs(), this.loadTextures(), this.loadFont(), this.loadSceneBackground()
            }
            return (0, a.default)(e, [{
                key: "handlerLoad",
                value: function() {
                    console.log("loading Complete!"), this.startAnimation()
                }
            }, {
                key: "setModel",
                value: function(e, t) {
                    switch (t) {
                        case 0:
                            this.BRAIN_MODEL = e;
                            break;
                        case 1:
                            this.XRAY_MODEL = e;
                            break;
                        default:
                            this.BRAIN_MODEL = e
                    }
                }
            }, {
                key: "loadOBJs",
                value: function() {
                    var e = this,
                        t = new o.OBJLoader(this.loadingManager);
                    this.models.forEach(function(n, s) {
                        t.load("static/models/" + n, function(t) {
                            e.setModel(t, s)
                        })
                    })
                }
            }, {
                key: "loadTextures",
                value: function() {
                    var e = this;
                    new o.TextureLoader(this.loadingManager).load("static/textures/spark1.png", function(t) {
                        e.spark = t
                    })
                }
            }, {
                key: "loadBrainTextures",
                value: function() {
                    var e = this;
                    new o.TextureLoader(this.loadingManager).load("static/textures/brainXRayLight.png", function(t) {
                        e.brainXRayLight = t
                    })
                }
            }, {
                key: "loadSceneBackground",
                value: function() {
                    var e = this,
                        t = "static/textures/sky/",
                        n = [t + "px.png", t + "nx.png", t + "py.png", t + "ny.png", t + "pz.png", t + "nz.png"];
                    new o.CubeTextureLoader(this.loadingManager).load(n, function(t) {
                        e.assets.set("sky", t)
                    })
                }
            }, {
                key: "loadFont",
                value: function() {
                    var e = this;
                    new o.FontLoader(this.loadingManager).load("static/fonts/Roboto_Regular.json", function(t) {
                        e.FONT = t
                    })
                }
            }], [{
                key: "handlerStart",
                value: function() {
                    console.log("Starting")
                }
            }, {
                key: "handlerProgress",
                value: function(e, t, n) {
                    console.log("Loading file: " + e + ".\nLoaded " + t + " of " + n + " files.")
                }
            }, {
                key: "handlerError",
                value: function(e) {
                    console.log("There was an error loading " + e)
                }
            }]), e
        }();
        t.default = l
    },
    p4IY: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = r(n("Zrlr")),
            i = r(n("wxAW")),
            a = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(n("Ml+6")),
            o = n("+Uzz");

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = function() {
            function e(t, n) {
                (0, s.default)(this, e), this.font = t.FONT, this.scene = n
            }
            return (0, i.default)(e, [{
                key: "makeTextSprite",
                value: function(e, t, n) {
                    var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
                        i = e,
                        r = t,
                        l = n;
                    if (r) {
                        var u = new a.Group;
                        this.scene.add(u);
                        var c = new a.MeshBasicMaterial({
                                color: new a.Color(1, 2, 1),
                                side: a.DoubleSide,
                                wireframe: !1
                            }),
                            m = this.font.generateShapes(i, s, s),
                            d = new a.ShapeGeometry(m);
                        d.computeBoundingBox();
                        var f = new a.Mesh(d, c),
                            p = f.geometry.boundingBox.max.x / 2;
                        f.position.set(l.x - p, l.y - 10, l.z), f.type = "Font", f.material.opacity = 0, f.material.transparent = !0, r.add(f), o.TweenLite.to(f.material, 2.5, {
                            ease: o.Power2.easeOut,
                            opacity: 1
                        }), o.TweenLite.to(f.position, 2.5, {
                            ease: o.Power2.easeOut,
                            y: l.y + 2
                        })
                    }
                }
            }, {
                key: "removeText",
                value: function(e) {
                    (e || this.scene || []).traverse(function(e) {
                        e instanceof a.Mesh && "Font" === e.type && (o.TweenLite.to(e.material, 2.5, {
                            ease: o.Power2.easeOut,
                            opacity: 0
                        }), o.TweenLite.to(e.position, 2.5, {
                            ease: o.Power2.easeOut,
                            y: e.position.y - 10,
                            onComplete: function() {
                                e.parent.remove(e)
                            }
                        }))
                    })
                }
            }, {
                key: "facingToCamera",
                value: function(e, t) {
                    (t || this.scene || []).traverse(function(t) {
                        t instanceof a.Mesh && "Font" === t.type && t.lookAt(e.position)
                    })
                }
            }]), e
        }();
        t.default = l
    },
    pTlp: function(e, t) {},
    rXwf: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = d(n("Zrlr")),
            i = d(n("wxAW")),
            a = m(n("dEn+")),
            o = m(n("Ml+6")),
            r = n("+Uzz"),
            l = d(n("6tj6")),
            u = d(n("cRIw")),
            c = d(n("EYp+"));

        function m(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = function() {
            function e(t, n, i) {
                (0, s.default)(this, e), this.chuncks = new l.default, this.brainParticles = n, this.memories = i, this.mainBrain = t, this.particlesStartColor = new o.Color(16777215), this.particlesColor = new o.Color(16777215);
                var a = this.init(),
                    r = a.xRayEffect,
                    u = a.systemPoints;
                this.particles = u, this.xRay = r
            }
            return (0, i.default)(e, [{
                key: "init",
                value: function() {
                    var t = this.brainParticles.attributes.position.array,
                        n = t.length / 3,
                        s = this,
                        i = new a.PointBufferGeometry(n),
                        r = e.getLoadingPoints();
                    i.createAttribute("aStartLoading", 3, function(e, n, s) {
                        var i = new o.Vector3;
                        r.length < t.length ? (i.x = r[3 * n + 0] || 0, i.y = r[3 * n + 1] || 0, i.z = o.Math.randFloat(-80, 1500)) : (i.x = 100, i.y = 100, i.z = o.Math.randFloat(-80, 1500)), i.toArray(e)
                    });
                    var l = new o.Color;
                    i.createAttribute("aStartColor", 3, function(e) {
                        var t = s.particlesStartColor,
                            n = t.r,
                            i = t.g,
                            a = t.b;
                        l.setRGB(n, i, a), l.toArray(e)
                    }), i.createAttribute("scale", 1, function(e) {
                        e[0] = o.Math.randFloat(200, 400)
                    }), i.createAttribute("aEndColor", 3, function(e) {
                        var t = s.particlesStartColor,
                            n = t.r,
                            i = t.g,
                            a = t.b;
                        l.setRGB(n, i, a), l.toArray(e)
                    }), i.createAttribute("aEndPos", 3, function(e, n) {
                        var s = new o.Vector3;
                        s.x = t[3 * n + 0], s.y = t[3 * n + 1], s.z = t[3 * n + 2], s.toArray(e)
                    }), this.totalDuration = 1.3, i.createAttribute("aDelayDuration", 3, function(e) {
                        e[0] = .3 * Math.random(), e[1] = 1
                    }), new a.PointBufferGeometry(n).createAttribute("position", 3, function(e, n) {
                        var s = new o.Vector3;
                        s.x = t[3 * n + 0], s.y = t[3 * n + 1], s.z = t[3 * n + 2], s.toArray(e)
                    });
                    var m = new a.PointsAnimationMaterial({
                            vertexColors: o.VertexColors,
                            deptWrite: !1,
                            blending: o.AdditiveBlending,
                            depthTest: !0,
                            transparent: !0,
                            uniforms: {
                                uTime: {
                                    type: "f",
                                    value: 0
                                },
                                uProgress: {
                                    type: "float",
                                    value: 0
                                },
                                uAngle: {
                                    type: "f",
                                    value: 1
                                },
                                uPointSizeEffect: {
                                    type: "f",
                                    value: .1
                                },
                                uColor: {
                                    value: new o.Color(16777215)
                                }
                            },
                            defines: {},
                            uniformValues: {
                                size: 1.9,
                                scale: 400
                            },
                            vertexFunctions: [a.ShaderChunk.ease_expo_in_out, a.ShaderChunk.quaternion_rotation, this.chuncks.rotate, this.chuncks.random, this.chuncks.noise],
                            vertexParameters: ["uniform float uTime;", "uniform float uPointSizeEffect;", "uniform float uProgress;", "uniform float uAngle;", "attribute vec2 aDelayDuration;", "attribute vec3 aStartLoading;", "attribute vec3 aStartPos;", "attribute vec3 aEndPos;", "attribute vec3 aStartColor;", "attribute vec3 aEndColor;", "attribute float aStartOpacity;", "attribute float aEndOpacity;"],
                            varyingParameters: ["\n          varying vec3 vParticle;\n          varying vec3 vEndPos;\n          varying vec3 vStartLoading;\n          "],
                            vertexInit: ["float tProgress = clamp(uProgress - aDelayDuration.x, 0.0, aDelayDuration.y) / aDelayDuration.y;", "tProgress = easeExpoInOut(tProgress);"],
                            vertexPosition: ["\n        // linearly interpolate between the start and end position based on tProgress\n        // and add the value as a delta\n \n         if(tProgress < 0.5){ \n         vec2 pos = vec2(aStartLoading.xy*5.0);\n\n        // Use the noise function\n        float n = noise(aStartLoading.yx);\n     vec2 test;\n      if(mod(aStartLoading.x, 2.0) < 0.2){\n            test = rotate2D(aStartLoading.xy, PI*2.0 * uTime * uAngle * n);\n             transformed += vec3(test.x, test.y, aStartLoading.z * n);\n        }else if (mod(aStartLoading.x, 2.0) >= 0.2 && mod(aStartLoading.x, 2.0) < 1.5){\n            test = rotate2D(aStartLoading.xy + n, PI*2.0 * uTime * 0.05 * uAngle * n);\n            transformed += vec3(test.x, test.y, aStartLoading.z * n);\n        }else {\n            test = rotate2D(aStartLoading.xy + n, PI*2.0 * uTime * 0.01 * uAngle * n);\n            transformed += vec3(test.x, test.y , aStartLoading.z * n);\n        }\n        }else{\n        \n  \n        //Brain Particles\n           transformed += mix(aStartLoading, aEndPos, tProgress);\n        }   \n        "],
                            vertexColor: [" \n         vParticle = aEndPos;\n         \n        vEndPos = aEndPos;\n        vStartLoading = aStartLoading;\n        "],
                            fragmentParameters: ["uniform float uTime;", "uniform vec3 uColor;"],
                            fragmentShape: ["\n        float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n        float pct = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);\n        vec3 color = vec3(1.0) * gl_FragColor.rgb;\n        gl_FragColor = vec4(color, pct * gl_FragColor.a);\n\n       "]
                        }),
                        d = new o.ShaderMaterial({
                            uniforms: {
                                c: {
                                    type: "f",
                                    value: .9
                                },
                                p: {
                                    type: "f",
                                    value: 6.7
                                },
                                glowColor: {
                                    type: "c",
                                    value: new o.Color(8703231)
                                },
                                viewVector: {
                                    type: "v3",
                                    value: new o.Vector3(0, 0, 0)
                                },
                                lightningTexture: {
                                    type: "t",
                                    value: this.mainBrain.loaders.brainXRayLight
                                },
                                offsetY: {
                                    type: "f",
                                    value: .3
                                },
                                uTime: {
                                    type: "f",
                                    value: 0
                                }
                            },
                            vertexShader: u.default,
                            fragmentShader: c.default,
                            side: o.DoubleSide,
                            blending: o.AdditiveBlending,
                            transparent: !0,
                            depthWrite: !1
                        }),
                        f = new o.Points(i, m);
                    console.error("MEMORIES", this.memories);
                    var p = (new o.Geometry).fromBufferGeometry(this.mainBrain.endPointsCollections);
                    p.computeFaceNormals(), p.mergeVertices(), p.computeVertexNormals();
                    var h = new o.Mesh(p, d);
                    return f.castShadow = !0, f.frustumCulled = !1, f.customDistanceMaterial = a.Utils.createDistanceAnimationMaterial(m), f.customDepthMaterial = new o.ShaderMaterial({
                        vertexShader: m.vertexShader,
                        fragmentShader: m.fragmentShader,
                        uniforms: m.uniforms
                    }), {
                        xRayEffect: h,
                        systemPoints: f
                    }
                }
            }, {
                key: "update",
                value: function(e, t, n) {
                    this.particles.material.uniforms.uTime.value = e, this.xRay.material.uniforms.viewVector.value = (new o.Vector3).subVectors(t.position, n.position), this.xRay.material.uniforms.uTime.value = e
                }
            }, {
                key: "isXRayActive",
                value: function(e) {
                    var t = this;
                    if (e) {
                        var n = {
                            p: 0
                        };
                        r.TweenMax.fromTo(n, 3, {
                            p: 3
                        }, {
                            p: 5,
                            ease: r.Power1.easeIn,
                            onUpdate: function() {
                                t.xRay.material.uniforms.offsetY.value = Math.sin(n.p)
                            },
                            onComplete: function() {}
                        })
                    } else {
                        var s = {
                            p: 1
                        };
                        r.TweenMax.fromTo(s, 3, {
                            p: 5
                        }, {
                            p: 3,
                            ease: r.Power1.easeIn,
                            onUpdate: function() {
                                t.xRay.material.uniforms.offsetY.value = Math.sin(s.p)
                            }
                        })
                    }
                }
            }, {
                key: "updateTransitioning",
                value: function(e) {
                    this.particles.material.uniforms.uProgress.value += 1 / 300, this.particles.customDepthMaterial.uniforms.uProgress.value += 1 / 300, this.particles.customDistanceMaterial.uniforms.uProgress.value += 1 / 300
                }
            }, {
                key: "transform",
                value: function(e) {
                    var t = this;
                    if (e) {
                        var n = {
                            p: 0
                        };
                        r.TweenMax.fromTo(n, 5.9, {
                            p: 0
                        }, {
                            p: 1.5,
                            ease: r.Power1.easeIn,
                            onUpdate: function() {
                                t.updateTransitioning(n.p)
                            },
                            onComplete: function() {
                                t.mainBrain.orbitControls.maxDistance = 700, t.mainBrain.orbitControls.autoRotate = !0, t.updateTransitioning(1.5)
                            }
                        })
                    } else {
                        var s = {
                            p: 1
                        };
                        r.TweenMax.fromTo(s, 2, {
                            p: 1
                        }, {
                            p: .5,
                            ease: r.Power1.easeIn,
                            onUpdate: function() {
                                t.updateTransitioning(s.p)
                            }
                        })
                    }
                }
            }], [{
                key: "getLoadingPoints",
                value: function() {
                    return new o.RingBufferGeometry(100, 40, 150, 150, 20).attributes.position.array
                }
            }]), e
        }();
        t.default = f
    },
    tE7Q: function(e, t) {
        e.exports = "#define GLSLIFY 1\nuniform vec3 viewVector;\nuniform float c;\nuniform float p;\nuniform float uTime;\nuniform float uSlowTime;\nuniform float uBubblesUp;\nuniform bool uIsFlashing;\nuniform vec2 uMouse;\nuniform bool isWinnerActive;\nuniform float uWinnerSelected;\nuniform float uWinnerAlpha;\nvarying float intensity;\nvarying vec4 vMemory;\nattribute vec2 aDelayDuration;\nattribute float size;\nattribute vec4 aMemory;\nattribute vec4 bubbles;\nvarying float alpha;\nvarying vec4 vBubbles;\n\n\n\nfloat easeExpoInOut(float p) {\n    return ((p *= 2.0) < 1.0) ? 0.5 * pow(2.0, 10.0 * (p - 1.0)) : 0.5 * (2.0 - pow(2.0, -10.0 * (p - 1.0)));\n}\n\nvoid main()\n{\n\n\tintensity = 0.9;\n\n    if(uIsFlashing){\n\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    gl_PointSize = size * ( 300.0 / -mvPosition.z );\n    float m = mod(size, sin(uSlowTime * 0.12 + size ));\n\n    alpha = step(0.5, abs(m));\n    if(m > 0.5 && m < 0.7){\n         gl_PointSize = 0.9 * size;\n    }\n    if(m > 0.8){\n           gl_PointSize = 0.9 * size;\n        }\n\n    gl_Position = projectionMatrix * mvPosition;\n\n    if(bubbles.w > 0.0 && bubbles.w < 2.0 && bubbles.x != 0.0 && bubbles.y != 0.0 ) {\n        gl_PointSize = size + 15.0;\n        alpha = clamp(abs(sin(uTime - bubbles.y)), 0.3, 1.0);\n\n        float tProgress = smoothstep(0.0, aDelayDuration.x, uBubblesUp);\n        vec3 tranlated = mix(position, bubbles.xyz, tProgress);\n        vec4 bPosition = modelViewMatrix * vec4( tranlated, 1.0 );\n\n        gl_PointSize = uBubblesUp * gl_PointSize;\n        gl_Position +=  projectionMatrix * bPosition ;\n        alpha = 5.0;\n    }\n\n    if(bubbles.w == 2.0) {\n           alpha = clamp(abs(sin(uTime - bubbles.y)), 0.3, 0.6);\n           gl_PointSize = size + 60.0;\n\n           gl_PointSize = uBubblesUp * gl_PointSize;\n           float normalized = clamp(uBubblesUp, 0.0, 2.0)* 2.0;\n           vec3 tranlated = mix(position, bubbles.xyz, normalized);\n           vec4 bPosition = modelViewMatrix * vec4( tranlated, 1.0 );\n           gl_Position +=  projectionMatrix * bPosition ;\n    }\n      if(bubbles.w == 3.0) {\n               alpha = clamp(abs(sin(uTime - bubbles.y)), 0.3, 1.0);\n               gl_PointSize = size + 90.0;\n\n               gl_PointSize = uBubblesUp * gl_PointSize;\n               float normalized = clamp(uBubblesUp, 0.0, 2.0)* 2.0;\n               vec3 tranlated = mix(position, bubbles.xyz, normalized);\n               vec4 bPosition = modelViewMatrix * vec4( tranlated, 1.0 );\n               gl_Position +=  projectionMatrix * bPosition ;\n        }\n    vBubbles = bubbles;\n\n    }\n\n    //Show only the brain section activate and hide all blinking dots ecept memory bubbles\n    if(aMemory.w == uWinnerSelected && isWinnerActive){\n        vMemory = aMemory;\n        intensity = 0.9;\n    }else if(bubbles.w != 2.0  && bubbles.w != 3.0 && isWinnerActive ){\n        alpha = mix(1.0, 0.0, uWinnerAlpha);\n    }\n\n}"
    },
    wGpE: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = m(n("fZjL")),
            i = m(n("Zrlr")),
            a = m(n("wxAW")),
            o = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(n("Ml+6")),
            r = n("+Uzz"),
            l = (m(n("M4fF")), m(n("AvWz"))),
            u = m(n("736u")),
            c = m(n("hmLD"));

        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = function() {
            function e(t) {
                (0, i.default)(this, e), this.mainBrain = t, this.isFlashing = !1, this.memorySelected = t.memorySelected, this.alphaAnimation = {
                    v: 0
                }, this.secuenceAnimation = 0
            }
            return (0, a.default)(e, [{
                key: "initAnimation",
                value: function() {
                    var e = this.mainBrain,
                        t = e.scene,
                        n = e.camera,
                        i = new o.BufferGeometry,
                        a = [],
                        r = [],
                        m = [];
                    (0, s.default)(c.default).forEach(function(e, t) {
                        var n = c.default[e];
                        r.push(n.x, n.y, n.z), a[t] = n.size, m[2 * t + 0] = o.Math.randFloat(.5, 1.5), m[2 * t + 1] = 2.5
                    }), i.addAttribute("aDelayDuration", new o.Float32BufferAttribute(m, 2)), i.addAttribute("position", new o.Float32BufferAttribute(r, 3)), i.addAttribute("color", new o.Float32BufferAttribute([], 3)), i.addAttribute("size", new o.Float32BufferAttribute(a, 1)), i.computeBoundingSphere();
                    var d = new o.ShaderMaterial({
                        uniforms: {
                            c: {
                                type: "f",
                                value: .9
                            },
                            p: {
                                type: "f",
                                value: 2.8
                            },
                            glowColor: {
                                type: "c",
                                value: new o.Color(2899603)
                            },
                            viewVector: {
                                type: "v3",
                                value: n.position
                            },
                            uTime: {
                                type: "f",
                                value: 0
                            },
                            uFadeTime: {
                                type: "f",
                                value: 0
                            },
                            uMouse: {
                                type: "f",
                                value: new o.Vector2(0)
                            },
                            isCustomAlpha: {
                                type: "b",
                                value: !1
                            },
                            uAlpha: {
                                type: "float",
                                value: 0
                            },
                            uResolution: {
                                type: "v2",
                                value: new o.Vector2(window.innerWidth, window.innerHeight)
                            }
                        },
                        vertexShader: l.default,
                        fragmentShader: u.default,
                        vertexColors: o.VertexColors,
                        blending: o.AdditiveBlending,
                        side: o.DoubleSide,
                        depthTest: !1,
                        transparent: !0
                    });
                    this.flashing = new o.Points(i, d), this.flashing.name = "flashing", t.add(this.flashing)
                }
            }, {
                key: "animationCamera",
                value: function(e) {
                    var t = this;
                    this.mainBrain.isRecording = !1, this.flashing.material.uniforms.uFadeTime.value = 1, this.isFlashing = !0, 0 === this.alphaAnimation.v ? r.TweenMax.fromTo(this.alphaAnimation, 2.5, {
                        v: 0
                    }, {
                        v: 1,
                        ease: r.Power1.easeInOut,
                        onStart: function() {
                            t.selectMemoryThinking(e)
                        },
                        onUpdate: function() {
                            t.flashing.material.uniforms.uAlpha.value = t.alphaAnimation.v
                        }
                    }) : r.TweenMax.fromTo(this.alphaAnimation, 1, {
                        v: 1
                    }, {
                        v: 0,
                        ease: r.Power1.easeInOut,
                        onUpdate: function() {
                            t.flashing.material.uniforms.uAlpha.value = t.alphaAnimation.v
                        },
                        onComplete: function() {
                            t.thinkingFadeIn(e)
                        }
                    }), this.flashing.geometry.setDrawRange(0, 1)
                }
            }, {
                key: "selectMemoryThinking",
                value: function(e) {
                    var t = this,
                        n = (0, s.default)(c.default)[Math.floor(e)],
                        i = c.default[n];
                    if (i) {
                        for (var a = this.flashing.geometry.attributes.position.array, o = 0; o < a.length; o += 1) a[3 * o] = i.x, a[3 * o + 1] = i.y, a[3 * o + 2] = i.z;
                        this.flashing.material.uniforms.isCustomAlpha.value = !0;
                        var l = this.mainBrain.camera,
                            u = {
                                x: l.position.x,
                                y: l.position.y,
                                z: l.position.z
                            };
                        r.TweenMax.fromTo(u, 1.5, {
                            x: u.x,
                            y: u.y,
                            z: u.z
                        }, {
                            x: i.camera.x,
                            y: i.camera.y,
                            z: i.camera.z,
                            ease: r.Power1.easeInOut,
                            onUpdate: function() {
                                l.position.x = u.x, l.position.y = u.y, l.position.z = u.z
                            },
                            onComplete: function() {
                                t.secuenceAnimation += 1, t.animationCamera(t.secuenceAnimation)
                            }
                        })
                    }
                }
            }, {
                key: "thinkingFadeIn",
                value: function(e) {
                    var t = this;
                    r.TweenMax.fromTo(this.alphaAnimation, 2.5, {
                        v: 0
                    }, {
                        v: 1,
                        ease: r.Power1.easeInOut,
                        onUpdate: function() {
                            t.flashing.material.uniforms.uAlpha.value = t.alphaAnimation.v
                        },
                        onStart: function() {
                            t.selectMemoryThinking(e)
                        }
                    })
                }
            }, {
                key: "updateSubSystem",
                value: function(e) {
                    var t = this;
                    this.bubbles.geometry.attributes.bubbles.needsUpdate = !1;
                    var n = this.mainBrain.camera.position,
                        s = this.mainBrain.orbitControls.target,
                        i = this.bubbles.geometry.attributes.bubbles.array,
                        a = {
                            p: 1
                        };
                    this.mainBrain.font.removeText(), r.TweenMax.fromTo(a, 2.5, {
                        p: 1
                    }, {
                        p: 0,
                        ease: r.Power1.easeInOut,
                        onUpdate: function() {
                            t.updateBurbleUp(a.p), t.mainBrain.orbitControls.target.set(s.x, s.y - a.p, s.z), t.mainBrain.camera.position.set(n.x, n.y - a.p, n.z)
                        },
                        onComplete: function() {
                            t.getBubblesSelected(i, e), t.flashing.geometry.attributes.flashing.needsUpdate = !0, t.animate(!0)
                        }
                    })
                }
            }, {
                key: "update",
                value: function(e, t) {
                    this.flashing.material.uniforms.viewVector.value = (new o.Vector3).subVectors(e.position, this.flashing.position), this.flashing.material.uniforms.uTime.value = t
                }
            }, {
                key: "isActive",
                value: function(e) {
                    var t = this;
                    if (e) {
                        var n = {
                            p: 0
                        };
                        r.TweenMax.fromTo(n, 2.5, {
                            p: 0
                        }, {
                            p: 1,
                            ease: r.Power1.easeInOut,
                            onUpdate: function() {
                                t.flashing.material.uniforms.uFadeTime.value = n.p, t.isFlashing = !0
                            }
                        })
                    } else {
                        var s = {
                            p: 1
                        };
                        r.TweenMax.fromTo(s, 2.5, {
                            p: 1
                        }, {
                            p: 0,
                            ease: r.Power1.easeInOut,
                            onUpdate: function() {
                                t.flashing.material.uniforms.uFadeTime.value = s.p, t.isFlashing = !1
                            }
                        })
                    }
                }
            }, {
                key: "updateMouse",
                value: function(e) {
                    this.flashing.material.uniforms.uMouse.value = e
                }
            }, {
                key: "flashingAnimation",
                value: function(e) {
                    var t = this;
                    if (this.flashing.material.uniforms.uIsFlashing.value = e, e) {
                        var n = {
                            p: 0
                        };
                        r.TweenMax.fromTo(n, 2.5, {
                            p: 0
                        }, {
                            p: 1,
                            ease: r.Power1.easeInOut,
                            onUpdate: function(e) {
                                t.flashing.material.uniforms.uFlashingAlpha.value = n.p, t.isFlashing = !0
                            }
                        })
                    } else {
                        var s = {
                            p: 1
                        };
                        r.TweenMax.fromTo(s, 2.5, {
                            p: 1
                        }, {
                            p: 0,
                            ease: r.Power1.easeInOut,
                            onUpdate: function(e) {
                                t.flashing.material.uniforms.uFlashingAlpha.value = s.p, t.isFlashing = !1
                            }
                        })
                    }
                }
            }, {
                key: "animate",
                value: function(e) {
                    var t = this,
                        n = this.mainBrain.camera.position,
                        s = this.mainBrain.orbitControls.target;
                    if (this.isFlashing || this.flashingAnimation(!0), e) {
                        var i = {
                            p: 0
                        };
                        r.TweenMax.fromTo(i, 2.5, {
                            p: 0
                        }, {
                            p: 1,
                            ease: r.Power1.easeInOut,
                            onUpdate: function() {
                                t.updateBurbleUp(i.p), t.mainBrain.orbitControls.target.set(s.x, s.y + i.p, s.z), t.mainBrain.camera.position.set(n.x, n.y + i.p, n.z)
                            }
                        })
                    } else {
                        var a = {
                            p: 1
                        };
                        r.TweenMax.fromTo(a, 2.5, {
                            p: 1
                        }, {
                            p: 0,
                            ease: r.Power1.easeInOut,
                            onUpdate: function() {
                                t.updateBurbleUp(a.p), t.mainBrain.orbitControls.target.set(s.x, s.y - a.p, s.z), t.mainBrain.camera.position.set(n.x, n.y - a.p, n.z)
                            }
                        })
                    }
                }
            }]), e
        }();
        t.default = d
    }
}, ["eslX"]);
