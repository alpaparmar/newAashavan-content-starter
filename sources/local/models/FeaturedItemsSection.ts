import { Model } from '@stackbit/types';

export const FeaturedItemsSectionModel: Model = {
    type: 'object',
    name: 'FeaturedItemsSection',
    label: 'Featured items',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    extends: ['Section'],
    groups: ['sectionComponent'],
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
            default: 'Featured Items'
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            default: 'The section subtitle'
        },
        {
            type: 'list',
            name: 'items',
            label: 'Items',
            items: {
                type: 'model',
                models: ['FeaturedItem']
            },
            default: [
                {
                    type: 'FeaturedItem',
                    title: 'Item Title',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.',
                    featuredImage: {
                        type: 'ImageBlock',
                        url: 'https://assets.stackbit.com/components/images/default/default-image.png',
                        altText: 'Item image'
                    },
                    styles: {
                        title: {
                            textAlign: 'left'
                        },
                        subtitle: {
                            fontWeight: 400,
                            fontStyle: 'normal',
                            textAlign: 'left'
                        },
                        text: {
                            textAlign: 'left'
                        },
                        actions: {
                            justifyContent: 'flex-start'
                        }
                    }
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
                    label: 'Apply Now',
                    url: '#',
                    style: 'primary'
                },
                {
                    type: 'Button',
                    label: 'Learn More',
                    url: '#',
                    style: 'secondary'
                }
            ]
        },
        {
            type: 'number',
            name: 'columns',
            label: 'Items per row',
            group: 'styles',
            controlType: 'slider',
            min: 1,
            max: 4,
            step: 1,
            default: 3
        },
        {
            type: 'boolean',
            name: 'enableHover',
            label: 'Enable hover',
            default: false
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
                    fontWeight: ['400', '500'],
                    fontStyle: ['normal', 'italic'],
                    textAlign: ['left', 'center', 'right'],
                    textDecoration: ['underline']
                },
                subtitle: {
                    fontWeight: ['400', '500'],
                    fontStyle: ['normal', 'italic'],
                    textAlign: ['left', 'center', 'right'],
                    textDecoration: ['underline']
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
