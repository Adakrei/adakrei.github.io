import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import { ArrowRight, X, Code, Share2, Plug, Database, MonitorSmartphone } from 'lucide-react';
import { ReactNode } from 'preact/compat';
// Import images
import industrialAutomationImg from '/assets/industrial-automation.png';
import monitoringMaintainanceImg from '/assets/Engineers monitoring predictive maintenance dashboard.png';
import smartSensingImg from '/assets/SmartSensor.png';
import FactoryDashBoardImg from '/assets/FactoryDashBoard.png';
import IoTEnvImg from '/assets/IoTEnv.png';
import SmartHomeImg from '/assets/SmartHome.png';
import APIIntegrationImg from '/assets/APIIntegrationDiagram.png';
import TeleComBotImg from '/assets/TeleComArchi.png';
import APIWorkFlowImg from '/assets/API workflow.png';
import DataBaseArch from '/assets/DataBaseArchitecture.png';
import DataMigration from '/assets/DataMigration.png';
import ResponesiveWebDesignImg from '/assets/ResponesiveWebDesign.png';
import WebsiteDesignProcImg from '/assets/WebsiteDesignProc.png';

// --- DATA (Could be moved to a separate file later) ---
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
    icon: ReactNode;
    modalContent: ContentSection[];
}
const service_content: ServiceItem[] = [
    {
        id: '1',
        title: 'Machine Learning System',
        description: ['Finetuning Pre-trained Models', 'Situation-Specified Model Building'],
        icon: <Code size={32} />,
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
            }
        ]
    },
    {
        id: '2',
        title: 'IoT System',
        description: ['Smart Device Integration', 'Smart Home', 'Real-time Data Monitoring'],
        icon: <Share2 size={32} />,
        modalContent: [
            { type: 'full-image', imageSrc: IoTEnvImg, imageAlt: 'IoT ecosystem diagram' },
            {
                type: 'text-image-left',
                text: 'Our IoT solutions bridge the gap between the physical and digital worlds, enabling businesses and homes to monitor, manage, and automate devices and environments in real time.',
                imageSrc: smartSensingImg,
                imageAlt: 'Smart sensors network'
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
        icon: <Plug size={32} />,
        modalContent: [
            { type: 'full-image', imageSrc: APIWorkFlowImg, imageAlt: 'API workflow visualization' },
            {
                type: 'text-image-right',
                text: "Our API integration services connect disparate systems into a unified, streamlined digital environment. Whether it's linking CRMs, ERPs, or cloud platforms, we ensure smooth data flow and enhanced automation.",
                imageSrc: APIIntegrationImg,
                imageAlt: 'API integration diagram'
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
        icon: <Database size={32} />,
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
        icon: <MonitorSmartphone size={32} />,
        modalContent: [
            {
                type: 'text-image-left',
                text: 'We create beautiful, responsive websites that deliver exceptional user experiences across all devices, from desktops to smartphones.',
                imageSrc: ResponesiveWebDesignImg,
                imageAlt: 'Responsive website design'
            },
            { type: 'full-image', imageSrc: WebsiteDesignProcImg, imageAlt: 'Website development process' },
            {
                type: 'full-text',
                text: 'Our development process emphasizes accessibility, performance, and SEO best practices, ensuring your website not only looks great but also ranks well in search engines and loads quickly for all users.'
            }
        ]
    }
];

// --- SUB-COMPONENTS (Could be moved to their own files later) ---

const ContentSectionDisplay: FunctionComponent<{ section: ContentSection }> = ({ section }) => {
    const textBlock = (
        <div className="md:w-1/2">
            <p className="text-lg leading-relaxed text-text-secondary">{section.text}</p>
        </div>
    );
    const imageBlock = (
        <div className="md:w-1/2">
            <img src={section.imageSrc} alt={section.imageAlt || ''} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
    );

    switch (section.type) {
        case 'text-image-right':
            return (
                <div className="flex flex-col md:flex-row gap-8 mb-8 items-center">
                    {textBlock}
                    {imageBlock}
                </div>
            );
        case 'text-image-left':
            return (
                <div className="flex flex-col md:flex-row-reverse gap-8 mb-8 items-center">
                    {textBlock}
                    {imageBlock}
                </div>
            );
        case 'full-text':
            return (
                <div className="mb-8">
                    <p className="text-lg leading-relaxed text-text-secondary">{section.text}</p>
                </div>
            );
        case 'full-image':
            return <div className="mb-8">{imageBlock}</div>;
        default:
            return null;
    }
};

const Modal: FunctionComponent<{ isOpen: boolean; onClose: () => void; title: string; content: ContentSection[] }> = ({
    isOpen,
    onClose,
    title,
    content
}) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={onClose}>
            <div
                className="bg-surface/75 backdrop-blur-lg text-text-primary rounded-xl p-8 w-full max-w-4xl mx-4 border border-white/30 shadow-2xl overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-primary">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-text-secondary hover:text-white transition-colors duration-200">
                        <X size={28} />
                    </button>
                </div>
                <div className="space-y-8">
                    {content.map((section, index) => (
                        <ContentSectionDisplay key={index} section={section} />
                    ))}
                </div>
                <div className="flex justify-end mt-8">
                    <button
                        onClick={onClose}
                        className="bg-accent text-white font-bold py-2 px-6 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const ServiceCard: FunctionComponent<ServiceItem> = ({ title, description, modalContent, icon }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const openModal = (): void => setIsModalOpen(true);
    const closeModal = (): void => setIsModalOpen(false);

    return (
        <>
            <div className="bg-surface/75 backdrop-blur-lg rounded-lg border border-white/30 p-8 flex flex-col justify-between transition duration-300 ease-in-out">
                <div>
                    <div className="text-primary mb-4">{icon}</div>
                    <h3 className="text-2xl font-bold text-text-primary mb-3">{title}</h3>
                    <ul className="space-y-1">
                        {description.map((item, index) => (
                            <li key={index} className="text-text-secondary">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    className="flex items-center gap-x-2 text-primary font-semibold mt-6 group cursor-pointer hover:underline"
                    onClick={openModal}>
                    <span>Learn more</span>
                    <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} title={title} content={modalContent} />
        </>
    );
};

// --- MAIN COMPONENT ---

export const Services: FunctionComponent = () => {
    return (
        <div className="py-20 sm:py-28" id={'services'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-primary tracking-wider uppercase">What We Do</h2>
                    <p className="mt-2 text-3xl font-extrabold text-text-primary sm:text-4xl">Core Services</p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-text-secondary">
                        Providing cutting-edge solutions to solve complex challenges.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {service_content.map((item) => (
                        <ServiceCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            modalContent={item.modalContent}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
