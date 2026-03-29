import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

function FloatingIcosahedron() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.15;
    meshRef.current.rotation.y = t * 0.2;
  });

  return (
    <Float speed={1.8} rotationIntensity={1.2} floatIntensity={2.5}>
      <mesh ref={meshRef} scale={1.6}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#64ffda"
          wireframe
          transparent
          opacity={0.7}
          emissive="#64ffda"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

function InnerSphere() {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.3;
    ref.current.rotation.z = clock.getElapsedTime() * 0.15;
  });

  return (
    <mesh ref={ref} scale={0.9}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial
        color="#7c3aed"
        transparent
        opacity={0.15}
        distort={0.4}
        speed={2}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-[350px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#64ffda" />
        <pointLight position={[-10, -10, -5]} intensity={0.4} color="#7c3aed" />
        <Suspense fallback={null}>
          <FloatingIcosahedron />
          <InnerSphere />
        </Suspense>
      </Canvas>
    </div>
  );
}