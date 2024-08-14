import React, { useState, useRef, useEffect} from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../Loader";

import Sky from "../../models/Sky";
import {Plane} from "../../models/Plane";
import { Model } from "../../models/Model";
import Homeinfo from "../Homeinfo";

import sakura from "../../assets/sakura.mp3";
import { soundoff, soundon } from "../../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustModelForScreenSize = () =>{
    let screenScale = null;
    let screenPosition = [0, -0.5, -5];
    let rotation = [0.1, 4.7, 0];
    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    }else{
      screenScale = [1,1,1];
 
    }
    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () =>{
    let screenScale ,screenPosition;
    if(window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition =[0,-1.5,0]
    }else{
      screenScale = [3,3,3];
      screenPosition = [0,1,1];
 
    }
    return [screenScale, screenPosition]
  }
 

  const [modelScale, modelPosition, modelRotation] = 
  adjustModelForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
{currentStage && <Homeinfo currentStage ={currentStage}/>}
</div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`} 
        camera={{ near: 1, far:1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,10]} intensity={3} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor=' #10344a'
            groundColor='#000000'
            intensity={1}
          />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
          <Sky isRotating = {isRotating}/>
          <Model
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
          position={modelPosition}
          rotation={[0.1, 4.7077, 0]}
          scale={modelScale}
          />
          <Plane
          setIsRotating ={isRotating}
          Scale = {planeScale}
          Position = {planePosition}
          rotation = {[0,20,0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
      <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
