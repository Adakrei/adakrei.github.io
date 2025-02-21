import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactUs: React.FC = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16 text-white" id={'contact'}>
            <div className="w-full max-w-7xl pl-4 md:pl-8 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-left">Contact Us</h2>
            </div>

            <div className="w-full max-w-7xl flex flex-col md:flex-row justify-center items-center gap-16">
                {/* Left side: Form area */}
                <div className="w-full md:w-1/2  p-8 lg:p-12 rounded-lg shadow-lg space-y-16">
                    <div className="flex  items-center space-x-6 ">
                        <FaEnvelope size={50} />
                        <a href="#" className="text-gray-300 hover:underline text-xl md:text-2xl leading-normal">
                            service@adakrei.com
                        </a>
                    </div>
                    <div className="flex  items-center space-x-6 ">
                        <FaLinkedin size={50} />
                        <a href="#" className="text-gray-300 hover:underline text-xl md:text-2xl leading-normal">
                            AdaKrei
                        </a>
                    </div>
                    <div className="flex  items-center space-x-6 ">
                        <FaGithub size={50} />
                        <a href="#" className="text-gray-300 hover:underline text-xl md:text-2xl leading-normal">
                            Adakrei
                        </a>
                    </div>
                </div>

                {/* Right side: Contact information block */}
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d266.63982258313314!2d121.242168703166!3d24.954638579520875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU3JzE3LjEiTiAxMjHCsDE0JzMyLjEiRQ!5e1!3m2!1sen!2sus!4v1740149987146!5m2!1sen!2sus"
                        width="600"
                        height="450"
                        style="border:0;"
                        allowFullScreen={undefined}
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
