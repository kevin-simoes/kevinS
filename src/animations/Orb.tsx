import { Canvas } from "@react-three/fiber"
import { Float } from "@react-three/drei"

function Orb() {
  return (
    <Float speed={0.9} rotationIntensity={6} floatIntensity={2}>
      <mesh position={[-9, 3, 0]}>
        <sphereGeometry args={[5, 64, 64]} />

        <meshStandardMaterial
          color="var(--orb-color)"
          emissive="var(--orb-emissive)"
          emissiveIntensity={1.5}
          transparent
          opacity={0.1}
        />
      </mesh>
      <mesh position={[9, -3, 1]}>
        <sphereGeometry args={[5, 64, 64]} />

        <meshStandardMaterial
          color="var(--orb-color)"
          emissive="var(--orb-emissive)"
          emissiveIntensity={1.5}
          transparent
          opacity={0.1}
        />
      </mesh>
    </Float>
  )
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Fundo gRadiente */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at top left,
              var(--gradient-primary),
              transparent 40%
            ),
            radial-gradient(
              circle at bottom right,
              var(--gradient-secondary),
              transparent 40%
            ),
            linear-gradient(
              to bottom,
              var(--background),
              var(--background)
            )
          `,
        }}
      />

      <div
        className="absolute left-200 top-100 w-600 h-600 rounded-full blur-3xl"
        style={{
          background: "var(--glow)",
        }}
      />

      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.6} />

        <directionalLight
          position={[3, 2, 5]}
          intensity={1}
          color="var(--orb-emissive)"
        />

        <Orb />
      </Canvas>
    </div>
  )
}