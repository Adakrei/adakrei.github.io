import type { WorkflowItemProps } from '@/interfaces/WorkFlowItemProps';

import { ComponentType } from 'preact';

export const WorkFlowItem: ComponentType<WorkflowItemProps> = ({ step, isOpen, isActive, onToggle }) => {
    return (
        <div
            className={`rounded-2xl overflow-hidden transition-all duration-300 mb-4
          ${isActive ? 'bg-[#3C4FA1]' : 'bg-[#1E2351]'}`}>
            <button onClick={onToggle} className="w-full flex items-center justify-between p-6 text-left">
                <div className="flex items-center gap-4">
                    <span className="text-2xl font-medium text-white">{String(step.id).padStart(2, '0')}</span>
                    <span className="text-lg text-white">{step.title}</span>
                </div>
                <div className="transform transition-transform duration-300">
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M18 12H6" />
                        </svg>
                    )}
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300
            ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
                <div className="p-6 pt-0">
                    <p className="text-white text-justify">{step.description}</p>
                </div>
            </div>
        </div>
    );
};
