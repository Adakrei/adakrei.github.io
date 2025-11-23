import { CaseCard } from './CaseCard';
import { FunctionComponent } from 'preact';
// Import images
import machinelearningImage from '/assets/machinelearning.png';
import iotImage from '/assets/iot.png';
import ecommerceimage from '/assets/ecommerce.png';
import codeimg from '/assets/code.png';

// Data updated with imageUrls for the new CaseCard design
const cases = [
    {
        id: '1',
        title: 'Industrial Anomaly Detection',
        description:
            'Developed a custom machine learning model for real-time anomaly detection in industrial sensor data, improving operational efficiency by 25%.',
        tags: ['Machine Learning', 'Python', 'TensorFlow'],
        imageUrl: machinelearningImage
    },
    {
        id: '2',
        title: 'Smart Home IoT Ecosystem',
        description:
            'Engineered a comprehensive IoT ecosystem for a smart home startup, including firmware, cloud pipelines, and a real-time monitoring dashboard.',
        tags: ['IoT', 'Firmware', 'Cloud', 'React'],
        imageUrl: iotImage
    },
    {
        id: '3',
        title: 'E-commerce Platform @ Scale',
        description:
            'Built a high-traffic e-commerce platform with a modern, responsive frontend and a scalable microservices-based backend for over 10,000 concurrent users.',
        tags: ['E-commerce', 'Microservices', 'Node.js'],
        imageUrl: ecommerceimage
    },
    {
        id: '4',
        title: 'Secure Auth with Supabase & ECPay',
        description:
            'Implemented a secure authentication system using Supabase, integrating ECPay for payments, enabling third-party logins, and using JWT validation.',
        tags: ['Supabase', 'ECPay', 'JWT', 'Security'],
        imageUrl: codeimg
    }
];

export const CaseStudy: FunctionComponent = () => {
    return (
        <section className="bg-background py-20 sm:py-28" id={'cases'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-primary tracking-wider uppercase">Our Work</h2>
                    <p className="mt-2 text-3xl font-extrabold text-text-primary sm:text-4xl">Case Studies</p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-text-secondary">
                        A glimpse into the challenges we've solved and the value we've delivered.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {cases.map((caseItem) => (
                        <CaseCard key={caseItem.id} {...caseItem} />
                    ))}
                </div>
            </div>
        </section>
    );
};
