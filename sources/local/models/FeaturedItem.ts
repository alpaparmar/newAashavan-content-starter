import { Model } from '@stackbit/types';

export const FeaturedItemModel: Model = {
    type: 'object',
    name: 'FeaturedItem',
    label: 'Item',
    labelField: 'title',
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
        },
        {
            name: 'settings',
            label: 'Settings',
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'elementId',
            label: 'Element ID',
            group: 'settings',
            description: 'The unique ID for an HTML element, must not contain whitespace',
            default: ''
        },
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'Item Title'
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            default: ''
        },
        {
            type: 'markdown',
            name: 'text',
            label: 'Text',
            default:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.'
        },
        {
            type: 'model',
            name: 'featuredImage',
            label: 'Image',
            models: ['ImageBlock'],
            default: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/default-image.png',
                altText: 'Item image'
            }
        },
        {
            type: 'list',
            name: 'actions',
            label: 'Actions',
            items: {
                type: 'model',
                models: ['Button', 'Link']
            }
        },
        {
            type: 'style',
            name: 'styles',
            styles: {
                self: {
                    padding: ['tw0:36'],
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
                    ],
                    textAlign: ['left', 'center', 'right']
                },
                title: {
                    fontWeight: ['400', '500'],
                    fontStyle: ['normal', 'italic']
                },
                subtitle: {
                    fontWeight: ['400', '500'],
                    fontStyle: ['normal', 'italic']
                }
            },
            default: {
                self: {
                    textAlign: 'left'
                }
            }
        }
    ]
};
