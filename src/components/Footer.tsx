import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white overflow-hidden px-8 py-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
                {/* Logo */}
                <div className="flex flex-col space-y-2 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <img src="/adakrei.svg" alt="Adakrei" className="w-10 h-10" />
                        <span className="text-2xl font-bold">Adakrei</span>
                    </div>
                    {/* Email */}
                    <p className="mt-2 text-gray-300">
                        Email:{' '}
                        <a href="mailto:service@adakrei.com" className="hover:underline text-white">
                            service@adakrei.com
                        </a>
                    </p>
                    {/* Address */}
                    <p className="text-gray-300">
                        Address: 5F.-14, No. 15, Daren 2nd St., Puzhong Vil., Zhongli Dist., Taoyuan City 320041, Taiwan
                        (R.O.C.)
                    </p>
                    {/* Tax ID */}
                    <p className="text-gray-300">Tax ID: 93695722</p>
                </div>

                {/* Social */}
                <div className="mt-6 md:mt-0 flex space-x-6 text-2xl">
                    <a href="https://github.com/Adakrei" target={'_blank'} className="hover:text-gray-400">
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/adakrei/"
                        target={'_blank'}
                        className="hover:text-gray-400">
                        <FaLinkedin />
                    </a>
                </div>
            </div>

            <p className="text-center text-sm text-gray-400 mt-6">&copy; 2025 Adakrei. All Rights Reserved.</p>
        </footer>
    );
};

export { Footer };
