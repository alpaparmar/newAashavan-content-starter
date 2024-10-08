import { Model } from '@stackbit/types';

export const PostFeedSectionModel: Model = {
    type: 'object',
    name: 'PostFeedSection',
    label: 'Post feed',
    labelField: 'title',
    extends: ['Section'],
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles'
        },
        {
            name: 'settings',
            label: 'Settings'
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'Posts'
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            default: 'Blog posts'
        },
        {
            type: 'boolean',
            name: 'showDate',
            label: 'Show post date',
            default: false
        },
        {
            type: 'boolean',
            name: 'showAuthor',
            label: 'Show post author',
            description: 'Show the author of the post',
            default: false
        },
        {
            type: 'boolean',
            name: 'showExcerpt',
            label: 'Show post excerpt',
            default: false
        },
        {
            type: 'enum',
            name: 'variant',
            group: 'styles',
            label: 'Arrangement',
            default: 'variant-a',
            options: [
                {
                    label: 'Three columns grid',
                    value: 'variant-a'
                },
                {
                    label: 'Two columns grid',
                    value: 'variant-b'
                },
                {
                    label: 'Three columns cards grid',
                    value: 'variant-c'
                }
            ]
        },
        {
            type: 'list',
            name: 'actions',
            label: 'Actions',
            items: {
                type: 'model',
                models: ['Button', 'Link']
            },
            default: [
                {
                    type: 'Button',
                    label: 'View all',
                    url: '/',
                    style: 'primary'
                }
            ]
        },
        {
            type: 'style',
            name: 'styles',
            styles: {
                self: {
                    height: ['auto', 'screen'],
                    width: ['narrow', 'wide', 'full'],
                    margin: ['tw0:96'],
                    padding: ['tw0:96'],
                    justifyContent: ['flex-start', 'flex-end', 'center'],
                    borderRadius: '*',
                    borderWidth: ['0:8'],
                    borderStyle: '*',
                    borderColor: [
                        {
                            value: 'border-primary',
                            label: 'Primary color',
                            color: '$primary'
                        },
                        {
                            value: 'border-secondary',
                            label: 'Secondary color',
                            color: '$secondary'
                        },
                        {
                            value: 'border-dark',
                            label: 'Dark color',
                            color: '$dark'
                        },
                        {
                            value: 'border-complementary',
                            label: 'Complementary color',
                            color: '$complementary'
                        }
                    ]
                },
                title: {
                    fontWeight: ['400', '700'],
                    fontStyle: ['normal', 'italic'],
                    textAlign: ['left', 'center', 'right']
                },
                subtitle: {
                    fontWeight: ['400', '700'],
                    fontStyle: ['normal', 'italic'],
                    textAlign: ['left', 'center', 'right']
                },
                actions: {
                    justifyContent: ['flex-start', 'flex-end', 'center']
                }
            },
            default: {
                self: {
                    height: 'auto',
                    width: 'wide',
                    margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
                    padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
                    justifyContent: 'center',
                    borderRadius: 'none',
                    borderWidth: 0,
                    borderStyle: 'none',
                    borderColor: 'border-dark'
                },
                title: {
                    textAlign: 'center'
                },
                subtitle: {
                    fontWeight: 400,
                    fontStyle: 'normal',
                    textAlign: 'center'
                },
                actions: {
                    justifyContent: 'center'
                }
            }
        }
    ]
};
