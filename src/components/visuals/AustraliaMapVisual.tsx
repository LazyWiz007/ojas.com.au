"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Line, Float, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

function Particles({ count = 2800 }) {
  const [points, setPoints] = useState<{ x: number; y: number; z: number }[]>([]);
  const { mouse, viewport } = useThree();
  
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Load the texture for background and sampling
  const texture = useTexture("/images/australia-map.png");

  useEffect(() => {
    const img = texture.image as HTMLImageElement;
    if (!img || !img.width) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = img.width;
    const h = img.height;
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(img, 0, 0, w, h);
    
    const data = ctx.getImageData(0, 0, w, h).data;
    const validCords: { x: number, y: number }[] = [];
    
    let minX = w, maxX = 0, minY = h, maxY = 0;

    for (let y = 0; y < h; y++) {
      let firstX = -1, lastX = -1;
      for (let x = 0; x < w; x++) {
        const alpha = data[(y * w + x) * 4 + 3];
        if (alpha > 15) {
          if (firstX === -1) firstX = x;
          lastX = x;
          validCords.push({ x, y }); // Outline
        }
      }
      
      // Fill the interior
      if (firstX !== -1 && lastX !== -1 && (lastX - firstX) > 2) {
        // Density of fill
        const fillPoints = Math.floor((lastX - firstX) / 10); 
        for (let j = 0; j < fillPoints; j++) {
          const rx = firstX + Math.random() * (lastX - firstX);
          validCords.push({ x: rx, y: y });
        }
      }

      // Update bounding box
      if (firstX !== -1) {
        if (firstX < minX) minX = firstX;
        if (lastX > maxX) maxX = lastX;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }

    if (validCords.length === 0) return;

    const mapWidth = maxX - minX;
    const mapHeight = maxY - minY;
    const canvasScale = 5.2;

    const newPoints = [];
    for (let i = 0; i < count; i++) {
      const idx = Math.floor(Math.random() * validCords.length);
      const p = validCords[idx];
      const nx = (p.x - minX) / mapWidth - 0.5;
      const ny = (p.y - minY) / mapHeight - 0.5;

      newPoints.push({
        x: nx * canvasScale, 
        y: -ny * (canvasScale * (mapHeight / mapWidth)),
        z: (Math.random() - 0.5) * 0.2
      });
    }
    setPoints(newPoints);
  }, [texture, count]);

  // Positions for buffers
  const positions = useMemo(() => {
    const pos = new Float32Array(points.length * 3);
    points.forEach((p, i) => {
      pos[i * 3] = p.x;
      pos[i * 3 + 1] = p.y;
      pos[i * 3 + 2] = p.z;
    });
    return pos;
  }, [points]);

  // Line segments for network connections
  const lineGeometry = useMemo(() => {
    if (points.length === 0) return new THREE.BufferGeometry();
    const threshold = 0.35;
    const linePositions: number[] = [];
    
    // Check connections
    for (let i = 0; i < points.length; i += 2) {
      for (let j = i + 1; j < Math.min(i + 50, points.length); j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < threshold && Math.random() < 0.2) {
          linePositions.push(points[i].x, points[i].y, points[i].z);
          linePositions.push(points[j].x, points[j].y, points[j].z);
        }
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    return geometry;
  }, [points]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    
    const targetRotateX = (mouse.y * viewport.height) / 110;
    const targetRotateY = (mouse.x * viewport.width) / 110;
    
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, targetRotateX, 0.05);
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, targetRotateY, 0.05);
    
    if (linesRef.current) {
      linesRef.current.rotation.x = pointsRef.current.rotation.x;
      linesRef.current.rotation.y = pointsRef.current.rotation.y;
    }

    pointsRef.current.position.y = Math.sin(time * 0.4) * 0.05;
    if (linesRef.current) linesRef.current.position.y = pointsRef.current.position.y;
  });

  return (
    <group>
      {/* Subtle Ghost Map Background */}
      <mesh rotation={[0, 0, 0]} position={[0, pointsRef.current?.position.y || 0, -0.1]}>
        <planeGeometry args={[5.2, 5.2 * ((texture.image as HTMLImageElement).height / (texture.image as HTMLImageElement).width)]} />
        <meshBasicMaterial map={texture} transparent opacity={0.08} color="#ffffff" />
      </mesh>

      {points.length > 0 && (
        <>
          <points ref={pointsRef}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[positions, 3]}
              />
            </bufferGeometry>
            <pointsMaterial
              size={0.03}
              color="#ffffff"
              transparent
              opacity={0.6}
              sizeAttenuation={true}
              blending={THREE.AdditiveBlending}
            />
          </points>
          
          <lineSegments ref={linesRef} geometry={lineGeometry}>
            <lineBasicMaterial color="#ffffff" transparent opacity={0.1} blending={THREE.AdditiveBlending} />
          </lineSegments>
        </>
      )}

    </group>
  );
}


export default function AustraliaMapVisual() {
  return (
    <div className="relative w-full h-[500px] lg:h-[750px] cursor-pointer group">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
        <Particles count={4000} />
      </Canvas>
      
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-secondary via-transparent to-transparent opacity-60"></div>
    </div>
  );
}


