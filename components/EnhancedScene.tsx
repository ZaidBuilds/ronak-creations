"use client";

import { useRef } from "react";
import { Mesh, Group } from "three";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function FloatingCube({ position, color, speed = 0.5, delay = 0 }: { position: [number, number, number]; color: string; speed?: number; delay?: number }) {
  const ref = useRef<Mesh>(null);
  const startY = position[1];

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * speed + delay;
      ref.current.position.y = startY + Math.sin(t) * 0.3;
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.15, 0.15, 0.15]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} roughness={0.3} metalness={0.2} />
    </mesh>
  );
}

export default function EnhancedScene() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]}>
          <dodecahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#e11d48" emissive="#e11d48" emissiveIntensity={0.15} roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>

      <FloatingCube position={[-1.2, 0.4, -0.5]} color="#f59e0b" speed={0.7} delay={0} />
      <FloatingCube position={[1.3, -0.3, -0.8]} color="#fbbf24" speed={0.5} delay={1} />
      <FloatingCube position={[-0.8, -0.6, 0.5]} color="#fb7185" speed={0.9} delay={0.5} />
      <FloatingCube position={[1, 0.5, 0.3]} color="#a78bfa" speed={0.6} delay={1.5} />

      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.8, 2, 64]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.05} transparent opacity={0.15} side={2} />
      </mesh>
    </group>
  );
}
