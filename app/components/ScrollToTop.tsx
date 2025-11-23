import React, { useEffect, useState } from 'react';

const ScrollToTop: React.FC = () => {
    // State to control the visibility of the button
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button when scroll is greater than 300px
            setIsVisible(window.scrollY > 300);
        };

        // Listen to the scroll event
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Clean up the scroll event
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <button
                onClick={scrollToTop}
                className={`fixed bottom-5 right-5 z-1 bg-white text-black
                    rounded-full w-12 h-12 text-lg shadow-md cursor-pointer
                    transform transition-transform duration-300
                    ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                aria-label="Scroll to top">
                <span>↑</span>
            </button>
        </div>
    );
};

export { ScrollToTop };
