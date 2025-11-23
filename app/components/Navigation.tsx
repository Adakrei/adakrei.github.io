import { Fragment } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import { setUrlParam } from '@carry0987/utils';
import adakreiLogo from '/adakrei.svg';

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

export const Navigation = () => {
    const currentUrl: string = typeof window !== 'undefined' ? setUrlParam(window.location.href, null, true) : '/';

    return (
        <Disclosure
            as="nav"
            className="bg-surface/75 backdrop-blur-lg fixed top-0 left-0 w-full z-50 text-text-primary border-b border-white/20">
            {({ open, close }) => (
                <Fragment>
                    <div className="flex items-center justify-between px-6 py-4">
                        {/* Left logo */}
                        <a href={currentUrl} className="flex items-center text-xl">
                            <img src={adakreiLogo} className="h-8 w-8" alt="Adakrei logo" />
                            <span className="pl-2 font-semibold">Adakrei</span>
                        </a>

                        {/* Hamburger button */}
                        <div className="md:hidden">
                            <DisclosureButton className="p-2 text-text-primary focus:outline-none">
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
                                    key={section.id}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleScrollTo(section.id);
                                    }}
                                    className="hover:underline cursor-pointer text-sm font-bold text-text-secondary hover:text-primary transition-colors duration-200">
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
                        <DisclosurePanel className="md:hidden border-t border-gray-700">
                            <ul className="bg-surface/95 text-text-primary font-bold">
                                {sections.map((section) => (
                                    <li
                                        key={section.title}
                                        className="px-6 py-4 border-b border-gray-700/50 last:border-b-0">
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleScrollTo(section.id);
                                                close();
                                            }}
                                            className="block hover:text-primary transition-colors duration-200 w-full text-left">
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
