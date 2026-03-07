import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://salhurry.in';

interface SEOProps {
    title: string;
    description: string;
    path?: string;
    openGraph?: Metadata['openGraph'];
    twitter?: Metadata['twitter'];
}

/**
 * Reusable utility to generate standardized SEO metadata globally.
 */
export function constructMetadata({
    title,
    description,
    path = '',
    openGraph,
    twitter,
}: SEOProps): Metadata {
    const url = `${baseUrl}${path}`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: 'SalHurry',
            locale: 'en_IN',
            type: 'website',
            images: [
                {
                    url: '/images/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            ...openGraph,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            site: '@Salhurry',
            creator: '@Salhurry',
            ...twitter,
        },
    };
}
