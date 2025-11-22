import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FunctionComponent } from 'preact'; // Add this import for Preact compatibility

export const Footer: FunctionComponent = () => { // Change to FunctionComponent
    return (
        <footer className="bg-background text-text-primary overflow-hidden px-8 py-12 border-t border-gray-700/50"> {/* Use bg-background and text-text-primary */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start mb-12"> {/* Max-w-7xl for consistency */}
                {/* Logo and Info */}
                <div className="flex flex-col space-y-2 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <img src="/adakrei.svg" alt="Adakrei" className="w-10 h-10" />
                        <span className="text-2xl font-bold">Adakrei</span>
                    </div>
                    {/* Email */}
                    <p className="mt-4 text-text-secondary"> {/* Added mt-4 for spacing */}
                        Email:{' '}
                        <a href="mailto:service@adakrei.com" className="hover:text-primary transition-colors duration-200"> {/* Hover effect */}
                            service@adakrei.com
                        </a>
                    </p>
                    {/* Address */}
                    <p className="text-text-secondary">
                        Address: 5F.-14, No. 15, Daren 2nd St., Puzhong Vil., Zhongli Dist., Taoyuan City 320041, Taiwan
                        (R.O.C.)
                    </p>
                    {/* Tax ID */}
                    <p className="text-text-secondary">Tax ID: 93695722</p>
                </div>

                {/* Social */}
                <div className="mt-6 md:mt-0 flex space-x-6 text-2xl">
                    <a href="https://github.com/Adakrei" target={'_blank'} rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors duration-200"> {/* Hover effect */}
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/adakrei/"
                        target={'_blank'} rel="noopener noreferrer"
                        className="text-text-secondary hover:text-primary transition-colors duration-200"> {/* Hover effect */}
                        <FaLinkedin />
                    </a>
                </div>
            </div>

            <p className="text-center text-sm text-text-secondary mt-6">&copy; {new Date().getFullYear()} Adakrei. All Rights Reserved.</p> {/* Updated year dynamically */}
        </footer>
    );
};
