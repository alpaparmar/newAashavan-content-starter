import { Model } from '@stackbit/types';

export const FaqSectionModel: Model = {
    type: 'object',
    name: 'FaqSection',
    label: 'FAQ',
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
            default: 'Frequently Asked Questions'
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            default: 'The section subtitle'
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
                    type: 'Link',
                    label: 'See all',
                    url: '/',
                    showIcon: true,
                    icon: 'arrowRight'
                }
            ]
        },
        {
            type: 'list',
            name: 'items',
            label: 'Items',
            items: {
                type: 'model',
                models: ['FaqItem']
            },
            default: [
                {
                    question: 'How is this different from what we have today?',
                    answer: 'At the office, working together is often a distraction, on remote, it could be motivation. At the office, working together is often a distraction, on remote, it could be motivation. At the office, working together is often a distraction, on remote, it could be motivation.'
                },
                {
                    question: 'How is this different from what we have today?',
                    answer: 'At the office, working together is often a distraction, on remote, it could be motivation. At the office, working together is often a distraction, on remote, it could be motivation. At the office, working together is often a distraction, on remote, it could be motivation.'
                },
                {
                    question: 'How is this different from what we have today?',
                    answer: 'At the office, working together is often a distraction, on remote, it could be motivation. At the office, working together is often a distraction, on remote, it could be motivation. At the office, working together is often a distraction, on remote, it could be motivation.'
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
                titlle: {
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
}