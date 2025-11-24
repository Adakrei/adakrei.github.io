import type { FC } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaClock } from 'react-icons/fa';

export const ContactUs: FC = () => {
    return (
        <section className="bg-background py-20 sm:py-28" id={'contact'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-primary tracking-wider uppercase">Get In Touch</h2>
                    <p className="mt-4 text-3xl font-extrabold text-text-primary sm:text-4xl">
                        Let's Build Something Great
                    </p>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-text-secondary">
                        Have a project in mind? Reach out to us for a consultation.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="bg-surface/75 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-10 md:p-12 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                            <FaClock className="text-primary" />
                            Quick reply within 1 business day
                        </div>
                        <h3 className="mt-6 text-3xl font-bold text-text-primary">Contact channels</h3>
                        <p className="mt-3 text-lg text-text-secondary">
                            Email us or reach out on social—include your goals and timeline, and we'll follow up with the next steps.
                        </p>

                        <div className="mt-8 space-y-4">
                            <a
                                href="mailto:service@adakrei.com"
                                className="flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-white/15 bg-background/60 hover:border-primary/60 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                                    <FaEnvelope size={26} />
                                </span>
                                <div>
                                    <p className="text-lg font-semibold text-text-primary">service@adakrei.com</p>
                                </div>
                            </a>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a
                                href="https://www.linkedin.com/company/adakrei/"
                                target="_blank"
                                rel="noopener noreferrer"
                                    className="flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-white/15 bg-background/60 hover:border-primary/60 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                                        <FaLinkedin size={26} />
                                    </span>
                                    <div>
                                        <p className="text-lg font-semibold text-text-primary">AdaKrei</p>
                                    </div>
                                </a>
                                <a
                                href="https://github.com/Adakrei"
                                target="_blank"
                                rel="noopener noreferrer"
                                    className="flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-white/15 bg-background/60 hover:border-primary/60 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                                        <FaGithub size={26} />
                                    </span>
                                    <div>
                                        <p className="text-lg font-semibold text-text-primary">Adakrei</p>
                                    </div>
                                </a>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mt-2">
                                
                                <div className="flex items-center gap-2">
                                    <FaClock className="text-primary" />
                                    Typical hours: 08:00–18:00 GMT+8 (Mon–Fri)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
