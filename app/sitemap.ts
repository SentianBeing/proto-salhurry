import { MetadataRoute } from 'next';
import { sanityClient } from '@/lib/sanity.client';
import { allBlogsQuery, allCaseStudiesQuery, allServicePagesQuery } from '@/lib/sanity.queries';
import { staticRoutes } from '@/lib/routes';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.salhurry.in';

    const routes = staticRoutes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route.path === '/' ? 1 : 0.8,
    }));

    const [blogs, caseStudies, servicePages] = await Promise.all([
        sanityClient.fetch(allBlogsQuery).catch(() => []),
        sanityClient.fetch(allCaseStudiesQuery).catch(() => []),
        sanityClient.fetch(allServicePagesQuery).catch(() => [])
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

    const serviceRoutes = servicePages.map((service: any) => ({
        url: `${baseUrl}/service/${service.slug}`,
        lastModified: service._updatedAt ? new Date(service._updatedAt) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...blogRoutes, ...caseStudyRoutes, ...serviceRoutes];
}
