"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

export default function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);
    
    return () => {
      window.removeEventListener("resize", initCanvas);
    };
  }, []);

  useEffect(() => {
    initCanvas();
  }, [refresh]);

  const initCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current = [];
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
      
      for (let i = 0; i < quantity; i++) {
        const x = Math.random() * canvasSize.current.w;
        const y = Math.random() * canvasSize.current.h;
        const vx = Math.random() - 0.5;
        const vy = Math.random() - 0.5;
        circles.current.push({ x, y, vx, vy, radius: Math.random() * 2 + 1 });
      }
    }
  };
  
  const animate = () => {
    if (context.current && canvasRef.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
      
      for (let i = 0; i < circles.current.length; i++) {
        const circle = circles.current[i];
        
        // Apply mouse interaction
        if (mouse.current) {
          const distX = mouse.current.x - circle.x;
          const distY = mouse.current.y - circle.y;
          const dist = Math.sqrt(distX ** 2 + distY ** 2);
          const force = (staticity / dist) * 3;
          
          if (dist < staticity) {
            const angle = Math.atan2(distY, distX);
            circle.vx -= Math.cos(angle) * force;
            circle.vy -= Math.sin(angle) * force;
          }
        }
        
        // Update position based on velocity
        circle.x += circle.vx;
        circle.y += circle.vy;
        
        // Apply damping
        circle.vx *= 0.98;
        circle.vy *= 0.98;
        
        // Boundary conditions
        if (circle.x < 0 || circle.x > canvasSize.current.w) {
          circle.vx *= -1;
        }
        if (circle.y < 0 || circle.y > canvasSize.current.h) {
          circle.vy *= -1;
        }
        
        // Draw the circle
        context.current.beginPath();
        context.current.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        context.current.fillStyle = "rgba(255, 255, 255, 0.5)";
        context.current.fill();
        
        // Draw connections
        for (let j = i + 1; j < circles.current.length; j++) {
          const otherCircle = circles.current[j];
          const dx = circle.x - otherCircle.x;
          const dy = circle.y - otherCircle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 100) {
            context.current.beginPath();
            context.current.moveTo(circle.x, circle.y);
            context.current.lineTo(otherCircle.x, otherCircle.y);
            const alpha = 1 - dist / 100;
            context.current.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.2})`;
            context.current.stroke();
          }
        }
      }
    }
    
    window.requestAnimationFrame(animate);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  return (
    <div
      ref={canvasContainerRef}
      className={cn("fixed inset-0 z-0", className)}
      onMouseMove={handleMouseMove}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}