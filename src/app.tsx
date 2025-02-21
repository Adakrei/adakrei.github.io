import { Fragment } from 'preact/jsx-runtime';
import { CaseStudies } from '@/components/CaseStudies';
import { WorkFlow } from '@/components/WorkFlow';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import './app.css';

import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services';

export function App() {
    return (
        <Fragment>
            <HeroSection />
            <Services />
            <CaseStudies />
            <WorkFlow />
            <ContactUs />
            <Footer />
        </Fragment>
    );
}
