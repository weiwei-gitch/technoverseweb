import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function CyberCore() {
  const outerRef = useRef();
  const innerRef = useRef();
  const ring1Ref = useRef();
 

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (outerRef.current) {
      outerRef.current.rotation.y += delta * 0.25;
      outerRef.current.rotation.x = Math.sin(t * 0.2) * 0.15;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.4;
      innerRef.current.rotation.z += delta * 0.2;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.5) * 0.1;
      ring1Ref.current.rotation.z += delta * 0.35;
    }
   
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer Holographic Polyhedron */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2.2, 0]} />
        <meshStandardMaterial
          color="#00d2ff"
          wireframe
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Middle High-density Wireframe */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#1683ff"
          wireframe
          transparent
          opacity={0.32}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Core Solid Energy Sphere */}
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#0066ff"
          emissive="#0055dd"
          emissiveIntensity={1.25}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Orbital Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[3.2, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#00f0ff"
          emissiveIntensity={0.55}
          transparent
          opacity={0.58}
        />
      </mesh>

     
    </group>
  );
}

function FloatingTechNodes() {
  const nodes = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => {
      const angle = (i / 18) * Math.PI * 2;
      const radius = 5.5 + (i % 3) * 1.8;
      return {
        id: i,
        pos: [
          Math.cos(angle) * radius,
          (Math.sin(i * 1.5) * 3) - 0.5,
          Math.sin(angle) * radius - 2,
        ],
        scale: 0.15 + (i % 4) * 0.08,
      };
    });
  }, []);

  return (
    <group>
      {nodes.map((node) => (
        <Float key={node.id} speed={2 + (node.id % 3)} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={node.pos} scale={node.scale}>
            <octahedronGeometry />
            <meshStandardMaterial
              color="#00d2ff"
              wireframe
              emissive="#0066ff"
              emissiveIntensity={0.5}
              transparent
              opacity={0.30}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function SceneComposition({ mousePos }) {
  const sceneRef = useRef();

  useFrame((state, delta) => {
    if (sceneRef.current) {
      // Smooth interactive mouse tilt
      const targetX = (mousePos.current.x * 0.4);
      const targetY = (mousePos.current.y * 0.3);
      sceneRef.current.rotation.y = THREE.MathUtils.lerp(sceneRef.current.rotation.y, targetX, 0.05);
      sceneRef.current.rotation.x = THREE.MathUtils.lerp(sceneRef.current.rotation.x, -targetY, 0.05);
    }
  });

  return (
    <group ref={sceneRef}>
      {/* Background Starfield */}
      <Stars radius={70} depth={40} count={500} factor={2.2} saturation={0.35} fade speed={0.25} />

      {/* Cyber Core */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.8}>
        <CyberCore />
      </Float>

      {/* Floating Orbital Nodes */}
      <FloatingTechNodes />

      {/* Spatial Lighting */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} color="#38bdf8" />
      <pointLight position={[-8, -5, -5]} intensity={25} color="#0055ff" distance={30} />
      <pointLight position={[6, 8, 4]} intensity={35} color="#00f0ff" distance={30} />
      <pointLight position={[0, -6, 2]} intensity={20} color="#1e40af" distance={20} />
    </group>
  );
}

export function Scene3D() {
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mousePos.current = {
      x: (e.clientX / innerWidth) * 2 - 1,
      y: (e.clientY / innerHeight) * 2 - 1,
    };
  };

  return (
    <div className="scene-container" onMouseMove={handleMouseMove}>
      <Canvas
        className="webgl-canvas"
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#02030a"]} />
        <fog attach="fog" args={["#02030a", 8, 30]} />
        <SceneComposition mousePos={mousePos} />
      </Canvas>
    </div>
  );
}
