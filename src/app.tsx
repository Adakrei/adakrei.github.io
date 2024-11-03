import { Fragment } from 'preact/jsx-runtime';
import adakreiLogo from '/adakrei.svg';
import './app.css';

export function App() {
    const currentYear = new Date().getFullYear();

    return (
        <Fragment>
            <header className="bg-gray-900 text-white">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <div className="flex items-center text-lg font-bold">
                        <img src={adakreiLogo} className="logo" alt="Adakrei logo" />
                        <span className="pl-2">Adakrei</span>
                    </div>
                    <nav className="space-x-4 hidden">
                        <a href="#" className="hover:text-orange-500">Products</a>
                        <a href="#" className="hover:text-orange-500">Solutions</a>
                        <a href="#" className="hover:text-orange-500">News</a>
                        <a href="#" className="hover:text-orange-500">Events</a>
                        <a href="#" className="hover:text-orange-500">Blog</a>
                        <a href="#" className="hover:text-orange-500">Contact</a>
                    </nav>
                </div>
            </header>
            <section className="relative bg-gray-800 text-white">
                <img src="https://placehold.co/1920x600" alt="Hero Image" className="w-full h-96 object-cover opacity-50" />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold">Adakrei. We change everything.</h1>
                    <p className="mt-4">Stunning technology that moves the world.</p>
                    <button className="mt-6 bg-orange-500 text-white py-2 px-4 rounded">Learn More</button>
                </div>
            </section>
            <section className="bg-gray-700 text-white py-4">
                <div className="container mx-auto flex justify-around">
                    <a href="#" className="hover:text-orange-500">Products</a>
                    <a href="#" className="hover:text-orange-500">Solutions</a>
                    <a href="#" className="hover:text-orange-500">News</a>
                    <a href="#" className="hover:text-orange-500">Events</a>
                    <a href="#" className="hover:text-orange-500 hidden">Blog</a>
                    <a href="#" className="hover:text-orange-500 hidden">Contact</a>
                </div>
            </section>
            <section className="bg-orange-500 text-white py-12 hidden">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold">Welcome to Adakrei</h2>
                    <p className="mt-4"></p>
                </div>
            </section>
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold text-center">Where innovation begins</h2>
                    <p className="text-center mt-2">Discover the latest in technology and innovation from Adakrei.</p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-4 rounded shadow">
                            <img src="https://placehold.co/400x300" alt="Innovation Image" className="w-full h-48 object-cover rounded" />
                            <h3 className="mt-4 text-lg font-bold">AI Technology</h3>
                            <p className="mt-2">Leading the way in AI technology and innovation.</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <img src="https://placehold.co/400x300" alt="Innovation Image" className="w-full h-48 object-cover rounded" />
                            <h3 className="mt-4 text-lg font-bold">5G Connectivity</h3>
                            <p className="mt-2">Pioneering the future of connectivity with 5G technology.</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <img src="https://placehold.co/400x300" alt="Innovation Image" className="w-full h-48 object-cover rounded" />
                            <h3 className="mt-4 text-lg font-bold">Smart Home</h3>
                            <p className="mt-2">Innovative solutions for a smarter home.</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold">About Us</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-orange-500">Company</a></li>
                            <li><a href="#" className="hover:text-orange-500">Careers</a></li>
                            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Technology</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-orange-500">Products</a></li>
                            <li><a href="#" className="hover:text-orange-500">Solutions</a></li>
                            <li><a href="#" className="hover:text-orange-500">News</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Connect</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-orange-500">Blog</a></li>
                            <li><a href="#" className="hover:text-orange-500">Events</a></li>
                            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container mx-auto text-center mt-8 hidden">
                    <p>Subscribe to our newsletter</p>
                    <form className="mt-4">
                        <input type="email" placeholder="Enter your email" className="p-2 rounded-l bg-gray-800 text-white" />
                        <button className="bg-orange-500 text-white py-2 px-4 rounded-r">Subscribe</button>
                    </form>
                </div>
                <div className="container mx-auto text-center mt-8">
                    <p>&copy; {currentYear} Adakrei. All rights reserved.</p>
                    <div className="mt-4 space-x-4">
                        <a href="#" className="hover:text-orange-500"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-orange-500"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-orange-500"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="hover:text-orange-500"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-orange-500"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}
