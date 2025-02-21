import { ArrowUpRight } from 'lucide-react';

const service_content: object[] = [
    {
        title: 'Machine Learning System',
        description: 'Machine Learning'
    },
    {
        title: 'IoT System',
        description: 'IoT System'
    },
    {
        title: 'API Intergration',
        description: 'API Intergration'
    },
    {
        title: 'Database System Building',
        description: 'Database System Building'
    },
    {
        title: 'Website Developing',
        description: 'Website Developing'
    }
];
function ServiceCard({ title = 'Title', description = 'Description' }) {
    return (
        <div className="bg-[#1E2351]/80 text-white w-5/12 h-80 border-solid border-1 rounded-4xl grow-1 flex flex-col justify-between min-w-96">
            <div>
                <h3 className="text-4xl text-left mx-6 mt-4">{title}</h3>
                <p className="text-2xl text-left mx-6">{description}</p>
            </div>
            <button className="flex items-center hover:underline mx-6 mb-4">
                <div className="w-8 h-8 border rounded-full flex items-center justify-center mr-2">
                    <ArrowUpRight size={26} />
                </div>
                <p className="text-xl">Learn more</p>
            </button>
        </div>
    );
}

export default function Services() {
    return (
        <div className="px-28 w-screen bg-black text-white">
            <h2 className="text-6xl text-left py-3">Services</h2>
            <div className="flex flex-wrap justify-evenly  gap-6">
                {service_content.map((item) => (
                    <ServiceCard {...item} />
                ))}
            </div>
        </div>
    );
}
