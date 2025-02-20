import { Fragment } from 'preact/jsx-runtime';
import { CaseStudies } from '@/components/CaseStudies';
import { WorkFlow } from '@/components/WorkFlow';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import './app.css';

export function App() {
    return (
        <Fragment>
            <CaseStudies />
            <WorkFlow />
            <ContactUs />
            <Footer />
        </Fragment>
    );
}
