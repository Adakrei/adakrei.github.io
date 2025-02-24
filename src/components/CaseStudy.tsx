import type { CaseStudyProps } from '@/interfaces/CaseStudyProps';

import { FunctionComponent, Fragment } from 'preact';

export const CaseStudy: FunctionComponent<CaseStudyProps> = ({ id, position, content, imageUrl }) => {
    const CaseNumber = () => (
        <div className="bg-[#1E2351] text-white p-4 rounded-lg inline-block h-1/3">
            <h2 className="text-xl">Case {id}</h2>
        </div>
    );

    const CaseContent = () => <div className={`w-1/3 text-white `}>{content}</div>;

    const CaseImage = () => (
        <div className="bg-gray-300 w-48 h-48">
            {imageUrl && <img src={imageUrl} alt={`Case study ${id}`} className="w-full h-full object-cover" />}
        </div>
    );

    return (
        <div className="flex items-top w-full py-16">
            {position === 'left' ? (
                <Fragment>
                    <div className="w-1/3 flex justify-start">
                        <CaseNumber />
                    </div>
                    <CaseContent />
                    <div className="w-1/3 flex justify-end">
                        <CaseImage />
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <div className="w-1/3 flex justify-start">
                        <CaseImage />
                    </div>
                    <CaseContent />
                    <div className="w-1/3 flex justify-end">
                        <CaseNumber />
                    </div>
                </Fragment>
            )}
        </div>
    );
};
