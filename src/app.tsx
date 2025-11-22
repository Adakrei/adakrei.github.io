import { Fragment } from 'preact/jsx-runtime';
import './app.css';

import { BackgroundCanvas } from '@/components/BackgroundCanvas';
import { HeroSection } from '@/components/HeroSection';
import { Services } from '@/components/Services';
import { CaseStudy } from '@/components/CaseStudy';
import { WorkFlow } from '@/components/WorkFlow';
import { ContactUs } from '@/components/ContactUs';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

export function App() {
    return (
        <Fragment>
            <BackgroundCanvas />
            <div className="relative z-1 bg-background text-text-primary">
                <HeroSection />
                <Services />
                <CaseStudy />
                <WorkFlow />
                <ContactUs />
                <Footer />
                <ScrollToTop />
            </div>
        </Fragment>
    );
}
