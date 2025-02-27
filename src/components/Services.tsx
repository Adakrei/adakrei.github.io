import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import { ArrowRight, X } from 'lucide-react';

interface ServiceItem {
    id: string;
    title: string;
    description: string[];  
    modalDescription: string; 
}


// This part should be edited
const service_content: ServiceItem[] = [
    {
        id: '1',
        title: 'Machine Learning System',
        description: [
            'Predictive analytics and forecasting',
            'Deep learning model development'
        ],
        modalDescription: 'Machine Learning Description'
    },
    {
        id: '2',
        title: 'IoT System',
        description: [
            'Smart device integration',
            'Real-time data monitoring'
        ],
        modalDescription: 'IoT Description'
    },
    {
        id: '3',
        title: 'API Integration',
        description: [
            'RESTful API development',
            'Third-party service connections'
        ],
        modalDescription: 'API Integration Description'
    },
    {
        id: '4',
        title: 'Database System Building',
        description: [
            'SQL and NoSQL database design',
            'Data migration services'
        ],
        modalDescription: 'Database System Building Description'
    },
    {
        id: '5',
        title: 'Website Developing',
        description: [
            'Responsive frontend design',
            'CMS implementation'
        ],
        modalDescription: 'Website Developing Description'
    }
];

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;  // Now a string for paragraph display
}

const Modal: FunctionComponent<ModalProps> = ({ isOpen, onClose, title, description }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-transparent flex items-center justify-center z-50"
            style="backdrop-filter: blur(4px);">
            <div className="bg-[#1E2351] bg-opacity-80 text-white rounded-xl p-8 w-full max-w-3xl mx-4 border border-gray-700 shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <button onClick={onClose} className="text-gray-300 hover:text-white">
                        <X size={24} />
                    </button>
                </div>
                <div className="mb-8">
                    <p className="text-lg leading-relaxed text-left tracking-wide">{description}</p>
                </div>
                <div className="flex justify-end">
                    <button 
                        onClick={onClose} 
                        className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded transition-colors duration-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

interface ServiceCardProps {
    title?: string;
    description?: string[]; 
    modalDescription?: string; 
}

const ServiceCard: FunctionComponent<ServiceCardProps> = ({ 
    title = 'Title', 
    description = ['Description'],
    modalDescription = 'Detailed description of the service offering and its benefits.'
}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = (): void => setIsModalOpen(true);
    const closeModal = (): void => setIsModalOpen(false);

    return (
        <>
            <div className="bg-[#1E2351] text-white w-5/12 h-80 border-solid rounded-4xl grow-1 flex flex-col justify-between min-w-84">
                <div>
                    <h3 className="text-4xl text-left mx-6 mt-4">{title}</h3>
                    <ul className="list-disc pl-10 text-left mx-6 mt-2">
                        {description.map((item, index) => (
                            <li key={index} className="text-lg">{item}</li>
                        ))}
                    </ul>
                </div>
                <button className="flex items-center hover:underline mx-6 mb-4" onClick={openModal}>
                    <div className="w-8 h-8 border rounded-full flex items-center justify-center mr-2">
                        <ArrowRight size={26} />
                    </div>
                    <p className="text-xl cursor-pointer hover:underline">Learn more</p>
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} title={title} description={modalDescription} />
        </>
    );
};

const Services = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-16 text-white w-screen" id={'services'}>
            <h2 className="text-4xl md:text-6xl text-left py-3">Services</h2>
            <div className="flex flex-wrap justify-evenly gap-6">
                {service_content.map((item) => (
                    <ServiceCard 
                        key={item.id} 
                        title={item.title}
                        description={item.description}
                        modalDescription={item.modalDescription}
                    />
                ))}
            </div>
        </div>
    );
};

export { Services };