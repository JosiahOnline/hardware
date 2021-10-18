import { INav } from '../interfaces/menus/nav';

const dataHeaderDepartments: INav = [
    {
        title: 'Processing Equipments & Replacement Parts',
        url: '',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'xl',
                image: {
                    ltr: '/images/megamenu/examples/megamenu-1-ltr.jpg',
                    rtl: '/images/megamenu/examples/megamenu-1-rtl.jpg',
                },
                columns: [
                    {
                        size: 6,
                        links: [
                            { title: 'Hydraulic Winches', url: '' },
                            { title: 'Transfer Carriage', url: '' },
                            { title: 'Tippler', url: '' },
                            { title: 'Screw Press & Digesters', url: '' },
                            { title: 'Vibrating Screen, Brush Strainer', url: '' },
                            { title: 'Desander / Precleaner', url: '' },
                            { title: 'Sludge Centrifuges', url: '' },
                            { title: 'Oil Vacuum Dryer', url: '' },
                            { title: 'Bunch Crushers', url: '' },
                            { title: 'Vibratory Feeders & Magnets', url: '' },
                            { title: 'Nut Crackers, Ripple Mills', url: '' },
                            { title: 'Industria Blowers, Fans & Heaters', url: '' },
                            { title: 'Gear Reducers & Electric Motors', url: '' },
                            { title: 'Firebricks, Mortar & Insulation Materials', url: '' },
                        ],
                    },
                ],
            },
        },
    },
    {
        title: 'Valves',
        url: '',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'lg',
                image: {
                    ltr: '/images/megamenu/examples/megamenu-2-ltr.jpg',
                    rtl: '/images/megamenu/examples/megamenu-2-rtl.jpg',
                },
                columns: [
                    {
                        size: 4,
                        links: [
                            { title: 'Gate', url: '' },
                            { title: 'Globe', url: '' },
                            { title: 'Ball', url: '' },
                            { title: 'Check', url: '' },
                            { title: 'Butterfly & Solenoid', url: '' },
                        ],
                    },
                ],
            },
        },
    },
    {
        title: 'Industrial Instrumentation',
        url: '',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'nl',
                image: {
                    ltr: '/images/megamenu/examples/megamenu-3-ltr.jpg',
                    rtl: '/images/megamenu/examples/megamenu-3-rtl.jpg',
                },
                columns: [
                    {
                        size: 6,
                        links: [
                            { title: 'Sensors', url: '' },
                            { title: 'Gauges & Controls', url: '' },
                        ],
                    },
                ],
            },
        },
    },
    {
        title: 'Industrial Gasket & Packings',
        url: '',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Gasket', url: '' },
                { title: 'Packings', url: '' },
            ],
        },
    },
    {
        title: 'Stainless Steel & API Pipes & Fittings',
        url: '',
        submenu: {
            type: 'menu',
            menu: [
                // {
                //     title: 'Soldering Equipment',
                //     url: '',
                //     children: [
                //         { title: 'Soldering Station', url: '' },
                //         { title: 'Soldering Dryers', url: '' },
                //         { title: 'Gas Soldering Iron', url: '' },
                //         { title: 'Electric Soldering Iron', url: '' },
                //     ],
                // },
                { title: 'Pipes', url: '' },
                { title: 'Fittings', url: '' },
            ],
        },
    },
    { title: 'Alloy Castings', url: '' },
    { title: 'Boiler Parts & Instruments', url: '' },
    { title: 'Self-Lubricating Tubes & Rodes/Bushing', url: '' },
    { title: 'Auto Control Systems', url: '' },
    { title: 'Hydraulic Systems', url: '' },
];

export default dataHeaderDepartments;
