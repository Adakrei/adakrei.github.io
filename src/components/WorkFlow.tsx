import type { WorkFlowStep } from '@/interfaces/WorkFlowStep';
import { WorkFlowItem } from './WorkFlowItem';

import { useState } from 'preact/hooks';
import { FunctionComponent } from 'preact';

export const WorkFlow: FunctionComponent = () => {
    const [openStep, setOpenStep] = useState<number>(1);

    const workflowSteps: WorkFlowStep[] = [
        { id: 1, title: 'BlaBlaBla', description: 'Description' },
        { id: 2, title: 'BlaBlaBla', description: 'Description' },
        { id: 3, title: 'BlaBlaBla', description: 'Description' },
        { id: 4, title: 'BlaBlaBla', description: 'Description' },
        { id: 5, title: 'BlaBlaBla', description: 'Description' },
        { id: 6, title: 'BlaBlaBla', description: 'Description' }
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
                <div className="text-gray-500 inline-block-left ml-2 flex">
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
