import { FunctionComponent } from 'preact';
import type { CaseStudyProps } from '@/interfaces/CaseStudyProps';

export const CaseStudy: FunctionComponent<CaseStudyProps> = ({ id, position, content, imageUrl }) => {
    const CaseNumber = () => (
        <div className="bg-slate-900 text-white p-4 rounded-lg inline-block">
            <h2 className="text-xl">Case {id}</h2>
        </div>
    );

    const CaseContent = () => (
        <div className={`w-1/3 text-white ${position === 'left' ? 'text-right' : ''}`}>{content}</div>
    );

    const CaseImage = () => (
        <div className="bg-gray-300 w-48 h-48">
            {imageUrl && <img src={imageUrl} alt={`Case study ${id}`} className="w-full h-full object-cover" />}
        </div>
    );

    return (
        <div className="flex items-center w-full py-16">
            {position === 'left' ? (
                <>
                    <div className="w-1/3 flex justify-start">
                        <CaseNumber />
                    </div>
                    <CaseContent />
                    <div className="w-1/3 flex justify-end">
                        <CaseImage />
                    </div>
                </>
            ) : (
                <>
                    <div className="w-1/3 flex justify-start">
                        <CaseImage />
                    </div>
                    <CaseContent />
                    <div className="w-1/3 flex justify-end">
                        <CaseNumber />
                    </div>
                </>
            )}
        </div>
    );
};
