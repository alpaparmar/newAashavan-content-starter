import { Model } from '@stackbit/types';

export const SeoModel: Model = {
    type: 'object',
    name: 'Seo',
    label: 'SEO',
    fieldGroups: [
        {
            name: 'seo',
            label: 'SEO'
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'metaTitle',
            label: 'Title meta tag (overrides title)',
            description: 'By default, the <title> tag for this page is determined by the title field (in the Content group). You can override the tag value here.',
            default: null,
            group: 'seo'
        },
        {
            type: 'string',
            name: 'metaDescription',
            label: 'Description meta tag',
            description: 'The description tag is used by search engines and for social sharing. By default, the tag is not set.',
            default: null,
            group: 'seo'
        },
        {
            type: 'boolean',
            name: 'addTitleSuffix',
            label: 'Add title suffix',
            description: 'If enabled, the title suffix defined in the site configuration is appended to the title tag of this page.',
            default: true,
            group: 'seo'
        },
        {
            type: 'image',
            name: 'socialImage',
            label: 'Image for social sharing',
            description: 'Set the image used when sharing this page on social networks (e.g. Facebook, Twitter). If not set, the default social image defined in the site configuration is used.',
            default: null,
            group: 'seo'
        },
        {
            type: 'list',
            name: 'metaTags',
            label: 'Additional meta tags',
            description: 'To add or override any meta tag for this page, add entries to this list. Entries defined here take precedence over any other defaults.',
            group: 'seo',
            items: {
                type: 'model',
                models: ['MetaTag']
            },
        }
    ]
};