import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'comment',
            title: 'Comment',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'post',
            title: 'Post',
            type: 'reference',
            to: [{ type: 'blog' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            description: 'Comments won\'t show on the site without approval.',
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'comment',
            approved: 'approved',
        },
        prepare({ title, subtitle, approved }) {
            return {
                title: `${title} ${approved ? '✅' : '🔴'}`,
                subtitle,
            };
        },
    },
});
