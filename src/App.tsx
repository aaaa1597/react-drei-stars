import React, { Suspense, useRef } from "react";
import { Group } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";

const Particle = () => {
  const ref = useRef({} as Group);

  useFrame((_, delta) => {
    ref.current.rotation.y += -0.001;
    ref.current.rotation.x += 0.001;
  })

  return (
    <group ref={ref}>
      <Stars
        radius={100} // 星の点滅(拡大)度合い
        depth={50}
        count={5000} // 星の数
        factor={6} // 星の大きさ
        saturation={9}
        speed={3} // 点滅のスピード
      />
    </group>
  );
}

const App = () => {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <color args={["#010"]} attach={"background"} />
        <PerspectiveCamera />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <Particle />
      </Canvas>
      </div>
    </Suspense>
  );
}

export default App;
