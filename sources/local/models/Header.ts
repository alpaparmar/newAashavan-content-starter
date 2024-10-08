import { Model } from '@stackbit/types';

export const HeaderModel: Model = {
    type: 'object',
    name: 'Header',
    label: 'Header',
    labelField: 'title',
    readOnly: true,
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
            type: 'enum',
            name: 'headerVariant',
            group: 'styles',
            label: 'Header arrangement',
            options: [
                {
                    label: 'Header with logo and primary links on the left',
                    value: 'variant-a'
                },
                {
                    label: 'Header with logo on the left and primary links centered',
                    value: 'variant-b'
                },
                {
                    label: 'Header with logo on the left and primary links on the right',
                    value: 'variant-c'
                },
                {
                    label: 'Header with logo centered and primary links on the left',
                    value: 'variant-d'
                },
                {
                    label: 'Header with logo centered and primary links centered',
                    value: 'variant-e'
                }
            ],
            default: 'variant-c'
        },
        {
            type: 'enum',
            name: 'primaryColors',
            label: 'Primary colors',
            group: 'styles',
            controlType: 'palette',
            options: [
                {
                    label: 'Colors A',
                    value: 'colors-a',
                    textColor: '$onLight',
                    backgroundColor: '$light',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors B',
                    value: 'colors-b',
                    textColor: '$primary',
                    backgroundColor: '$light',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors C',
                    value: 'colors-c',
                    textColor: '$onDark',
                    backgroundColor: '$dark',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors D',
                    value: 'colors-d',
                    textColor: '$primary',
                    backgroundColor: '$dark',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors E',
                    value: 'colors-e',
                    textColor: '$onPrimary',
                    backgroundColor: '$primary',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors F',
                    value: 'colors-f',
                    textColor: '$onSecondary',
                    backgroundColor: '$secondary',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors G',
                    value: 'colors-g',
                    textColor: '$primary',
                    backgroundColor: '$secondary',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors H',
                    value: 'colors-h',
                    textColor: '$onComplementary',
                    backgroundColor: '$complementary',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors I',
                    value: 'colors-i',
                    textColor: '$onComplementary',
                    backgroundColor: '$main',
                    borderColor: '#ececec'
                }
            ],
            default: 'colors-a'
        },
        {
            type: 'enum',
            name: 'secondaryColors',
            label: 'Secondary colors (mobile menu)',
            group: 'styles',
            controlType: 'palette',
            options: [
                {
                    label: 'Colors A',
                    value: 'colors-a',
                    textColor: '$onLight',
                    backgroundColor: '$light',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors B',
                    value: 'colors-b',
                    textColor: '$primary',
                    backgroundColor: '$light',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors C',
                    value: 'colors-c',
                    textColor: '$onDark',
                    backgroundColor: '$dark',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors D',
                    value: 'colors-d',
                    textColor: '$primary',
                    backgroundColor: '$dark',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors E',
                    value: 'colors-e',
                    textColor: '$onPrimary',
                    backgroundColor: '$primary',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors F',
                    value: 'colors-f',
                    textColor: '$onSecondary',
                    backgroundColor: '$secondary',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors G',
                    value: 'colors-g',
                    textColor: '$primary',
                    backgroundColor: '$secondary',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors H',
                    value: 'colors-h',
                    textColor: '$onComplementary',
                    backgroundColor: '$complementary',
                    borderColor: '#ececec'
                }
            ],
            default: 'colors-a'
        },
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'Your Brand'
        },
        {
            type: 'boolean',
            name: 'isTitleVisible',
            label: 'Display title',
            default: true
        },
        {
            type: 'model',
            name: 'logo',
            label: 'Logo',
            models: ['ImageBlock'],
            default: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/default-image.png',
                altText: 'Your logo image',
                caption: ''
            }
        },
        {
            type: 'list',
            name: 'primaryLinks',
            label: 'Primary navigation links',
            items: {
                type: 'model',
                models: ['Button', 'Link']
            },
            default: [
                {
                    type: 'Link',
                    label: 'Home',
                    url: '/',
                    altText: 'Home'
                },
                {
                    type: 'Link',
                    label: 'Blog',
                    url: '/',
                    altText: 'Blog'
                }
            ]
        },
        {
            type: 'list',
            name: 'secondaryLinks',
            label: 'Secondary links',
            items: {
                type: 'model',
                models: ['Button', 'Link']
            },
            default: [
                {
                    type: 'Button',
                    label: 'Sign up',
                    altText: 'Sign up',
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
                    width: ['narrow', 'wide', 'full'],
                    padding: ['tw0:36']
                }
            },
            default: {
                self: {
                    width: 'narrow',
                    padding: ['pt-5', 'pb-5', 'pl-4', 'pr-4']
                }
            }
        }
    ]
};
