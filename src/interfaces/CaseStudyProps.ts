export interface CaseStudyProps {
    id: string;
    position: 'left' | 'right';
    title: string;
    description: string;
    tags: string[];
    imageUrl?: string;
}
