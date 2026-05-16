"use client";

import { useState, useRef } from "react";
import { Mesh, Group } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";

function FloatingCube({ position, color, speed = 0.5, delay = 0 }: { position: [number, number, number]; color: string; speed?: number; delay?: number }) {
  const ref = useRef<Mesh>(null);
  const startY = position[1];

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = startY + Math.sin(clock.elapsedTime * speed + delay) * 0.3;
      ref.current.rotation.x += 0.005;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
    </mesh>
  );
}

function FloatingRing() {
  const ref = useRef<Group>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.3;
  });

  const particles = Array.from({ length: 16 }, (_, i) => {
    const angle = (i / 16) * Math.PI * 2;
    return { x: Math.cos(angle) * 1.8, z: Math.sin(angle) * 1.8 };
  });

  return (
    <group ref={ref} position={[0, -0.5, 0]}>
      {particles.map((p, i) => (
        <mesh key={i} position={[p.x, 0, p.z]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

export default function EnhancedScene() {
  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[1.2, 1, 1.2]} />
          <meshStandardMaterial color="#7c3aed" roughness={0.3} metalness={0.1} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[1.3, 0.08, 0.08]} />
          <meshStandardMaterial color="#fbbf24" roughness={0.5} metalness={0.3} />
        </mesh>
        <mesh position={[0, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[1.3, 0.08, 0.08]} />
          <meshStandardMaterial color="#fbbf24" roughness={0.5} metalness={0.3} />
        </mesh>
        <mesh position={[0, 0.75, 0]}>
          <boxGeometry args={[1.25, 0.12, 1.25]} />
          <meshStandardMaterial color="#8b5cf6" roughness={0.3} metalness={0.1} />
        </mesh>
        <mesh position={[0, 0.85, 0]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.5} />
        </mesh>
      </Float>

      <FloatingCube position={[-2.2, 0.8, -1]} color="#ec4899" speed={0.7} delay={0} />
      <FloatingCube position={[2.2, 0.3, -1.2]} color="#f59e0b" speed={0.6} delay={1} />
      <FloatingCube position={[-1.8, -0.5, -1.5]} color="#a78bfa" speed={0.8} delay={2} />
      <FloatingCube position={[1.8, -0.2, -1.8]} color="#f472b6" speed={0.5} delay={0.5} />

      <FloatingRing />
    </group>
  );
}
