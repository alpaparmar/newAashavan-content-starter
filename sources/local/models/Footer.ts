import { Model } from '@stackbit/types';

export const FooterModel: Model = {
    type: 'object',
    name: 'Footer',
    label: 'Footer',
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
            name: 'colors',
            label: 'Colors',
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
                    textColor: '$primary',
                    backgroundColor: '$secondary',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors G',
                    value: 'colors-g',
                    textColor: '$onComplementary',
                    backgroundColor: '$complementary',
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
            default: 'colors-f'
        },
        {
            type: 'model',
            name: 'logo',
            label: 'Logo',
            models: ['ImageBlock'],
            default: {
                default: {
                    type: 'ImageBlock',
                    url: 'https://assets.stackbit.com/components/images/default/default-image.png',
                    altText: 'Your logo image',
                    caption: ''
                }
            }
        },
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'Your Brand'
        },
        {
            type: 'markdown',
            name: 'text',
            label: 'Text',
            default: 'A description of your brand'
        },
        {
            type: 'model',
            name: 'contacts',
            label: 'Contacts',
            models: ['ContactBlock'],
            default: {
                phoneNumber: '850-123-5021',
                phoneAltText: 'Call us',
                email: 'john@doe.com',
                emailAltText: 'Email us'
            }
        },
        {
            type: 'markdown',
            name: 'copyrightText',
            label: 'Copyright text',
            default: 'Copyright text'
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
                    label: 'Projects',
                    url: '/',
                    altText: 'Projects'
                },
                {
                    type: 'Link',
                    label: 'Documentation',
                    url: '/',
                    altText: 'Documentation'
                }
            ]
        },
        {
            type: 'list',
            name: 'socialLinks',
            label: 'Social links',
            items: {
                type: 'model',
                models: ['Social']
            },
            default: [
                {
                    type: 'facebook',
                    icon: 'facebook',
                    label: '',
                    altText: 'facebook',
                    url: '/',
                    elementId: false,
                    showIcon: true
                },
                {
                    type: 'twitter',
                    icon: 'twitter',
                    label: '',
                    altText: 'twitter',
                    url: '/',
                    elementId: false,
                    showIcon: true
                }
            ]
        },
        {
            type: 'list',
            name: 'legalLinks',
            label: 'Legal navigation links',
            items: {
                type: 'model',
                models: ['Button', 'Link']
            },
            default: [
                {
                    type: 'Link',
                    label: 'Privacy Policy',
                    url: '/',
                    altText: 'Privacy Policy'
                },
                {
                    type: 'Link',
                    label: 'Terms & Conditions',
                    url: '/',
                    altText: 'Terms & Conditions'
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
                    padding: ['pt-16', 'pb-16', 'pl-4', 'pr-4']
                }
            }
        }
    ]
};
