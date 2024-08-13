import { Model } from '@stackbit/types';

export const TestimonialsSectionModel: Model = {
    type: 'object',
    name: 'TestimonialsSection',
    label: 'Testimonials',
    labelField: 'title',
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
            default: 'colors-h'
        },
        {
            type: 'enum',
            name: 'variant',
            group: 'styles',
            label: 'Arrangement',
            options: [
                {
                    label: 'Left aligned, large author image',
                    value: 'variant-a'
                },
                {
                    label: 'Left aligned, small author image',
                    value: 'variant-b'
                },
                {
                    label: 'Centered, small author image',
                    value: 'variant-c'
                }
            ],
            default: 'variant-a',
        },
        {
            type: 'string',
            name: 'title',
            label: 'Title'
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle'
        },
        {
            type: 'list',
            name: 'testimonials',
            label: 'Testimonials',
            items: {
                type: 'model',
                models: ['Testimonial']
            },
            default: [
                {
                    type: 'Testimonial',
                    quote: 'It’s great to see someone taking action while still maintaining a\nsustainable fish supply to home cooks.',
                    name: 'Johnna Doe',
                    title: 'Product Marketing Manager at Acme',
                    image: {
                        type: 'ImageBlock',
                        url: 'https://assets.stackbit.com/components/images/default/default-person.png',
                        altText: 'Person photo'
                    }
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
                }
            }
        }
    ]
};
