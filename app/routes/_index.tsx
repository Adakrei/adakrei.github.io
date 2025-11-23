import { Fragment } from 'react';
import { BackgroundCanvas } from '@/components/BackgroundCanvas';
import { HeroSection } from '@/components/HeroSection';
import { Services } from '@/components/Services';
import { CaseStudy } from '@/components/CaseStudy';
import { WorkFlow } from '@/components/WorkFlow';
import { ContactUs } from '@/components/ContactUs';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

export default function IndexPage() {
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
