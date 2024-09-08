import React, { useState } from 'react';
import '../style/Youlove.css';
import { useNavigate } from 'react-router-dom';

export default function Youlove() {
    const navigate = useNavigate();
    const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '50%' });

    const next8 = () => {
        navigate('/HowMuch');
    };

    const handleMouseMove = (e) => {
        const button = document.querySelector('.btn-no');
        if (button) {
            const { clientX: mouseX, clientY: mouseY } = e;
            const buttonRect = button.getBoundingClientRect();
            const offset = 100; 
            
            const newTop = Math.max(mouseY - buttonRect.height - offset, 0) + 'px';
            const newLeft = Math.max(mouseX - buttonRect.width / 2 - offset, 0) + 'px';

            setNoButtonPosition({ top: newTop, left: newLeft });
        }
    };

    return (
        <>
            <div className="bigcon7" onMouseMove={handleMouseMove}>
                <div className="card7">
                    <div className="card-content">
                        <h1>Do you Love me ..?</h1>
                        <div className="btn">
                            <button onClick={next8}>Yes</button>
                            <button className="btn-no" style={{ top: noButtonPosition.top, left: noButtonPosition.left }}>No</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
