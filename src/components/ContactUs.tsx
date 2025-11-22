import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FunctionComponent } from 'preact'; // Use preact's FunctionComponent

export const ContactUs: FunctionComponent = () => {
    // Basic state for form handling (client-side only for UI demo)
    const handleSubmit = (e: Event) => {
        e.preventDefault();
        alert('Message Sent! (This is a demo, no actual email sent)');
        // In a real app, you would send this data to a backend
    };

    return (
        <section className="bg-background py-20 sm:py-28" id={'contact'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-base font-semibold text-primary tracking-wider uppercase">Get In Touch</h2>
                    <p className="mt-2 text-3xl font-extrabold text-text-primary sm:text-4xl">
                        Let's Build Something Great
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-text-secondary">
                        Have a project in mind? Reach out to us for a consultation.
                    </p>
                </div>

                <div className="bg-surface rounded-lg border border-gray-700/50 shadow-xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column: Contact Form */}
                        <div>
                            <h3 className="text-2xl font-bold text-text-primary mb-6">Send Us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text-primary
                                                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text-primary
                                                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text-primary
                                                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-y"
                                        placeholder="Tell us about your project or inquiry..."
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-accent text-white font-bold py-3 px-8 rounded-lg
                                               transform transition-all duration-300 ease-in-out
                                               hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.6)]">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Right Column: Social Links & Map */}
                        <div>
                            <h3 className="text-2xl font-bold text-text-primary mb-6">Reach Out Directly</h3>
                            <div className="space-y-6">
                                <a
                                    href="mailto:service@adakrei.com"
                                    className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors duration-200">
                                    <FaEnvelope size={32} className="text-primary" />
                                    <span className="text-lg">service@adakrei.com</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/adakrei/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors duration-200">
                                    <FaLinkedin size={32} className="text-primary" />
                                    <span className="text-lg">AdaKrei on LinkedIn</span>
                                </a>
                                <a
                                    href="https://github.com/Adakrei"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors duration-200">
                                    <FaGithub size={32} className="text-primary" />
                                    <span className="text-lg">Adakrei on GitHub</span>
                                </a>
                            </div>

                            {/* Map Embed - Keeping it here as it was present in original */}
                            <div className="relative w-full mt-12 rounded-lg overflow-hidden border border-gray-700/50" style={{ paddingTop: '56.25%' }}>
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d266.63982258313314!2d121.242168703166!3d24.954638579520875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjRzNTcnMTcuMSJOIDEyMcsxNCczMi4xIkU!5e1!3m2!1sen!2sus!4v1740149987146!5m2!1sen!2sus"
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
