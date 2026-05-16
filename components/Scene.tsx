"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { Suspense } from "react";
import GiftBox from "./GiftBox";
import SparkleParticles from "./SparkleParticles";

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <directionalLight position={[-3, 2, -2]} intensity={0.8} color="#fbbf24" />
          <pointLight position={[0, -2, 1]} intensity={0.5} color="#a78bfa" />

          <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
            <GiftBox />
          </Float>

          <SparkleParticles count={80} />

          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
