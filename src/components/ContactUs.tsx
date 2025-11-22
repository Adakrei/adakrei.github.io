import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FunctionComponent } from 'preact'; // Use preact's FunctionComponent

export const ContactUs: FunctionComponent = () => {
    return (
        <section className="bg-background min-h-screen flex items-center py-20 sm:py-28" id={'contact'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-lg font-semibold text-primary tracking-wider uppercase">Get In Touch</h2>
                    <p className="mt-4 text-4xl font-extrabold text-text-primary sm:text-5xl lg:text-6xl">
                        Let's Build Something Great
                    </p>
                    <p className="mt-6 max-w-3xl mx-auto text-2xl text-text-secondary">
                        Have a project in mind? Reach out to us for a consultation.
                    </p>
                </div>

                <div className="bg-surface/75 backdrop-blur-lg rounded-lg border border-white/30 shadow-xl p-12 md:p-16 lg:p-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Left Column: Contact Form */}
                        <div className="flex align-middle justify-center">
                            <h3 className="text-3xl font-bold text-text-primary">Contact Us</h3>
                        </div>

                        {/* Right Column: Social Links & Map */}
                        <div>
                            <div className="space-y-8">
                                <a
                                    href="mailto:service@adakrei.com"
                                    className="flex items-center gap-6 text-text-secondary hover:text-primary transition-colors duration-200">
                                    <FaEnvelope size={40} className="text-primary" />
                                    <span className="text-xl">service@adakrei.com</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/adakrei/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-6 text-text-secondary hover:text-primary transition-colors duration-200">
                                    <FaLinkedin size={40} className="text-primary" />
                                    <span className="text-xl">AdaKrei on LinkedIn</span>
                                </a>
                                <a
                                    href="https://github.com/Adakrei"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-6 text-text-secondary hover:text-primary transition-colors duration-200">
                                    <FaGithub size={40} className="text-primary" />
                                    <span className="text-xl">Adakrei on GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
