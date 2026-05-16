"use client";

import { useState, useRef } from "react";
import type { Points, BufferGeometry } from "three";
import { useFrame } from "@react-three/fiber";

interface SparkleParticlesProps {
  count?: number;
}

function generateData(count: number) {
  const pos = new Float32Array(count * 3);
  const siz = new Float32Array(count);
  const col = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 10;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
    siz[i] = Math.random() * 0.08 + 0.02;
    const tint = Math.random();
    if (tint < 0.33) {
      col[i * 3] = 1; col[i * 3 + 1] = 0.84; col[i * 3 + 2] = 0;
    } else if (tint < 0.66) {
      col[i * 3] = 1; col[i * 3 + 1] = 1; col[i * 3 + 2] = 1;
    } else {
      col[i * 3] = 0.65; col[i * 3 + 1] = 0.48; col[i * 3 + 2] = 1;
    }
  }
  return { positions: pos, sizes: siz, colors: col };
}

export default function SparkleParticles({ count = 80 }: SparkleParticlesProps) {
  const ref = useRef<Points<BufferGeometry>>(null);
  const [data] = useState(() => generateData(count));

  useFrame((_, delta) => {
    if (ref.current) {
      const pos = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        pos[i * 3 + 1] += delta * (Math.sin(Date.now() * 0.001 + i) * 0.08);
        if (pos[i * 3 + 1] > 4) pos[i * 3 + 1] = -4;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[data.positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[data.sizes, 1]} />
        <bufferAttribute attach="attributes-color" args={[data.colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        transparent
        opacity={0.8}
        vertexColors
        blending={2}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}
