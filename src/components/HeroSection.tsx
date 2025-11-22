import { Fragment } from 'preact';
import { Navigation } from './Navigation';

export const HeroSection = () => {
    return (
        <Fragment>
            <Navigation />
            {/* The new Hero Section content */}
            <div className="h-screen flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
                    <span className="block text-primary">Your Imagination</span>
                    <span className="block mt-2 text-text-primary">Our Implementation</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg md:text-xl text-text-secondary">
                    We transform your complex requirements into elegant, high-performance software solutions.
                </p>
            </div>
        </Fragment>
    );
};
