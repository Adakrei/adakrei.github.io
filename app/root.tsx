import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import type { Route } from './+types/root';
// Import the CSS file
import './app.css';

export const links: Route.LinksFunction = () => [
    { rel: 'dns-prefetch', href: 'https://adakrei.com' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
    { rel: 'alternate', href: 'https://adakrei.com', hrefLang: 'zh-Hant' }
];

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Adakrei - Transform Your Imagination into Reality' },
        {
            name: 'description',
            content:
                'We transform your complex requirements into elegant, high-performance software solutions. Professional software development and implementation services.'
        },
        {
            name: 'keywords',
            content: 'software development, web development, custom software, high-performance solutions, Adakrei'
        },
        { name: 'author', content: 'Adakrei Ltd.' },
        { name: 'theme-color', content: '#000000' },
        // Open Graph / Facebook
        { property: 'og:title', content: 'Adakrei - Your Imagination, Our Implementation' },
        {
            property: 'og:description',
            content:
                'Transform your complex requirements into elegant, high-performance software solutions with Adakrei.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://adakrei.com' },
        { property: 'og:image', content: '/assets/og-image.png' },
        { property: 'og:locale', content: 'en_US' }
    ];
}

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body className="bg-gray-100">
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = 'Oops!';
    let details = 'An unexpected error occurred.';
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? '404' : 'Error';
        details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    );
}
