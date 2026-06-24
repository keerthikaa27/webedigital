"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function CubeField() {
  const groupRef = useRef<THREE.Group>(null);

  const COLS = 60;
  const ROWS = 40;
  const SIZE = 0.5;

  const cubes = useMemo(() => {
    const arr: { x: number; z: number; h: number; tint: number }[] = [];
    for (let i = 0; i < COLS; i++) {
      for (let j = 0; j < ROWS; j++) {
        const x = (i - COLS / 2) * SIZE;
        const z = (j - ROWS / 2) * SIZE;
        const distFromCenterX = Math.abs(i - COLS / 2);
        const isCenterAisle = distFromCenterX < 3;
        const noise =
          Math.sin(i * 0.45) * 0.5 +
          Math.cos(j * 0.6) * 0.5 +
          Math.sin((i + j) * 0.3) * 0.4;
        let h = 0.2 + Math.max(0, noise) * 1.4;
        if (isCenterAisle) h = 0.08;
        arr.push({ x, z, h, tint: 0.55 + Math.random() * 0.45 });
      }
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime();
      groupRef.current.position.y = -0.4 + Math.sin(t * 0.4) * 0.02;
    }
  });

  const lightTeal = new THREE.Color("#9ee0cf");
  const brandTeal = new THREE.Color("#2EC4B6");

  return (
    <group ref={groupRef}>
      {cubes.map((c, idx) => {
        const color = new THREE.Color().lerpColors(lightTeal, brandTeal, c.tint);
        return (
          <mesh key={idx} position={[c.x, c.h / 2 - 0.4, c.z]} castShadow receiveShadow>
            <boxGeometry args={[SIZE * 0.92, c.h, SIZE * 0.92]} />
            <meshStandardMaterial color={color} roughness={0.55} metalness={0.05} />
          </mesh>
        );
      })}
    </group>
  );
}

function CubeFloor() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.6, 4.2], fov: 55, near: 0.1, far: 100 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <color attach="background" args={["#eafaf6"]} />
      <fog attach="fog" args={["#c9efe5", 6, 18]} />
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[4, 6, 2]}
        intensity={1.1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-4, 3, -2]} intensity={0.35} color="#2EC4B6" />
      <CubeField />
    </Canvas>
  );
}

export default CubeFloor;