import { CaseCard } from './CaseCard';

import { FunctionComponent } from 'preact';

export const CaseStudy: FunctionComponent = () => {
    const cases = [
        {
            id: '1',
            position: 'left' as const,
            content: 'We utilize the blablablablablablablablablabla blablablablablablablablablablabla bla'
        },
        {
            id: '2',
            position: 'right' as const,
            content: 'We utilize the blablablablablablablablablabla blablablablablablablablablablabla bla'
        },
        {
            id: '3',
            position: 'left' as const,
            content: 'We utilize the blablablablablablablablablabla blablablablablablablablablablabla bla'
        }
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 py-16" id={'cases'}>
            <h2 className="text-4xl md:text-6xl text-white py-3  text-left">Cases</h2>
            <div className="space-y-8">
                {cases.map((caseItem) => (
                    <CaseCard key={caseItem.id} {...caseItem} />
                ))}
            </div>
            <div className="mt-6 bg-gray-800 rounded-xl p-8 flex items-center justify-between">
                <div className="space-y-4">
                    <h3 className="text-white font-medium text-left">Need A Full Description?</h3>
                    <p className="text-white text-left">
                        Some
                        <br />
                        words
                        <br />
                        around 3 lines
                    </p>
                    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                        Get our full description
                    </button>
                </div>
            </div>
        </section>
    );
};
