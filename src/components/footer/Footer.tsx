import { FunctionComponent } from 'react';

// application
import FooterContacts from './FooterContacts';
// import FooterLinks from './FooterLinks';
// import FooterNewsletter from './FooterNewsletter';
import ToTop from './ToTop';

// data stubs
// import theme from '../../data/theme';

const Footer: FunctionComponent = () => (
    <div className="site-footer">
        <div className="container">
            <div className="site-footer__widgets">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                        <FooterContacts />
                    </div>
                </div>
            </div>
        </div>
        <ToTop />
    </div>
);

export default Footer;
