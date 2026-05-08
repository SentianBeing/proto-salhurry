import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'servicePage',
  title: 'Service Pages',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'seo', title: 'SEO' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'schemaMarkup',
      title: 'Schema Markup (JSON-LD)',
      description: 'Paste your custom JSON-LD schema markup here. It will be added to the head of the page.',
      type: 'text',
      group: 'seo',
    }),
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'content',
      fields: [
        { name: 'tagline', title: 'Tagline (e.g. DIGITAL MARKETING)', type: 'string' },
        { name: 'headline', title: 'Main Headline (e.g. We Help Companies)', type: 'string' },
        { name: 'headlineItalic', title: 'Italic Headline Part (e.g. Grow Faster)', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Get Started' },
        {
          name: 'buttonAction',
          title: 'Button Action',
          type: 'string',
          options: {
            list: [
              { title: 'Enquiry Modal Popup', value: 'enquiry_modal' }
            ],
          },
          initialValue: 'enquiry_modal'
        },
      ],
    }),
    // Core Services Grid
    defineField({
      name: 'coreServices',
      title: 'Core Services Section',
      type: 'object',
      group: 'content',
      fields: [
        { name: 'sectionTag', title: 'Section Tag (e.g. Our Expertise)', type: 'string' },
        { name: 'sectionTitle', title: 'Section Title (e.g. Comprehensive Growth Solutions)', type: 'string' },
        {
          name: 'services',
          title: 'Services Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'description', title: 'Description', type: 'text' },
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Target', value: 'Target' },
                      { title: 'Trending Up', value: 'TrendingUp' },
                      { title: 'Bar Chart', value: 'BarChart3' },
                      { title: 'Megaphone', value: 'Megaphone' },
                      { title: 'Zap (Lightning)', value: 'Zap' },
                      { title: 'Users', value: 'Users' },
                      { title: 'Globe', value: 'Globe' },
                      { title: 'Code', value: 'Code' },
                      { title: 'Laptop', value: 'Laptop' },
                      { title: 'Smartphone', value: 'Smartphone' },
                      { title: 'PenTool', value: 'PenTool' },
                      { title: 'Search', value: 'Search' },
                    ],
                  },
                },
                { name: 'link', title: 'Link (Optional)', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),
    // Methodology Section
    defineField({
      name: 'methodology',
      title: 'Methodology Section',
      type: 'object',
      group: 'content',
      fields: [
        { name: 'sectionTag', title: 'Section Tag (e.g. Our Methodology)', type: 'string' },
        { name: 'sectionTitle', title: 'Section Title (e.g. How We Scale Your Business)', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        {
          name: 'bulletPoints',
          title: 'Bullet Points',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'image',
          title: 'Side Image',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'steps',
          title: 'Steps Grid',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'stepNumber', title: 'Step Number (e.g. 01)', type: 'string' },
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'description', title: 'Description', type: 'text' },
              ],
            },
          ],
        },
      ],
    }),
    // Why Choose Us Section
    defineField({
      name: 'whyChooseUs',
      title: 'Why Choose Us Section',
      type: 'object',
      group: 'content',
      fields: [
        { name: 'sectionTag', title: 'Section Tag (e.g. Why SalHurry?)', type: 'string' },
        { name: 'sectionTitle', title: 'Section Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'buttonText', title: 'Button Text', type: 'string' },
        {
          name: 'buttonAction',
          title: 'Button Action',
          type: 'string',
          options: {
            list: [
              { title: 'Enquiry Modal Popup', value: 'enquiry_modal' }
            ],
          },
          initialValue: 'enquiry_modal'
        },
        {
          name: 'stats',
          title: 'Stats Grid',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Zap (Lightning)', value: 'Zap' },
                      { title: 'Users', value: 'Users' },
                      { title: 'Globe', value: 'Globe' },
                      { title: 'Bar Chart', value: 'BarChart3' },
                      { title: 'Clock', value: 'Clock' },
                      { title: 'Award', value: 'Award' },
                      { title: 'Shield', value: 'Shield' },
                    ],
                  },
                },
                { name: 'label', title: 'Label (e.g. Fast Execution)', type: 'string' },
                { name: 'value', title: 'Value (e.g. 24h)', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),
    // Split Image Text Section
    defineField({
      name: 'splitSection',
      title: 'Split Image & Text Section (Before Five Pillars)',
      type: 'object',
      group: 'content',
      fields: [
        { name: 'tagline', title: 'Tagline', type: 'string' },
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'image', title: 'Side Image', type: 'image', options: { hotspot: true } },
        { name: 'buttonText', title: 'Button Text', type: 'string' },
        {
          name: 'buttonAction',
          title: 'Button Action',
          type: 'string',
          options: {
            list: [
              { title: 'Enquiry Modal Popup', value: 'enquiry_modal' }
            ],
          },
          initialValue: 'enquiry_modal'
        },
        { name: 'buttonLink', title: 'Button Link', type: 'string', hidden: ({ parent }) => parent?.buttonAction === 'enquiry_modal' }
      ]
    }),
    // Toggles
    defineField({
      name: 'showFivePillars',
      title: 'Show Five Pillars Section?',
      type: 'boolean',
      initialValue: true,
      group: 'settings',
    }),
    defineField({
      name: 'showFaq',
      title: 'Show FAQ Section?',
      type: 'boolean',
      initialValue: true,
      group: 'settings',
    }),
    defineField({
      name: 'showCta',
      title: 'Show Bottom CTA Section?',
      type: 'boolean',
      initialValue: true,
      group: 'settings',
    }),
  ],
});
