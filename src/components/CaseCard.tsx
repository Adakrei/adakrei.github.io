import type { CaseStudyProps } from '@/interfaces/CaseStudyProps';
import { FunctionComponent } from 'preact';

export const CaseCard: FunctionComponent<CaseStudyProps> = ({
    position,
    title,
    description,
    tags,
    imageUrl
}) => {
    return (
        <div
            className={`bg-gray-800/50 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row ${
                position === 'right' ? 'md:flex-row-reverse' : ''
            }`}>
            {/* Image Placeholder */}
            <div className="w-full md:w-1/2 h-64 bg-gray-700/50 flex items-center justify-center">
                {imageUrl ? (
                    <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <span className="text-gray-400">Image Placeholder</span>
                )}
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-300 text-base mb-5">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-sky-500/20 text-sky-300 text-sm font-medium px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
