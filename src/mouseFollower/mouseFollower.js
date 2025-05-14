import React, { useState, useEffect, useCallback } from "react";
import labGirl from '../assets/1_labcoat girl_noBG.png';
import './mouseFollower.css';

const MouseFollower = () => {
    const [girlPosition, setGirlPosition] = useState({ x: 0, y: 0 });
    const [isMirrored, setIsMirrored] = useState(false);
    const [prevMouseX, setPrevMouseX] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMoving, setIsMoving] = useState(false);

    const handleMouseMove = useCallback((event) => {
        const currentMouseX = event.clientX;
        setIsMirrored(currentMouseX < prevMouseX);

        setMousePosition({ x: currentMouseX, y: event.clientY });
        setPrevMouseX(currentMouseX);
        setIsMoving(true);

    }, [prevMouseX]);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(window.mouseMoveTimeout);
        };
    }, [handleMouseMove]);
    useEffect(() => {
        const interval = setInterval(() => {
            setGirlPosition((prevPosition) => {
                const newX= prevPosition.x + (mousePosition.x - prevPosition.x) * 0.02;
                const maxY= window.innerHeight * 2/3;
                const minY= window.innerHeight;

                const newY = Math.min(Math.max(prevPosition.y + (mousePosition.y - prevPosition.y) * 0.02, maxY), minY);
                return {
                    x: newX,
                    y: newY,
                }
            })
            }, 16);
            return () => clearInterval(interval);
    }, [mousePosition]);

    return (
        <div className="mouseFollower"
            style={{
                top: girlPosition.y,
                left: girlPosition.x,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <div className={`${isMoving ? 'bouncing' : ''}`}
            >
                <img
                    className='labGirl'
                    src={labGirl}
                    alt="girl in lab coat"
                    style={{
                        transform: `${isMirrored ? 'scaleX(-1)' : ''}`
                    }}
                />
            </div>
        </div>
    );
};

export default MouseFollower;