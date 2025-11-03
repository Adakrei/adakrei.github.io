import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import { ArrowRight, X } from 'lucide-react';
import industrialAutomationImg from '@/assets/industrial-automation.png';
import monitoringMaintainanceImg from '@/assets/Engineers monitoring predictive maintenance dashboard.png';
import smartSensingImg from '@/assets/SmartSensor.png';
import FactoryDashBoardImg from '@/assets/FactoryDashBoard.png';
import IoTEnvImg from '@/assets/IoTEnv.png';
import SmartHomeImg from '@/assets/SmartHome.png';
import APIIntegrationImg from '@/assets/APIIntegrationDiagram.png';
import TeleComBotImg from '@/assets/TeleComArchi.png';
import APIWorkFlowImg from '@/assets/API workflow.png';
import DataBaseArch from '@/assets/DataBaseArchitecture.png';
import DataMigration from '@/assets/DataMigration.png';
import ResponesiveWebDesignImg from '@/assets/ResponesiveWebDesign.png';
import WebsiteDesignProcImg from '@/assets/WebsiteDesignProc.png';

export type ContentSectionType = 'text-image-right' | 'text-image-left' | 'full-text' | 'full-image';

export interface ContentSection {
    type: ContentSectionType;
    text?: string;
    imageSrc?: string;
    imageAlt?: string;
}

export interface ServiceItem {
    id: string;
    title: string;
    description: string[];
    modalContent: ContentSection[];
}

const service_content: ServiceItem[] = [
    {
        id: '1',
        title: 'Machine Learning System',
        description: ['Finetuning Pre-trained Models', 'Situation-Specified Model Building'],
        modalContent: [
            {
                type: 'text-image-right',
                text: 'Our machine learning solutions empower industries with intelligent automation, predictive maintenance, and real-time data insights, optimizing productivity and reducing operational costs.',
                imageSrc: industrialAutomationImg,
                imageAlt: 'Industrial automation powered by AI'
            },
            {
                type: 'full-text',
                text: 'We specialize in industrial AI applications, from defect detection in manufacturing to supply chain optimization and demand forecasting. Our models are designed to work in high-stakes environments with stringent accuracy and reliability requirements.'
            },
            {
                type: 'text-image-left',
                text: 'Our AI-driven predictive maintenance systems analyze sensor data to anticipate equipment failures, minimizing downtime and improving efficiency in industries.',
                imageSrc: monitoringMaintainanceImg,
                imageAlt: 'Engineers monitoring predictive maintenance dashboard'
            },
            {
                type: 'full-text',
                text: 'Our approach prioritizes transparency, explainability, and seamless integration with industrial systems, ensuring that AI-driven insights translate into measurable business value.'
            }
        ]
    },
    {
        id: '2',
        title: 'IoT System',
        description: ['Smart Device Integration', 'Smart Home', 'Real-time Data Monitoring'],
        modalContent: [
            {
                type: 'full-image',
                imageSrc: IoTEnvImg,
                imageAlt: 'IoT ecosystem diagram'
            },
            {
                type: 'text-image-left',
                text: 'Our IoT solutions bridge the gap between the physical and digital worlds, enabling businesses and homes to monitor, manage, and automate devices and environments in real time.',
                imageSrc: smartSensingImg,
                imageAlt: 'Smart sensors network'
            },
            {
                type: 'full-text',
                text: 'We build end-to-end IoT ecosystems—from edge devices and connectivity to cloud platforms and analytics—ensuring reliable data flow, enhanced operational control, and actionable insights.'
            },
            {
                type: 'text-image-right',
                text: 'For industrial environments, our IoT systems enable predictive maintenance, energy management, and remote diagnostics, reducing downtime and increasing efficiency.',
                imageSrc: FactoryDashBoardImg,
                imageAlt: 'Factory dashboard showing IoT data'
            },
            {
                type: 'text-image-left',
                text: 'In smart homes, our IoT solutions offer seamless device integration and automation, allowing users to control lighting, climate, security, and more with ease and intelligence.',
                imageSrc: SmartHomeImg,
                imageAlt: 'Smart home control panel'
            }
        ]
    },
    {
        id: '3',
        title: 'API Integration',
        description: ['Telecommunication Bot Design', 'GraphQL API Design', 'Restful API Design'],
        modalContent: [
            {
                type: 'full-image',
                imageSrc: APIWorkFlowImg,
                imageAlt: 'API workflow visualization'
            },
            {
                type: 'text-image-right',
                text: "Our API integration services connect disparate systems into a unified, streamlined digital environment. Whether it's linking CRMs, ERPs, or cloud platforms, we ensure smooth data flow and enhanced automation.",
                imageSrc: APIIntegrationImg,
                imageAlt: 'API integration diagram'
            },
            {
                type: 'full-text',
                text: 'We specialize in building scalable, secure RESTful and GraphQL APIs, with thorough documentation, versioning strategies, and performance tuning to support real-time applications and high-throughput systems.'
            },
            {
                type: 'text-image-left',
                text: 'For telecommunications, we design intelligent bot APIs that enable real-time messaging, call automation, and seamless multichannel support.',
                imageSrc: TeleComBotImg,
                imageAlt: 'Telecom bot architecture'
            }
        ]
    },
    {
        id: '4',
        title: 'Database System Building',
        description: ['SQL and NoSQL Database Design', 'Extendable Database for Big Data'],
        modalContent: [
            {
                type: 'full-text',
                text: "Our database architects build high-performance, scalable database systems tailored to your data needs — whether you're handling structured transactions, unstructured logs, or streaming big data pipelines."
            },
            {
                type: 'text-image-left',
                text: 'We offer both SQL solutions like PostgreSQL and MySQL for reliable transactional systems, and NoSQL options such as MongoDB and Cassandra for high-volume, schema-flexible applications.',
                imageSrc: DataBaseArch,
                imageAlt: 'Database architecture diagram'
            },
            {
                type: 'text-image-right',
                text: 'Our data migration and modernization services ensure a seamless transition from legacy systems to modern architectures with high availability, zero data loss, and minimal operational disruption.',
                imageSrc: DataMigration,
                imageAlt: 'Data migration process'
            },
            {
                type: 'full-text',
                text: 'For big data and analytics-heavy use cases, we build extendable database architectures designed to scale with your data while supporting real-time querying, distributed storage, and fault tolerance.'
            }
        ]
    },
    {
        id: '5',
        title: 'Website Developing',
        description: [
            'Modern UI/UX Experiences',
            'Fully Responsive Frontend Design',
            'Robust, Scalable Backend Architecture'
        ],
        modalContent: [
            {
                type: 'text-image-left',
                text: 'We create beautiful, responsive websites that deliver exceptional user experiences across all devices, from desktops to smartphones.',
                imageSrc: ResponesiveWebDesignImg,
                imageAlt: 'Responsive website design'
            },
            {
                type: 'full-image',
                imageSrc: WebsiteDesignProcImg,
                imageAlt: 'Website development process'
            },
            {
                type: 'full-text',
                text: 'Our development process emphasizes accessibility, performance, and SEO best practices, ensuring your website not only looks great but also ranks well in search engines and loads quickly for all users.'
            }
        ]
    }
];

