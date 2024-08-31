import React, { useEffect, useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from "three";
import { TextureLoader } from 'three';
import img1 from '../../../public/image/img1.jpg';
import img2 from '../../../public/image/img2.jpg'
import img3 from '../../../public/image/img3.jpg'
import img4 from '../../../public/image/img4.jpg'
const Cyl = () => {
    const [texture1, texture2, texture3, texture4] = useLoader(TextureLoader, [img1, img2, img3, img4]);

    const radius = 2;
    const height = 2;
    const radialSegments = 30; // Adjust this to make the cylinder smoother
    const gapeAngle = 0.2
    const cylinderRef = useRef();

    useFrame(() => {
        cylinderRef.current.rotation.y += .01;
    });


    return (
        <group ref={cylinderRef} rotation={[0, 0, 0.2]} >
            {/* 1st Quarter */}
            <mesh rotation={[0, Math.PI / 8 + gapeAngle / 4, 0]}>
                <cylinderGeometry
                    args={[radius, radius, height, radialSegments, 30, true, 0, Math.PI / 2]}
                />
                <meshStandardMaterial map={texture1} side={THREE.DoubleSide} />
            </mesh>

            {/* 2nd Quarter */}
            <mesh rotation={[0, Math.PI / 2 + gapeAngle / 2 + gapeAngle / 4, 0]}>
                <cylinderGeometry
                    args={[radius, radius, height, radialSegments, 30, true, 0, Math.PI / 2]}
                />
                <meshStandardMaterial map={texture2} side={THREE.DoubleSide} />
            </mesh>

            {/* 3rd Quarter */}
            <mesh rotation={[0, Math.PI + gapeAngle + gapeAngle / 4, 0]}>
                <cylinderGeometry
                    args={[radius, radius, height, radialSegments, 30, true, 0, Math.PI / 2]}
                />
                <meshStandardMaterial map={texture3} side={THREE.DoubleSide} />
            </mesh>

            {/* 4th Quarter */}
            <mesh rotation={[0, -Math.PI / 2 + (1.4 * gapeAngle) + gapeAngle / 4, 0]}>
                <cylinderGeometry
                    args={[radius, radius, height, radialSegments, 1, true, 0, Math.PI / 2]}
                />
                <meshStandardMaterial map={texture4} side={THREE.DoubleSide} />
            </mesh>
        </group >
    );
};

export default Cyl;