import { Fragment } from 'preact';
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import adakreiLogo from '/adakrei.svg';

const Navigation = () => {
    const sections = [
        { title: 'Services', url: '#services' },
        { title: 'Cases', url: '#cases' },
        { title: 'Workflow', url: '#workflow' },
        { title: 'Contact Us', url: '#contact' }
    ];

    return (
        <Disclosure as="nav" className="bg-white/10 backdrop-blur-lg fixed top-0 left-0 w-full z-1 text-white">
            {({ open }) => (
                <Fragment>
                    <div className="flex items-center justify-between px-6 py-4">
                        {/* Left logo */}
                        <div className="flex items-center text-xl">
                            <img src={adakreiLogo} className="logo bg" alt="Adakrei logo" />
                            <span className="pl-2">Adakrei</span>
                        </div>

                        {/* Hamburger button */}
                        <div className="md:hidden">
                            <DisclosureButton className="p-2 text-white focus:outline-none">
                                {open ? (
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </DisclosureButton>
                        </div>

                        {/* Desktop menu */}
                        <ul className="hidden md:flex items-center gap-x-6">
                            {sections.map((section) => (
                                <li key={section.title}>
                                    <a href={section.url} className="hover:underline text-white">
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile dropdown menu */}
                    <Transition
                        show={open}
                        enter="transition duration-300 ease-out"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition duration-200 ease-in"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                        <DisclosurePanel className="md:hidden">
                            <ul className="bg-white/10 text-white font-bold">
                                {sections.map((section) => (
                                    <li
                                        key={section.title}
                                        className="px-6 py-4 border-b border-gray-400 last:border-b-0">
                                        <a href={section.url} className="block hover:underline">
                                            {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </DisclosurePanel>
                    </Transition>
                </Fragment>
            )}
        </Disclosure>
    );
};

const HeroSection = () => {
    return (
        <Fragment>
            <Navigation />
            <div className="h-screen content-center text-white">
                <div className="flex items-center justify-center text-xl">
                    <img src={adakreiLogo} className="logo" alt="Adakrei logo"></img>
                    <span className="pl-4 text-4xl">Adakrei</span>
                </div>
                <div className="text-5xl md:text-6xl lg:text-7xl">
                    <p>Your Imagination,</p>
                    <p>Our implementation</p>
                </div>
            </div>
        </Fragment>
    );
};

export { HeroSection };
