import React, { useState, useEffect, useRef } from 'react';
import './MouseCircle.css';

const MouseCircle = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trailPos, setTrailPos] = useState(Array(5).fill({ x: 0, y: 0 }));
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const animationRef = useRef();
  const colorCycleRef = useRef();
  const spinTimeoutRef = useRef();

  const colors = [
    '#ff00ff', '#00ffff', '#ffff00', '#ff00aa', 
    '#aa00ff', '#00ffaa', '#ff5500', '#55ff00'
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      const isClickable = hoveredElement?.closest('a, button, [role="button"], [onclick]');
      setIsHoveringClickable(!!isClickable);
      
      // Random chance to trigger spin effect
      if (Math.random() > 0.995 && !isSpinning) {
        setIsSpinning(true);
        clearTimeout(spinTimeoutRef.current);
        spinTimeoutRef.current = setTimeout(() => setIsSpinning(false), 1000);
      }
    };

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
      
      // Change color on click
      setColorIndex((prev) => (prev + 1) % colors.length);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // Color cycle effect
    colorCycleRef.current = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 3000);

    // Animation loop for smooth trailing effect
    const animate = () => {
      setTrailPos(prev => {
        // Create a new trail with the latest position
        const newTrail = [{ x: mousePos.x, y: mousePos.y }, ...prev.slice(0, -1)];
        return newTrail.map((pos, i) => ({
          x: pos.x + (newTrail[Math.max(0, i-1)]?.x - pos.x) * 0.2,
          y: pos.y + (newTrail[Math.max(0, i-1)]?.y - pos.y) * 0.2
        }));
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationRef.current);
      clearInterval(colorCycleRef.current);
      clearTimeout(spinTimeoutRef.current);
    };
  }, [mousePos, isSpinning]);

  return (
    <>
      {/* Main cursor */}
      <div 
        className={`crazy-cursor ${isHoveringClickable ? 'hovering' : ''} ${isClicked ? 'clicked' : ''} ${isSpinning ? 'spinning' : ''}`}
        style={{
          '--cursor-color': colors[colorIndex],
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />
      
      {/* Trailing circles */}
      {trailPos.map((pos, i) => (
        <div 
          key={i}
          className="trail-circle"
          style={{
            '--trail-color': colors[(colorIndex + i) % colors.length],
            '--trail-size': `${10 + i * 3}px`,
            '--trail-opacity': `${1 - i * 0.15}`,
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            zIndex: 9998 - i,
          }}
        />
      ))}
      
      {/* Click explosion particles */}
      {isClicked && (
        <>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                '--particle-color': colors[(colorIndex + i) % colors.length],
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`,
                transform: `rotate(${i * 30}deg) translateY(30px)`,
              }}
            />
          ))}
        </>
      )}
    </>
  );
};

export default MouseCircle;