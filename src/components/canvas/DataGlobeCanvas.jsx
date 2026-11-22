import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Ring } from '@react-three/drei';
import * as THREE from 'three';

// Orbiting Data Node Particle
const DataNode = ({ radius, speed, offset, size, color }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    const y = Math.sin(t * 2) * (radius * 0.35);

    if (meshRef.current) {
      meshRef.current.position.set(x, y, z);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2.5}
        roughness={0.1}
      />
    </mesh>
  );
};

// Holographic Orbital Rings
const DataRing = ({ radius, tiltX, tiltY, speed, color }) => {
  const ringRef = useRef();

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = clock.getElapsedTime() * speed;
    }
  });

  return (
    <group rotation={[tiltX, tiltY, 0]}>
      <mesh ref={ringRef}>
        <ringGeometry args={[radius - 0.02, radius + 0.02, 64]} />
        <meshBasicMaterial
          color={color}
          side={THREE.DoubleSide}
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
};

// 3D Data Bars (visualizing analytics telemetry)
const DataBarsRing = ({ radius, count = 12 }) => {
  const groupRef = useRef();

  const bars = useMemo(() => {
    const items = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const height = 0.3 + Math.random() * 0.6;
      items.push({ x, z, angle, height, id: i });
    }
    return items;
  }, [radius, count]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      {bars.map((bar) => (
        <mesh
          key={bar.id}
          position={[bar.x, 0, bar.z]}
          rotation={[0, -bar.angle, 0]}
        >
          <boxGeometry args={[0.08, bar.height, 0.08]} />
          <meshStandardMaterial
            color="#00f2fe"
            emissive="#00f2fe"
            emissiveIntensity={1.2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

// Main 3D Analytics Core Model
const AnalyticsCore = () => {
  const coreRef = useRef();

  useFrame(({ clock }) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  // Telemetry satellites
  const satellites = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      radius: 2.1 + (i % 4) * 0.45,
      speed: 0.6 + (i % 3) * 0.4,
      offset: (i / 18) * Math.PI * 2,
      size: 0.04 + (i % 3) * 0.025,
      color: i % 3 === 0 ? "#00f2fe" : i % 3 === 1 ? "#915eff" : "#38bdf8",
    }));
  }, []);

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <group ref={coreRef}>
        {/* Glowing Holographic Core Sphere */}
        <Sphere args={[1.35, 64, 64]}>
          <MeshDistortMaterial
            color="#535bf2"
            attach="material"
            distort={0.35}
            speed={2}
            roughness={0.2}
            metalness={0.85}
          />
        </Sphere>

        {/* Outer Wireframe Shield */}
        <Sphere args={[1.48, 24, 24]}>
          <meshBasicMaterial
            color="#00f2fe"
            wireframe
            transparent
            opacity={0.15}
          />
        </Sphere>

        {/* Orbital Gyroscopic Rings */}
        <DataRing radius={2.2} tiltX={Math.PI / 4} tiltY={Math.PI / 6} speed={0.4} color="#915eff" />
        <DataRing radius={2.6} tiltX={-Math.PI / 3} tiltY={Math.PI / 4} speed={-0.3} color="#00f2fe" />
        <DataRing radius={3.0} tiltX={Math.PI / 2.2} tiltY={-Math.PI / 5} speed={0.2} color="#38bdf8" />

        {/* Circular Analytics Bar Pillars */}
        <DataBarsRing radius={1.9} count={16} />

        {/* Orbiting Satellite Data Packets */}
        {satellites.map((sat) => (
          <DataNode key={sat.id} {...sat} />
        ))}
      </group>
    </Float>
  );
};

export default function DataGlobeCanvas() {
  return (
    <div className="w-full h-full min-h-[420px] md:min-h-[560px] relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 15, 8]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#915eff" />
        <pointLight position={[5, -5, 5]} intensity={1.5} color="#00f2fe" />

        <AnalyticsCore />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
        />
      </Canvas>

      {/* Floating HUD Badges on Canvas */}
      <div className="absolute top-4 right-4 pointer-events-none hidden sm:flex items-center gap-2 bg-[#100d25]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-cyan-500/30 text-xs font-mono text-cyan-400">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>Telemetry Stream: Active</span>
      </div>
      <div className="absolute bottom-4 left-4 pointer-events-none hidden sm:flex items-center gap-2 bg-[#100d25]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-purple-500/30 text-xs font-mono text-purple-300">
        <span className="w-2 h-2 rounded-full bg-[#915eff]" />
        <span>3D Vector Node • Drag to Rotate</span>
      </div>
    </div>
  );
}
