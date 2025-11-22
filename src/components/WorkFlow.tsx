import type { WorkFlowStep } from '@/interfaces/WorkFlowStep';
import { FunctionComponent } from 'preact';

const workflowSteps: WorkFlowStep[] = [
    { id: 1, title: 'Requirement Disscussion', description: 'Start with understanding your project needs, goals, and expectations. We align on the vision and set a solid foundation.' },
    { id: 2, title: 'Confirm Specs & Deadline', description: 'Finalize the project specifications, scope, and establish a realistic timeline with key milestones to ensure transparency.' },
    { id: 3, title: 'Development', description: 'Our team begins coding, designing, and implementing the agreed-upon features while ensuring high-quality performance and security.' },
    { id: 4, title: 'Integration', description: 'We integrate the various components into a functional system, ensuring that different parts of the project work together seamlessly.' },
    { id: 5, title: 'Testing & Validation', description: 'Before launching, we conduct thorough testing to identify and resolve any issues, ensuring a stable and polished final product.' },
    { id: 6, title: 'Completion & Delivery', description: 'We deliver the final product with all necessary documentation, source code, and provide deployment assistance.' }
];

const TimelineItem: FunctionComponent<{ step: WorkFlowStep; index: number }> = ({ step, index }) => {
    const isEven = index % 2 === 0;
    const alignmentClasses = isEven ? 'md:flex-row' : 'md:flex-row-reverse';
    const textAlignment = isEven ? 'md:text-left' : 'md:text-right';
    const pointAlignment = isEven ? 'md:left-1/2 md:-ml-4' : 'md:right-1/2 md:-mr-4';

    return (
        <div className={`flex items-center w-full mx-auto ${alignmentClasses}`}>
            {/* <!-- Left/Right Content --> */}
            <div className="w-full md:w-1/2 md:px-8">
                <div className={`p-6 rounded-lg bg-surface/75 backdrop-blur-lg border border-white/30 ${textAlignment}`}>
                    <p className="text-sm font-semibold text-primary uppercase">{`STEP ${String(step.id).padStart(2, '0')}`}</p>
                    <h3 className="text-xl font-bold mt-1 text-text-primary">{step.title}</h3>
                    <p className="mt-2 text-text-secondary">{step.description}</p>
                </div>
            </div>
            {/* <!-- Center Point --> */}
            <div className={`absolute w-8 h-8 bg-primary rounded-full border-4 border-background z-10 hidden md:flex items-center justify-center ${pointAlignment}`}>
            </div>
            {/* <!-- Empty Half --> */}
            <div className="w-1/2 hidden md:block"></div>
        </div>
    );
};


export const WorkFlow: FunctionComponent = () => {
    return (
        <section className="py-20 sm:py-28" id={'workflow'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-primary tracking-wider uppercase">Our Process</h2>
                    <p className="mt-2 text-3xl font-extrabold text-text-primary sm:text-4xl">
                        A Journey to Excellence
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-text-secondary">
                        Following a structured path to ensure quality, transparency, and success.
                    </p>
                </div>

                <div className="relative mt-16">
                    {/* <!-- Vertical Line --> */}
                    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700/50 hidden md:block" aria-hidden="true"></div>

                    <div className="space-y-12 md:space-y-0">
                        {workflowSteps.map((step, index) => (
                            <TimelineItem key={step.id} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
