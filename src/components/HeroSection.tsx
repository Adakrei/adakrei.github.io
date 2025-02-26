import { Fragment } from 'preact';
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import { setUrlParam } from '@carry0987/utils';
import adakreiLogo from '/adakrei.svg';

const Navigation = () => {
    const sections = [
        { title: 'Services', id: 'services' },
        { title: 'Cases', id: 'cases' },
        { title: 'Workflow', id: 'workflow' },
        { title: 'Contact Us', id: 'contact' }
    ];

    // Handle scrolling to the target function
    const handleScrollTo = (id: string) => {
        const targetElement = document.getElementById(id); // Get the target block
        if (targetElement) {
            // Use smooth scrolling
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Scroll to the top of the target block
            });
        }
    };

    const currentUrl: string = setUrlParam(window.location.href, null, true);

    return (
        <Disclosure as="nav" className="bg-white/10 backdrop-blur-lg fixed top-0 left-0 w-full z-1 text-white">
            {({ open, close }) => (
                <Fragment>
                    <div className="flex items-center justify-between px-6 py-4">
                        {/* Left logo */}
                        <a href={currentUrl} className="flex items-center text-xl">
                            <img src={adakreiLogo} className="logo bg" alt="Adakrei logo" />
                            <span className="pl-2">Adakrei</span>
                        </a>

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
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleScrollTo(section.id);
                                    }}
                                    className="hover:underline cursor-pointer text-white">
                                    {section.title}
                                </button>
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
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleScrollTo(section.id);
                                                close();
                                            }}
                                            className="block hover:underline text-white w-full">
                                            {section.title}
                                        </button>
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
