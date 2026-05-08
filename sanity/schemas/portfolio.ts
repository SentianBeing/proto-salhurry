import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'portfolio',
  title: 'Portfolio / Projects',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'features', title: 'Features & Impact' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'services',
      title: 'Services Provided (Comma separated)',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'tags',
      title: 'Tags (For Filtering)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Digital Marketing', value: 'Digital Marketing' },
          { title: 'Web Development', value: 'Web Development' },
          { title: 'UI/UX', value: 'UI/UX' },
          { title: 'E-Com', value: 'E-Com' },
          { title: 'Sales', value: 'Sales' },
          { title: 'Software Development', value: 'Software Development' },
        ],
      },
      group: 'content',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image (Grid View)',
      type: 'image',
      options: { hotspot: true },
      group: 'content',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image (Inner Page)',
      type: 'image',
      options: { hotspot: true },
      group: 'content',
    }),
    defineField({
      name: 'galleryImages',
      title: 'Additional Gallery Images (2-3 images)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      group: 'content',
    }),
    defineField({
      name: 'liveLink',
      title: 'Live Link (Optional)',
      type: 'url',
      group: 'content',
    }),
    
    // The Context Section
    defineField({
      name: 'contextTitle',
      title: 'Context Section Title',
      type: 'string',
      initialValue: 'The Context',
      group: 'content',
    }),
    defineField({
      name: 'contextDescription',
      title: 'Context Description',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    }),

    // Features Section
    defineField({
      name: 'featuresSectionTitle',
      title: 'Features Section Title',
      type: 'string',
      initialValue: 'An Ecosystem Built for Scale',
      group: 'features',
    }),
    defineField({
      name: 'featuresDescription',
      title: 'Features Description',
      type: 'text',
      group: 'features',
    }),
    defineField({
      name: 'features',
      title: 'Feature Cards',
      type: 'array',
      group: 'features',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { 
              name: 'icon', 
              title: 'Icon Name', 
              type: 'string',
              options: {
                list: [
                  'Settings', 'Users', 'Activity', 'Briefcase', 'CreditCard', 'BarChart3', 'Target', 'Megaphone', 'Zap'
                ]
              }
            },
            {
              name: 'colorTheme',
              title: 'Color Theme',
              type: 'string',
              options: {
                list: [
                  { title: 'Dark (Black/Lime)', value: 'dark' },
                  { title: 'Light (White/Black)', value: 'light' },
                  { title: 'Accent (Lime/Black)', value: 'accent' },
                ]
              },
              initialValue: 'dark'
            }
          ]
        }
      ]
    }),

    // Impact Section
    defineField({
      name: 'impactTitle',
      title: 'Impact Section Title',
      type: 'string',
      initialValue: 'Total Operational Clarity.',
      group: 'features',
    }),
    defineField({
      name: 'impactDescription',
      title: 'Impact Description',
      type: 'text',
      group: 'features',
    }),
    defineField({
      name: 'impactStats',
      title: 'Impact Stats (Up to 3)',
      type: 'array',
      group: 'features',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value (e.g. 100%)', type: 'string' },
            { name: 'label', title: 'Label (e.g. Cloud Based)', type: 'string' },
          ]
        }
      ]
    }),

    // Custom CTA Section
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      group: 'features',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      group: 'features',
    }),

    // SEO
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'seo',
    }),
    defineField({
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image',
      group: 'seo',
    }),
  ],
});
