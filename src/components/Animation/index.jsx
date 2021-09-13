import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics, usePlane, useBox } from '@react-three/cannon';

const BoxComponent = () => {
  function Box({ position }) {
    const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, position }));
    return (
      <mesh
        onClick={() => {
          api.velocity.set(0, 2, 0);
          api.applyImpulse([0, 0, -15], [0, 0, 0]);
        }}
        ref={ref}
        position={[0, 0, 0]}
      >
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#176B52" />
      </mesh>
    );
  }

  function Wall({ position, color }) {
    const [ref] = usePlane(() => ({ position }));
    return (
      <mesh ref={ref}>
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshLambertMaterial attach="material" color={color} />
      </mesh>
    );
  }

  function Plane() {
    const [ref] = usePlane(() => ({
      rotation: [-Math.PI / 2, 0, 0],
    }));
    return (
      <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshLambertMaterial attach="material" color="#30C28C" />
      </mesh>
    );
  }

  function Credits() {}

  const boxes = [
    [0, 2, 0],
    [2, 2, -1],
    [4, 2, 0],
    [6, 2, -1],
    [8, 2, 0],
    [10, 2, -1],
    [12, 2, 0],
    [-2, 2, 1],
    [-4, 2, 0],
    [-6, 2, 1],
    [-8, 2, 0],
    [-10, 2, 1],
    [-12, 2, 0],
  ];
  return (
    <Canvas
      camera={{
        isPerspectiveCamera: true,
        isObject3D: false,
      }}
    >
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics gravity={[0, -0.1, 0]}>
        <Wall position={[0, 0, -10]} color="#30C06C" />
        {boxes.map((position) => (
          <Box position={position} />
        ))}
        <Plane />
      </Physics>
    </Canvas>
  );
};

export default BoxComponent;
