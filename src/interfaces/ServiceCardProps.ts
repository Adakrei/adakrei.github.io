export interface ServiceCardProps {
    title: string;
    variant?: 'light' | 'dark' | 'green';
    fullWidth?: boolean;
    serviceNumber?: number;
    children: React.ReactNode;
}
