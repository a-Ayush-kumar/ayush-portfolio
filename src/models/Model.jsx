/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: smice (https://sketchfab.com/smice)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/spherical-no1-b1f92777f75d43db99ea93bf0e0fb6ed
Title: Spherical No.1 🪩
*/

import { a } from "@react-spring/three"; //this enables the animations
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import ModelScene from "../assets/3d/model.glb";

export function Model({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}) {
  const ModelRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(ModelScene);
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    lastX.current = clientX;
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);

    // const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    // const delta = (clientX - lastX.current) / viewport.width;

    // ModelRef.current.rotation.y += delta * 0.01 * Math.PI;
    // lastX.current = clientX;
    // rotationSpeed.current = delta * 0.01 * Math.PI;
  };

  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (isRotating) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      ModelRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      ModelRef.current.rotation.y += 0.01 * Math.PI;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      ModelRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  const handleTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
  
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }
  
  const handleTouchEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }
  
  const handleTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
  
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
  
      ModelRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", handleTouchMove);


    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [
    gl,
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
  ]);


  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      ModelRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = ModelRef.current.rotation.y;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the model's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });



  // const { actions } = useAnimations(animations, group);
  return (
    <a.group ref={ModelRef} {...props}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="ring0_1" rotation={[0, 0, -Math.PI / 6]} />
              <group name="ring1_2" rotation={[0, 0.175, -Math.PI / 6]} />
              <group name="ring2_3" rotation={[0, Math.PI / 9, -Math.PI / 6]} />
              <group name="ring3_4" rotation={[0, Math.PI / 6, -Math.PI / 6]} />
              <group name="ring4_5" rotation={[0, 0.698, -Math.PI / 6]} />
              <group name="ring5_6" rotation={[0, 0.873, -Math.PI / 6]} />
              <group name="ring6_7" rotation={[0, Math.PI / 3, -Math.PI / 6]} />
              <group name="ring7_8" rotation={[0, 1.222, -Math.PI / 6]} />
              <group name="ring8_9" rotation={[0, 1.396, -Math.PI / 6]} />
              <group name="ring9_10" rotation={[-Math.PI / 6, 1.571, 0]} />
              <group name="ring10_11" rotation={[Math.PI, 1.396, 2.618]} />
              <group name="ring11_12" rotation={[Math.PI, 1.222, 2.618]} />
              <group
                name="ring12_13"
                rotation={[Math.PI, Math.PI / 3, 2.618]}
              />
              <group name="ring13_14" rotation={[-Math.PI, 0.873, 2.618]} />
              <group name="ring14_15" rotation={[-Math.PI, 0.698, 2.618]} />
              <group
                name="ring15_16"
                rotation={[Math.PI, Math.PI / 6, 2.618]}
              />
              <group
                name="ring16_17"
                rotation={[-Math.PI, Math.PI / 9, 2.618]}
              />
              <group name="ring17_18" rotation={[-Math.PI, 0.175, 2.618]} />
              <group name="ring18_19" rotation={[Math.PI, 0, 2.618]} />
              <group name="ring19_20" rotation={[-Math.PI, -0.175, 2.618]} />
              <group
                name="ring20_21"
                rotation={[Math.PI, -Math.PI / 9, 2.618]}
              />
              <group
                name="ring21_22"
                rotation={[-Math.PI, -Math.PI / 6, 2.618]}
              />
              <group name="ring22_23" rotation={[Math.PI, -0.698, 2.618]} />
              <group name="ring23_24" rotation={[Math.PI, -0.873, 2.618]} />
              <group
                name="ring24_25"
                rotation={[-Math.PI, -Math.PI / 3, 2.618]}
              />
              <group name="ring25_26" rotation={[Math.PI, -1.222, 2.618]} />
              <group name="ring26_27" rotation={[Math.PI, -1.396, 2.618]} />
              <group name="ring27_28" rotation={[Math.PI / 6, -1.571, 0]} />
              <group name="ring28_29" rotation={[0, -1.396, -Math.PI / 6]} />
              <group name="ring29_30" rotation={[0, -1.222, -Math.PI / 6]} />
              <group
                name="ring30_31"
                rotation={[0, -Math.PI / 3, -Math.PI / 6]}
              />
              <group name="ring31_32" rotation={[0, -0.873, -Math.PI / 6]} />
              <group name="ring32_33" rotation={[0, -0.698, -Math.PI / 6]} />
              <group
                name="ring33_34"
                rotation={[0, -Math.PI / 6, -Math.PI / 6]}
              />
              <group
                name="ring34_35"
                rotation={[0, -Math.PI / 9, -Math.PI / 6]}
              />
              <group name="ring35_36" rotation={[0, -0.175, -Math.PI / 6]} />
              <group name="ring36_37" rotation={[0, 0, -Math.PI / 6]} />
              <group name="ring37_38" rotation={[0, 0.175, -Math.PI / 6]} />
              <group
                name="ring38_39"
                rotation={[0, Math.PI / 9, -Math.PI / 6]}
              />
              <group
                name="ring39_40"
                rotation={[0, Math.PI / 6, -Math.PI / 6]}
              />
              <group name="ring40_41" rotation={[0, 0.698, -Math.PI / 6]} />
              <group name="ring41_42" rotation={[0, 0.873, -Math.PI / 6]} />
              <group
                name="ring42_43"
                rotation={[0, Math.PI / 3, -Math.PI / 6]}
              />
              <group name="ring43_44" rotation={[0, 1.222, -Math.PI / 6]} />
              <group name="ring44_45" rotation={[0, 1.396, -Math.PI / 6]} />
              <group name="ring45_46" rotation={[-Math.PI / 6, 1.571, 0]} />
              <group name="ring46_47" rotation={[Math.PI, 1.396, 2.618]} />
              <group name="ring47_48" rotation={[Math.PI, 1.222, 2.618]} />
              <group
                name="ring48_49"
                rotation={[Math.PI, Math.PI / 3, 2.618]}
              />
              <group name="ring49_50" rotation={[Math.PI, 0.873, 2.618]} />
              <group name="ring050_51" rotation={[0, 0, -Math.PI / 6]} />
              <group name="ring051_52" rotation={[0, 0.175, -Math.PI / 6]}>
                <mesh
                  name="Object_55"
                  geometry={nodes.Object_55.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group
                name="ring052_53"
                rotation={[0, Math.PI / 9, -Math.PI / 6]}
              >
                <mesh
                  name="Object_57"
                  geometry={nodes.Object_57.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group
                name="ring053_54"
                rotation={[0, Math.PI / 6, -Math.PI / 6]}
              >
                <mesh
                  name="Object_59"
                  geometry={nodes.Object_59.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring054_55" rotation={[0, 0.698, -Math.PI / 6]}>
                <mesh
                  name="Object_61"
                  geometry={nodes.Object_61.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring055_56" rotation={[0, 0.873, -Math.PI / 6]}>
                <mesh
                  name="Object_63"
                  geometry={nodes.Object_63.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group
                name="ring056_57"
                rotation={[0, Math.PI / 3, -Math.PI / 6]}
              >
                <mesh
                  name="Object_65"
                  geometry={nodes.Object_65.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring057_58" rotation={[0, 1.222, -Math.PI / 6]}>
                <mesh
                  name="Object_67"
                  geometry={nodes.Object_67.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring058_59" rotation={[0, 1.396, -Math.PI / 6]}>
                <mesh
                  name="Object_69"
                  geometry={nodes.Object_69.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring059_60" rotation={[-Math.PI / 6, 1.571, 0]}>
                <mesh
                  name="Object_71"
                  geometry={nodes.Object_71.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring060_61" rotation={[Math.PI, 1.396, 2.618]}>
                <mesh
                  name="Object_73"
                  geometry={nodes.Object_73.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring061_62" rotation={[Math.PI, 1.222, 2.618]}>
                <mesh
                  name="Object_75"
                  geometry={nodes.Object_75.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring062_63" rotation={[Math.PI, Math.PI / 3, 2.618]}>
                <mesh
                  name="Object_77"
                  geometry={nodes.Object_77.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring063_64" rotation={[-Math.PI, 0.873, 2.618]}>
                <mesh
                  name="Object_79"
                  geometry={nodes.Object_79.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring064_65" rotation={[-Math.PI, 0.698, 2.618]}>
                <mesh
                  name="Object_81"
                  geometry={nodes.Object_81.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring065_66" rotation={[Math.PI, Math.PI / 6, 2.618]}>
                <mesh
                  name="Object_83"
                  geometry={nodes.Object_83.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group
                name="ring066_67"
                rotation={[-Math.PI, Math.PI / 9, 2.618]}
              >
                <mesh
                  name="Object_85"
                  geometry={nodes.Object_85.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring067_68" rotation={[-Math.PI, 0.175, 2.618]}>
                <mesh
                  name="Object_87"
                  geometry={nodes.Object_87.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring068_69" rotation={[Math.PI, 0, 2.618]}>
                <mesh
                  name="Object_89"
                  geometry={nodes.Object_89.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring069_70" rotation={[-Math.PI, -0.175, 2.618]}>
                <mesh
                  name="Object_91"
                  geometry={nodes.Object_91.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group
                name="ring070_71"
                rotation={[Math.PI, -Math.PI / 9, 2.618]}
              >
                <mesh
                  name="Object_93"
                  geometry={nodes.Object_93.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group
                name="ring071_72"
                rotation={[-Math.PI, -Math.PI / 6, 2.618]}
              >
                <mesh
                  name="Object_95"
                  geometry={nodes.Object_95.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring072_73" rotation={[Math.PI, -0.698, 2.618]}>
                <mesh
                  name="Object_97"
                  geometry={nodes.Object_97.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring073_74" rotation={[Math.PI, -0.873, 2.618]}>
                <mesh
                  name="Object_99"
                  geometry={nodes.Object_99.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group
                name="ring074_75"
                rotation={[-Math.PI, -Math.PI / 3, 2.618]}
              >
                <mesh
                  name="Object_101"
                  geometry={nodes.Object_101.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring075_76" rotation={[Math.PI, -1.222, 2.618]}>
                <mesh
                  name="Object_103"
                  geometry={nodes.Object_103.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring076_77" rotation={[Math.PI, -1.396, 2.618]}>
                <mesh
                  name="Object_105"
                  geometry={nodes.Object_105.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring077_78" rotation={[Math.PI / 6, -1.571, 0]}>
                <mesh
                  name="Object_107"
                  geometry={nodes.Object_107.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring078_79" rotation={[0, -1.396, -Math.PI / 6]}>
                <mesh
                  name="Object_109"
                  geometry={nodes.Object_109.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring079_80" rotation={[0, -1.222, -Math.PI / 6]}>
                <mesh
                  name="Object_111"
                  geometry={nodes.Object_111.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group
                name="ring080_81"
                rotation={[0, -Math.PI / 3, -Math.PI / 6]}
              >
                <mesh
                  name="Object_113"
                  geometry={nodes.Object_113.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring081_82" rotation={[0, -0.873, -Math.PI / 6]}>
                <mesh
                  name="Object_115"
                  geometry={nodes.Object_115.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring082_83" rotation={[0, -0.698, -Math.PI / 6]}>
                <mesh
                  name="Object_117"
                  geometry={nodes.Object_117.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group
                name="ring083_84"
                rotation={[0, -Math.PI / 6, -Math.PI / 6]}
              >
                <mesh
                  name="Object_119"
                  geometry={nodes.Object_119.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group
                name="ring084_85"
                rotation={[0, -Math.PI / 9, -Math.PI / 6]}
              >
                <mesh
                  name="Object_121"
                  geometry={nodes.Object_121.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring085_86" rotation={[0, -0.175, -Math.PI / 6]}>
                <mesh
                  name="Object_123"
                  geometry={nodes.Object_123.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring086_87" rotation={[0, 0, -Math.PI / 6]}>
                <mesh
                  name="Object_125"
                  geometry={nodes.Object_125.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring087_88" rotation={[0, 0.175, -Math.PI / 6]}>
                <mesh
                  name="Object_127"
                  geometry={nodes.Object_127.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group
                name="ring088_89"
                rotation={[0, Math.PI / 9, -Math.PI / 6]}
              >
                <mesh
                  name="Object_129"
                  geometry={nodes.Object_129.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group
                name="ring089_90"
                rotation={[0, Math.PI / 6, -Math.PI / 6]}
              >
                <mesh
                  name="Object_131"
                  geometry={nodes.Object_131.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring090_91" rotation={[0, 0.698, -Math.PI / 6]}>
                <mesh
                  name="Object_133"
                  geometry={nodes.Object_133.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring091_92" rotation={[0, 0.873, -Math.PI / 6]}>
                <mesh
                  name="Object_135"
                  geometry={nodes.Object_135.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group
                name="ring092_93"
                rotation={[0, Math.PI / 3, -Math.PI / 6]}
              >
                <mesh
                  name="Object_137"
                  geometry={nodes.Object_137.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring093_94" rotation={[0, 1.222, -Math.PI / 6]}>
                <mesh
                  name="Object_139"
                  geometry={nodes.Object_139.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring094_95" rotation={[0, 1.396, -Math.PI / 6]}>
                <mesh
                  name="Object_141"
                  geometry={nodes.Object_141.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring095_96" rotation={[-Math.PI / 6, 1.571, 0]}>
                <mesh
                  name="Object_143"
                  geometry={nodes.Object_143.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring096_97" rotation={[Math.PI, 1.396, 2.618]}>
                <mesh
                  name="Object_145"
                  geometry={nodes.Object_145.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring097_98" rotation={[Math.PI, 1.222, 2.618]}>
                <mesh
                  name="Object_147"
                  geometry={nodes.Object_147.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring098_99" rotation={[Math.PI, Math.PI / 3, 2.618]}>
                <mesh
                  name="Object_149"
                  geometry={nodes.Object_149.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="ring099_100" rotation={[Math.PI, 0.873, 2.618]}>
                <mesh
                  name="Object_151"
                  geometry={nodes.Object_151.geometry}
                  material={materials.metal_ring_material}
                />
              </group>
              <group name="Sphere_104" scale={5.201}>
                <mesh
                  name="Object_153"
                  geometry={nodes.Object_153.geometry}
                  material={materials.GL_basic_Glass_material}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
}
