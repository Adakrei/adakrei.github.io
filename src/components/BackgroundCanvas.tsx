import React, { useEffect, useRef } from 'react';

const BackgroundCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const warea = { x: null as number | null, y: null as number | null, max: 20000 };

        const onMouseMove = (e: MouseEvent) => {
            warea.x = e.clientX;
            warea.y = e.clientY;
        };

        const onMouseOut = () => {
            warea.x = null;
            warea.y = null;
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseout', onMouseOut);

        const dots: {
            x: number;
            y: number;
            xa: number;
            ya: number;
            max: number;
        }[] = new Array(300).fill(null).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            xa: Math.random() * 2 - 1,
            ya: Math.random() * 2 - 1,
            max: 6000
        }));

        const RAF = window.requestAnimationFrame || ((callback) => setTimeout(callback, 1000 / 60));

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const ndots = [warea, ...dots];

            dots.forEach((dot) => {
                dot.x += dot.xa;
                dot.y += dot.ya;

                // Reverse velocity when hitting canvas boundaries
                dot.xa *= dot.x > canvas.width || dot.x < 0 ? -1 : 1;
                dot.ya *= dot.y > canvas.height || dot.y < 0 ? -1 : 1;

                ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);

                for (const d2 of ndots) {
                    if (dot === d2 || d2.x === null || d2.y === null) continue;

                    const dx = dot.x - d2.x;
                    const dy = dot.y - d2.y;
                    const distance = dx * dx + dy * dy;

                    if (distance < d2.max) {
                        if (d2 === warea && distance > d2.max / 2) {
                            dot.x -= dx * 0.03;
                            dot.y -= dy * 0.03;
                        }

                        const ratio = (d2.max - distance) / d2.max;

                        ctx.beginPath();
                        ctx.lineWidth = ratio / 2;
                        ctx.strokeStyle = `rgba(255,255,255,${ratio + 0.2})`;
                        ctx.moveTo(dot.x, dot.y);
                        ctx.lineTo(d2.x, d2.y);
                        ctx.stroke();
                    }
                }
            });

            RAF(animate);
        };

        // Delay animation start
        setTimeout(() => animate(), 100);

        return () => {
            // Cleanup event listeners and animations
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseout', onMouseOut);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
            }}
        />
    );
};

export { BackgroundCanvas };
