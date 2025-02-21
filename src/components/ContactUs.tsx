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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d352.1377902433443!2d121.2420472023062!3d24.954999836586484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823360f26e9b9%3A0xe94eee18f9cff997!2zIzE1QmlzdHJvIOaLvuS8jeiZn-mkkOmFkumkqC3mmqLpo7J85Lit5aOi5b-F5ZCD6aSQ6YWS6aSofOS6uuawo-mkkOW7s3zlv4XljrvphZLlkKd85rex5aSc6YWS5ZCn!5e0!3m2!1szh-TW!2stw!4v1740146724063!5m2!1szh-TW!2stw"
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
