import reactLogo from "./assets/react.svg";
import "./App.css";
import * as THREE from "three";
import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { SheetProvider } from "@theatre/r3f";
import { getProject } from "@theatre/core";
const demoSheet = getProject("Demo Project").sheet("Demo Sheet");
function App() {
  return (
    <Canvas
      camera={{
        position: [5, 5, -5],
        fov: 75,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Provide sheet created earlier with `const demoSheet = getProject('Demo Project').sheet('Demo Sheet')` */}
      <SheetProvider sheet={demoSheet}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </SheetProvider>
    </Canvas>
  );
}

export default App;
