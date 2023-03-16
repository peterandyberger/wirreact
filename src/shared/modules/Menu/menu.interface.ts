export type MenuItemType = {
    key: string;
    label: string;
    isTitle?: boolean;
    icon?: string;
    url?: string;
    badge?: {
        variant: string;
        text: string;
    };
    parentKey?: string;
    target?: string;
    children?: MenuItemType[];
};

const MENU_ITEMS: MenuItemType[] = [
    { key: 'navigation', label: 'Navigation', isTitle: true },
    {
        key: 'dashboards',
        label: 'Dashboards',
        isTitle: false,
        icon: 'uil-home-alt',
        children: [
            {
                key: 'ds-table',
                label: 'Table 1',
                url: '/sample/1',
                parentKey: 'dashboards',
            },
            {
                key: 'ds-table2',
                label: 'Table 2',
                url: '/sample/2',
                parentKey: 'dashboards',
            },
            {
                key: 'ds-uikit',
                label: 'UI Kit',
                url: '/ui-kit/',
                parentKey: 'dashboards',
            },

        ],
    },
    {
        key: 'apps-ecommerce',
        label: 'Ecommerce',
        isTitle: false,
        icon: 'uil-store',
        children: [
            {
                key: 'ecommerce-products',
                label: 'Products',
                url: '/apps/ecommerce/products',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-details',
                label: 'Products Details',
                url: '/apps/ecommerce/details',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-orders',
                label: 'Orders',
                url: '/apps/ecommerce/orders',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-order-details',
                label: 'Order Details',
                url: '/apps/ecommerce/order/details',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-customers',
                label: 'Customers',
                url: '/apps/ecommerce/customers',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-shopping-cart',
                label: 'Shopping Cart',
                url: '/apps/ecommerce/shopping-cart',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-checkout',
                label: 'Checkout',
                url: '/apps/ecommerce/checkout',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-sellers',
                label: 'Sellers',
                url: '/apps/ecommerce/sellers',
                parentKey: 'apps-ecommerce',
            },
        ],
    },



];

export { MENU_ITEMS };
