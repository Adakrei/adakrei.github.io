import { CaseCard } from './CaseCard';

import { FunctionComponent } from 'preact';

export const CaseStudy: FunctionComponent = () => {
    const cases = [
        {
            id: '1',
            position: 'left' as const,
            title: 'Industrial Anomaly Detection',
            description:
                'Developed a custom machine learning model for real-time anomaly detection in industrial sensor data, improving operational efficiency by 25%.',
            tags: ['Machine Learning', 'Python', 'TensorFlow'],
        },
        {
            id: '2',
            position: 'right' as const,
            title: 'Smart Home IoT Ecosystem',
            description:
                'Engineered a comprehensive IoT ecosystem for a smart home startup, including firmware for edge devices, cloud data ingestion pipelines, and a real-time monitoring dashboard.',
            tags: ['IoT', 'Firmware', 'Cloud', 'React'],
        },
        {
            id: '3',
            position: 'left' as const,
            title: 'E-commerce Platform @ Scale',
            description:
                'Built a high-traffic e-commerce platform with a modern, responsive frontend and a scalable microservices-based backend, handling over 10,000 concurrent users.',
            tags: ['E-commerce', 'Microservices', 'Node.js', 'React'],
        },
        {
            id: '4',
            position: 'right' as const,
            title: 'Secure Auth with Supabase & ECPay',
            description:
                'Implemented a secure authentication system using Supabase, integrating ECPay for payments, enabling third-party logins (Google, GitHub), and using JWT validation with data encryption.',
            tags: ['Supabase', 'ECPay', 'JWT', 'Security', 'Authentication'],
        }
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 py-16" id={'cases'}>
            <h2 className="text-4xl md:text-6xl text-white py-3  text-left">Cases</h2>
            <div className="space-y-8">
                {cases.map((caseItem) => (
                    <CaseCard key={caseItem.id} {...caseItem} />
                ))}
            </div>
            <div className="mt-6 bg-black rounded-xl p-8 flex items-center justify-between">
                <div className="space-y-4">
                    <h3 className="text-white font-medium text-left">Need A Full Description?</h3>
                    <p className="text-white text-left">
                        Curious about the deep dive?
                        <br />
                        Explore our technical architectures,
                        <br />
                        methodologies, and business outcomes.
                    </p>
                    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                        Get our full description
                    </button>
                </div>
            </div>
        </section>
    );
};
