import type { WorkFlowStep } from '@/interfaces/WorkFlowStep';
import { WorkFlowItem } from './WorkFlowItem';

import { useState } from 'preact/hooks';
import { FunctionComponent } from 'preact';

export const WorkFlow: FunctionComponent = () => {
    const [openStep, setOpenStep] = useState<number>(1);

    const workflowSteps: WorkFlowStep[] = [
        {
            id: 1,
            title: 'Requirement Disscussion',
            description:
                'Start with understanding your project needs, goals, and expectations. This involves detailed discussions to clarify requirements, desired features, budget considerations, and any specific constraints. Open communication ensures we align on the vision and objectives before moving forward. We also address any technical feasibility concerns and provide professional insights to refine the idea. This step helps prevent misunderstandings and sets a solid foundation for the project. By the end of this phase, both parties should have a clear roadmap, ensuring smooth progress in the later stages. We document all discussions for reference throughout the project.'
        },
        {
            id: 2,
            title: 'Confirm Specs & Deadline',
            description:
                'Once your requirements are clearly defined, we finalize the project specifications and confirm the scope. This includes listing all features, functionalities, and technical aspects, ensuring feasibility and alignment with expectations. Additionally, we establish a realistic timeline with key milestones and deadlines, ensuring transparency in project progress. Any potential risks or challenges are discussed, and solutions are proposed to mitigate delays. By the end of this phase, we will have a clear agreement on deliverables, ensuring the development process stays on track. A structured plan allows for better efficiency and minimizes uncertainties as we move forward.'
        },
        {
            id: 3,
            title: 'Development',
            description:
                'With specifications finalized, we begin the development process. Our team works on coding, designing, and implementing the agreed-upon features while ensuring high-quality performance and security. Regular progress updates are provided to keep you informed. Throughout this stage, we follow best coding practices, optimize for efficiency, and ensure scalability for future improvements. Agile methodologies may be used to allow flexibility for necessary adjustments. Close collaboration ensures the project remains aligned with your expectations. By the end of this phase, all core functionalities should be in place, setting the stage for integration and testing in the next step.'
        },
        {
            id: 4,
            title: 'Integration',
            description:
                "Once the development phase is complete, we integrate the various components into a functional system. This step ensures that different parts of the project work together seamlessly. Whether it's connecting front-end and back-end systems, third-party services, or APIs, we ensure everything is properly configured and optimized for performance. Data migration, security checks, and compatibility testing are also conducted at this stage. We carefully monitor the integration process to prevent conflicts or inconsistencies. By the end of this phase, the project should be a fully functional system, ready for extensive testing to ensure stability and reliability."
        },
        {
            id: 5,
            title: 'Testing & Validation',
            description:
                'Before launching, we conduct thorough testing to identify and resolve any issues. This includes functional testing to ensure features work as expected, performance testing for speed and efficiency, and security testing to protect against vulnerabilities. User acceptance testing (UAT) may also be performed, allowing you to verify that the system meets your requirements. Feedback is gathered and necessary refinements are made. This step is crucial for ensuring a smooth user experience and preventing issues after deployment. By the end of this phase, the project will be stable, polished, and ready for final delivery.'
        },
        {
            id: 6,
            title: 'Completion',
            description:
                'Once testing is complete and all issues are resolved, we deliver the final product. We provide necessary documentation, source code (if applicable), and deployment assistance. Training or onboarding sessions may be offered to ensure you can fully utilize the system. We also gather final feedback to address any last-minute improvements. Support options can be discussed for post-launch maintenance if needed. Our goal is to ensure a seamless handover and your satisfaction with the final product. By the end of this phase, the project is officially completed, marking the successful conclusion of our collaboration.'
        }
    ];

    const handleToggle = (stepId: number) => {
        setOpenStep(openStep === stepId ? 0 : stepId);
    };

    return (
        <section className="max-w-6xl mx-auto px-4 py-16" id={'workflow'}>
            <div className="mb-8">
                <div className="py-3 inline-block-left flex text-white text-left text-4xl md:text-6xl">
                    Our Workflow
                </div>
                <div className="text-gray-300 inline-block-left ml-2 flex">
                    Step-by-Step Guide to Get Your Things Done
                </div>
            </div>
            <div className="space-y-4">
                {workflowSteps.map((step) => (
                    <WorkFlowItem
                        key={step.id}
                        step={step}
                        isOpen={openStep === step.id}
                        isActive={openStep === step.id}
                        onToggle={() => handleToggle(step.id)}
                    />
                ))}
            </div>
        </section>
    );
};
