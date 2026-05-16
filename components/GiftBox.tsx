"use client";

import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

export default function GiftBox() {
  const boxRef = useRef<Mesh>(null);
  const ribbonRef = useRef<Mesh>(null);
  const lidRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (boxRef.current) boxRef.current.rotation.y += delta * 0.4;
    if (ribbonRef.current) ribbonRef.current.rotation.y += delta * 0.4;
    if (lidRef.current) {
      lidRef.current.rotation.y += delta * 0.4;
      lidRef.current.position.y = 0.65 + Math.sin(Date.now() * 0.002) * 0.03;
    }
  });

  return (
    <group>
      <mesh ref={boxRef} position={[0, -0.3, 0]}>
        <boxGeometry args={[1.2, 1, 1.2]} />
        <meshStandardMaterial color="#7c3aed" roughness={0.3} metalness={0.1} />
      </mesh>

      <mesh ref={ribbonRef} position={[0, -0.3, 0]}>
        <boxGeometry args={[1.3, 0.08, 0.08]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.5} metalness={0.3} />
      </mesh>
      <mesh position={[0, -0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[1.3, 0.08, 0.08]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.5} metalness={0.3} />
      </mesh>

      <mesh ref={lidRef} position={[0, 0.55, 0]}>
        <boxGeometry args={[1.25, 0.12, 1.25]} />
        <meshStandardMaterial color="#8b5cf6" roughness={0.3} metalness={0.1} />
      </mesh>

      <mesh position={[0, 0.65, 0]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}
