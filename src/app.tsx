import { Fragment } from 'preact/jsx-runtime';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './app.css';

export function App() {
    return (
        <Fragment>
            <ContactUs />
            <Footer />
        </Fragment>
    );
}
