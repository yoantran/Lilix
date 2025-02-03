import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/index.jsx";
import Home from "./home/index.jsx";
import Gallery from "./gallery/index.jsx";
import Lore from "./lore/index.jsx";
import Profile from "./profile/index.jsx";
import Relationship from "./relationship/index.jsx";
import NotFoundPage from "./not-found/index.jsx";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "home", element: <Home /> },
    {
        path: '/',
        element: <Layout />,
        children: [
            // { index: true, element: <Home /> },
            { path: "gallery", element: <Gallery />
                // , children: [
                //     { index: true, element: <GalleryOverview /> },
                //     { path: 'albums', element: <GalleryAlbums /> },
                //     { path: 'photos', element: <GalleryPhotos /> },
                // ]
            },
            { path: 'lore', element: <Lore /> },
            { path: 'profile', element: <Profile />
                // , children: [
                //     { index: true, element: <ProfileOverview /> },
                //     { path: 'settings', element: <ProfileSettings /> },
                //     { path: 'history', element: <ProfileHistory /> },
                // ]
            },
            { path: 'relationship', element: <Relationship /> },
        ],
    },
    { path: '*', element: <NotFoundPage /> },
]);