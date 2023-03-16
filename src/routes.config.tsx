import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Theme from './shared/modules/theme/theme';
import ErrorPage from './shared/modules/error-page/error-page';
import Sample from './public/sample/sample';
import UiKitPage from './public/ui-kit/ui-kit';
import { basicLoader, uiKitLoader } from './shared/helpers/loaders';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Theme/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Sample/>
            },
            {
                path: 'sample/',
                element: <Sample/>
            },
            {
                path: 'sample/:sampleId',
                element: <Sample/>,
                loader: basicLoader
            },
            {
                path: 'ui-kit/',
                element: <UiKitPage isVisible={true}/>
            },
            {
                path: 'ui-kit/:userId',
                element: <UiKitPage isVisible={true}/>,
                loader: uiKitLoader,
                errorElement: <div>Not existing userId in DB</div>
            },
        ]
    },
];

export const routeConfig = createBrowserRouter(routes, {basename: '/' + import.meta.env.VITE_BASE_URL});
