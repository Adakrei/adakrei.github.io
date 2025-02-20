import type { WorkFlowStep } from './WorkFlowStep';
export interface WorkflowItemProps {
    step: WorkFlowStep;
    isOpen: boolean;
    isActive: boolean;
    onToggle: () => void;
}
