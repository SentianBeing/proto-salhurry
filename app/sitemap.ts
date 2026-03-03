import { MetadataRoute } from 'next';
import { sanityClient } from '@/lib/sanity.client';
import { allBlogsQuery, allCaseStudiesQuery } from '@/lib/sanity.queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://salhurry.in';

    const routes = [
        '',
        '/about',
        '/blog',
        '/careers',
        '/case-studies',
        '/services/digital-marketing',
        '/services/web-development',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const [blogs, caseStudies] = await Promise.all([
        sanityClient.fetch(allBlogsQuery),
        sanityClient.fetch(allCaseStudiesQuery)
    ]);

    const blogRoutes = blogs.map((blog: any) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: blog.publishedAt ? new Date(blog.publishedAt) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const caseStudyRoutes = caseStudies.map((cs: any) => ({
        url: `${baseUrl}/case-studies/${cs.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...blogRoutes, ...caseStudyRoutes];
}
