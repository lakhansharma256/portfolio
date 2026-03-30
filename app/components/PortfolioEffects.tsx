"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function PortfolioEffects() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const dx = useRef(0);
  const dy = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
    };
    document.addEventListener("mousemove", onMove);

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let cursorRaf = 0;
    const animateCursor = () => {
      cursor.style.left = `${mx.current}px`;
      cursor.style.top = `${my.current}px`;
      dx.current += (mx.current - dx.current) * 0.12;
      dy.current += (my.current - dy.current) * 0.12;
      dot.style.left = `${dx.current}px`;
      dot.style.top = `${dy.current}px`;
      cursorRaf = requestAnimationFrame(animateCursor);
    };
    cursorRaf = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(cursorRaf);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const geo = new THREE.BufferGeometry();
    const count = 1500;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 20;
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

    const mat = new THREE.PointsMaterial({
      color: 0x00d4ff,
      size: 0.03,
      transparent: true,
      opacity: 0.45,
    });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    let rafId = 0;
    const animate = () => {
      points.rotation.x += 0.0002;
      points.rotation.y += 0.0003;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return null;
  }

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" id="cursor" aria-hidden />
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        id="cursorDot"
        aria-hidden
      />
      <canvas ref={canvasRef} id="bg-canvas" aria-hidden />
    </>
  );
}