const ContentSection: FunctionComponent<{ section: ContentSection }> = ({ section }) => {
    switch (section.type) {
        case 'text-image-right':
            return (
                <div className="flex flex-col md:flex-row gap-8 mb-8 items-center px-4 md:px-0">
                    <div className="md:w-1/2 px-4">
                        <p className="text-lg leading-relaxed text-left">{section.text}</p>
                    </div>
                    <div className="md:w-1/2 px-4">
                        <img
                            src={section.imageSrc}
                            alt={section.imageAlt || ''}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            );

        case 'text-image-left':
            return (
                <div className="flex flex-col md:flex-row-reverse gap-8 mb-8 items-center px-4 md:px-0">
                    <div className="md:w-1/2 px-4">
                        <p className="text-lg leading-relaxed text-left">{section.text}</p>
                    </div>
                    <div className="md:w-1/2 px-4">
                        <img
                            src={section.imageSrc}
                            alt={section.imageAlt || ''}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            );

        case 'full-text':
            return (
                <div className="mb-8 px-4 md:px-0">
                    <p className="text-lg leading-relaxed text-left">{section.text}</p>
                </div>
            );

        case 'full-image':
            return (
                <div className="mb-8 px-4 md:px-0">
                    <img
                        src={section.imageSrc}
                        alt={section.imageAlt || ''}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            );

        default:
            return null;
    }
};

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: ContentSection[];
}

const Modal: FunctionComponent<ModalProps> = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-transparent flex items-center justify-center z-50"
            style={{ backdropFilter: 'blur(4px)' }}>
            <div className="bg-[#1E2351] bg-opacity-90 text-white rounded-xl p-8 w-full max-w-4xl mx-4 border border-gray-700 shadow-lg overflow-y-auto max-h-screen">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <button onClick={onClose} className="text-gray-300 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                <div className="mb-8">
                    {content.map((section, index) => (
                        <ContentSection key={index} section={section} />
                    ))}
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded transition-colors duration-200">
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
    modalContent?: ContentSection[];
}

const ServiceCard: FunctionComponent<ServiceCardProps> = ({
    title = 'Title',
    description = ['Description'],
    modalContent = [{ type: 'full-text', text: 'Detailed description of the service offering and its benefits.' }]
}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = (): void => setIsModalOpen(true);
    const closeModal = (): void => setIsModalOpen(false);

    return (
        <>
            <div className="bg-[#1E2351] text-white w-5/12 h-80 border-solid rounded-4xl grow flex flex-col justify-between min-w-84">
                <div>
                    <h3 className="text-4xl text-left mx-6 mt-4">{title}</h3>
                    <ul className="list-disc pl-10 text-left mx-6 mt-2">
                        {description.map((item, index) => (
                            <li key={index} className="text-lg">
                                {item}
                            </li>
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

            <Modal isOpen={isModalOpen} onClose={closeModal} title={title} content={modalContent} />
        </>
    );
};

const Services: FunctionComponent = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-16 text-white w-screen" id={'services'}>
            <h2 className="text-4xl md:text-6xl text-left py-3">Services</h2>
            <div className="flex flex-wrap justify-evenly gap-6">
                {service_content.map((item) => (
                    <ServiceCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        modalContent={item.modalContent}
                    />
                ))}
            </div>
        </div>
    );
};

export { Services };
