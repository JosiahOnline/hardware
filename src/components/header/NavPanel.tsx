// application
import AppLink from '../shared/AppLink';
import Departments from './Departments';
import LogoSmallSvg from '../../svg/homepage/logomobileV2.svg';
import NavLinks from './NavLinks';

export type NavPanelLayout = 'default' | 'compact';

export interface NavPanelProps {
    layout?: NavPanelLayout;
}

function NavPanel(props: NavPanelProps) {
    const { layout = 'default' } = props;

    let logo = null;
    let departments = null;

    if (layout === 'compact') {
        logo = (
            <div className="nav-panel__logo">
                <AppLink href="/"><LogoSmallSvg /></AppLink>
            </div>
        );
    }

    if (layout === 'default') {
        departments = (
            <div className="nav-panel__departments">
                <Departments />
            </div>
        );
    }

    return (
        <div className="nav-panel">
            <div className="nav-panel__container container">
                <div className="nav-panel__row">
                    {logo}
                    {departments}

                    <div className="nav-panel__nav-links nav-links">
                        <NavLinks />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavPanel;
