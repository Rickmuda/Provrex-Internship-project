import React, { useEffect } from 'react';

function Continue() {
    useEffect(() => {
        const logo = document.querySelector('.logo img');

        const fadeOutLogo = () => {
            if (logo) {
                logo.style.opacity = '0';
                logo.style.transition = 'opacity 1s'; 
            }
        };

        const redirectToSaves = () => {
            fadeOutLogo();
            setTimeout(() => {
                window.location.href = '/saves';
            }, 1000); // Aantal miliseconden voor de fade-out animatie.
        };

        document.addEventListener('keypress', redirectToSaves);
        document.addEventListener('click', redirectToSaves);

        return () => {
            document.removeEventListener('keypress', redirectToSaves);
            document.removeEventListener('click', redirectToSaves);
        };
    }, []);
    
    return (
        <div className='continue blinking-text'>
            <p>PRESS ANYTHING TO CONTINUE</p>
        </div>
    );
}

export default Continue;