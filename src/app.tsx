import { Fragment } from 'preact/jsx-runtime';
import './app.css';

import { BackgroundCanvas } from '@/components/BackgroundCanvas';
import { CaseStudies } from '@/components/CaseStudies';
import { WorkFlow } from '@/components/WorkFlow';
import { ContactUs } from '@/components/ContactUs';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { Services } from '@/components/Services';

export function App() {
    return (
        <Fragment>
            <BackgroundCanvas />
            <div className="relative z-1">
                <HeroSection />
                <Services />
                <CaseStudies />
                <WorkFlow />
                <ContactUs />
                <Footer />
            </div>
        </Fragment>
    );
}
