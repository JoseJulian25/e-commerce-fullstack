import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import ProductListPage from './pages/ProductsListPage/ProductListPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <App/>
            },
            {
                path: 'women',
                element: <ProductListPage categoryType={'WOMEN'}/>
            },
            {
                path: 'men',
                element: <ProductListPage categoryType={'MEN'}/>
            }
        ]
    }
]);

export default router;