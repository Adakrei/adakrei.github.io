import type { CaseStudyProps } from '@/interfaces/CaseStudyProps';
import { FunctionComponent } from 'preact';

export const CaseCard: FunctionComponent<CaseStudyProps> = ({ title, description, tags, imageUrl }) => {
    return (
        // Overhauled "Modern & Techy" Card Container
        <div
            className="bg-surface/75 backdrop-blur-lg rounded-lg border border-white/30 overflow-hidden
                       transform transition-all duration-300 ease-in-out
                       hover:border-primary/70 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:-translate-y-2">
            {/* Image Section */}
            <div className="w-full h-48 bg-background flex items-center justify-center overflow-hidden">
                {imageUrl ? (
                    <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <span className="text-text-secondary">Image Placeholder</span>
                )}
            </div>

            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
                <p className="text-text-secondary text-base mb-4 h-20 overflow-hidden">{description}</p>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="bg-gray-200 text-black text-xs font-medium px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
