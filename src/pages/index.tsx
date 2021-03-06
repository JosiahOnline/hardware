// third-party
import { GetServerSideProps } from 'next';

// application
import HomePageOne, { InitData } from '../components/home/HomePageOne';
import shopApi from '../api/shop';

export interface PageProps {
    initData?: InitData;
}

// noinspection JSUnusedGlobalSymbols
export const getServerSideProps: GetServerSideProps<PageProps> = async () => ({
    props: {
        initData: {
            featuredProducts: await shopApi.getPopularProducts({ limit: 8 }),
            bestsellers: await shopApi.getPopularProducts({ limit: 7 }),
            latestProducts: await shopApi.getLatestProducts({ limit: 8 }),
            productColumns: [
                {
                    title: 'Top Rated Products',
                    products: await shopApi.getTopRatedProducts({ limit: 3 }),
                },
                {
                    title: 'Special Offers',
                    products: await shopApi.getDiscountedProducts({ limit: 3 }),
                },
                {
                    title: 'Bestsellers',
                    products: await shopApi.getPopularProducts({ limit: 3 }),
                },
            ],
        },
    },
});

function Page(props: PageProps) {
    const { initData } = props;

    return <HomePageOne initData={initData} />;
}

export default Page;
