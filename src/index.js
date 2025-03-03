import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { LazyAbout } from "./pages/about/About.lazy";
import { Suspense } from "react";
import { LazyShop } from "@/pages/shop/Shop.lazy";

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found.');
}

const container = createRoot(root);

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={'Loading...'}><LazyShop /></Suspense>
            },
        ],
    },
]);

container.render(<RouterProvider router={router} />)
