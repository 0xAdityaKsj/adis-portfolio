
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useEffect, useRef } from 'react';

export default function ThreeScene() {
    const mountRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        //Setup
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer();

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);
        camera.position.setX(-3);

        mountRef.current.appendChild(renderer.domElement);

        // Lights

        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(5, 5, 5);

        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(pointLight, ambientLight);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();

        // Planet
        const textureLoader = new THREE.TextureLoader();
        const albedoTexture = textureLoader.load('../public/moon.jpg');
        const normalTexture = textureLoader.load('../public/spaceship-panels1-normal-ogl.png');
        const planet = new THREE.Mesh(
            new THREE.SphereGeometry(5, 32, 32),
            new THREE.MeshStandardMaterial({
                map: albedoTexture,
                normalMap: normalTexture
            })
        );
        scene.add(planet);

        // stars:

        let starGeometry = new THREE.BufferGeometry();
        let starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

        let starVertices = [];
        for (let i = 0; i < 50000; i++) {
            const x = THREE.MathUtils.randFloatSpread(2000);
            const y = THREE.MathUtils.randFloatSpread(2000);
            const z = THREE.MathUtils.randFloatSpread(2000);
            starVertices.push(x, y, z);
        }

        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

        let stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            planet.rotation.x += 0.005;
            stars.rotation.x += 0.0005;
            stars.rotation.y += 0.0005;
            controls.update(); // Only call this if there are controls that need updating each frame
            renderer.render(scene, camera);
        };
        animate();

        return (() => {
            mountRef.current?.removeChild(renderer.domElement)
        })

    }, [])




    return <div ref={mountRef}></div>


}