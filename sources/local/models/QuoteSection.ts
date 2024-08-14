import { Model } from '@stackbit/types';

export const QuoteSectionModel: Model = {
    type: 'object',
    name: 'QuoteSection',
    label: 'Quote',
    labelField: 'name',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    extends: ['Section'],
    groups: ['sectionComponent'],
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
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
            default: 'colors-c'
        },
        {
            type: 'markdown',
            name: 'quote',
            label: 'Quote',
            default: "It’s great to see someone taking action while still maintaining a sustainable fish supply to home cooks.",
            required: false
        },
        {
            type: 'string',
            name: 'name',
            label: 'Author name',
            default: 'Johnna Doe'
        },
        {
            type: 'string',
            name: 'title',
            label: 'Author title',
            default: 'Product Marketing Manager at Acme'
        },
        {
            type: 'model',
            name: 'backgroundImage',
            group: 'styles',
            label: 'Background image',
            models: ['ImageBlock'],
            default: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/bg.jpg',
                altText: 'Dots',
                opacity: 30
            }
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
                quote: {
                    textAlign: ['left', 'center', 'right']
                },
                name: {
                    fontWeight: ['400', '700'],
                    fontStyle: ['normal', 'italic'],
                    textAlign: ['left', 'center', 'right']
                },
                title: {
                    fontWeight: ['400', '700'],
                    fontStyle: ['normal', 'italic'],
                    textAlign: ['left', 'center', 'right']
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
                quote: {
                    textAlign: 'center'
                },
                name: {
                    fontWeight: 400,
                    fontStyle: 'normal',
                    textAlign: 'center'
                },
                title: {
                    fontWeight: 400,
                    fontStyle: 'normal',
                    textAlign: 'center'
                }
            }
        }
    ]
};
