import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white overflow-hidden px-8 py-12">
            <div className="max-w-7xl w-4/5 mx-auto flex flex-col md:flex-row justify-between items-start mb-12">
                {/* Logo */}
                <div className="flex flex-col space-y-2 text-center md:text-left">
                    <div className="flex items-center gap-3">
                        <img src="/adakrei.svg" alt="Adakrei" className="w-10 h-10" />
                        <span className="text-2xl font-bold">Adakrei</span>
                    </div>
                    <p className="mt-2 text-gray-300">
                        Email:{' '}
                        <a href="mailto:service@adakrei.com" className="hover:underline text-white">
                            service@adakrei.com
                        </a>
                    </p>
                    <p className="text-gray-300">
                        Address: 5 F.-14, No. 15, Daren 2nd St., Puzhong Vil., Zhongli Dist., Taoyuan City 320041,
                        Taiwan (R.O.C.)
                    </p>
                </div>

                {/* Social */}
                <div className="mt-6 md:mt-0 flex space-x-6 text-2xl">
                    <a href="#" className="hover:text-gray-400">
                        <FaTwitter />
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        <FaLinkedin />
                    </a>
                </div>
            </div>

            <p className="text-center text-sm text-gray-400 mt-6">&copy; 2025 Adakrei. All Rights Reserved.</p>
        </footer>
    );
};

export { Footer };
