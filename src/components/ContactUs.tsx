import { FormData } from '@/interfaces/FormData';

import React, { useState } from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const ContactUs: React.FC = () => {
    // Define formData using interface
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target;
        if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
            setFormData((prev) => ({ ...prev, [target.name]: target.value }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section className="max-w-6xl mx-auto px-4 py-16 text-white" id={'contact'}>
            <div className="w-full max-w-7xl pl-4 md:pl-8 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-left">Contact Us</h2>
            </div>

            <div className="w-full max-w-7xl flex flex-col md:flex-row justify-center items-center gap-16">
                {/* Left side: Form area */}
                <div className="w-full md:w-1/2 bg-indigo-900 p-8 lg:p-12 rounded-lg shadow-lg">
                    <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
                        {Object.entries(formData).map(([key, value]) => (
                            <label key={key} className="block text-left">
                                <span className="text-gray-300 text-xl md:text-2xl capitalize">{key}</span>
                                {key === 'message' ? (
                                    <textarea
                                        name={key}
                                        rows={5}
                                        value={value}
                                        onChange={handleChange}
                                        className="w-full p-3 mt-2 rounded bg-gray-800 text-white border border-gray-600 focus:ring focus:ring-indigo-400"
                                        placeholder={key}
                                    />
                                ) : (
                                    <input
                                        type={key === 'email' ? 'email' : 'text'}
                                        name={key}
                                        value={value}
                                        onChange={handleChange}
                                        className="w-full p-3 mt-2 rounded bg-gray-800 text-white border border-gray-600 focus:ring focus:ring-indigo-400"
                                        placeholder={key}
                                    />
                                )}
                            </label>
                        ))}
                        <button
                            type="submit"
                            className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded transition">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right side: Contact information block */}
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
                    <div className="flex items-center space-x-6">
                        <FaEnvelope size={50} />
                        <a href="#" className="text-gray-300 hover:underline text-xl md:text-2xl">
                            service@adakrei.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-6">
                        <FaLinkedin size={50} />
                        <a href="#" className="text-gray-300 hover:underline text-xl md:text-2xl">
                            AdaKrei
                        </a>
                    </div>
                    <div className="flex items-center space-x-6">
                        <FaTwitter size={50} />
                        <a href="#" className="text-gray-300 hover:underline text-xl md:text-2xl">
                            Adakrei
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
