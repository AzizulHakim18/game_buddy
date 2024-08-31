import { Canvas } from '@react-three/fiber';
import React from 'react';
import { OrbitControls, Environment, useHelper } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { DirectionalLightHelper } from 'three';
import * as THREE from "three"
import Cyl from '../Cyl/Cyl';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import "react-horizontal-scrolling-menu/dist/styles.css";
import "./Cylinder3d.css"

const Cylinder3d = () => {
    const games = [
        "Grand Theft",
        "The Witcher",
        "Portal 2",
        "Tomb Raider",
        "Borderlands 2",
        "Red Dead",
        "Assassin's Creed",
        "Dark Souls III"
    ];
    return (

        <div className='w-full h-screen'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
                {/* Left Column: Text and Button */}
                <div className="flex flex-col justify-center items-start p-8 space-y-4 col-span-2 dark:text-white">
                    <h1 className="text-4xl lg:text-6xl font-bold">Explore the World of Gaming</h1>
                    <p className="text-lg lg:text-xl">
                        Discover the next generation of gaming experiences that push the boundaries of what's possible. From vast open-world adventures to intense, fast-paced action, immerse yourself in stories that captivate and gameplay that challenges.
                    </p>
                    <button className="btn text-white bg-cyan-400 font-bold border-cyan-400
                         hover:bg-rose-500 hover:border-rose-500 shadow-2xl shadow-cyan-500">
                        Start Your Journey
                    </button>

                </div>

                {/* Right Column: 3D Cylinder */}
                <div className="flex justify-center items-center col-span-1">
                    <Canvas >
                        <OrbitControls enableZoom={false}></OrbitControls>
                        <ambientLight intensity={2}></ambientLight>
                        <directionalLight position={[2, 5, 2]} intensity={1} castShadow />
                        <directionalLight position={[-2, -5, -2]} intensity={1} castShadow />


                        <Cyl></Cyl>
                    </Canvas>
                </div>

            </div>
            {/* Horizontal Scrolling Game Names */}
            <div className="scroll-container dark:text-white">
                <div className="scroll-content">
                    {games.map((game, index) => (
                        <span key={index} className="text-xl lg:text-2xl font-semibold mx-8">
                            {game}
                        </span>
                    ))}
                    {games.map((game, index) => (
                        <span key={`duplicate-${index}`} className="text-xl lg:text-2xl font-semibold mx-8">
                            {game}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cylinder3d;