import { Model } from '@stackbit/types';

export const LinkModel: Model = {
    type: 'object',
    name: 'Link',
    label: 'Link',
    labelField: 'label',
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
            name: 'label',
            label: 'Label',
            default: 'Learn more'
        },
        {
            type: 'string',
            name: 'altText',
            label: 'Alt text',
            description: 'The alternative text for screen readers',
            default: ''
        },
        {
            type: 'string',
            name: 'url',
            label: 'URL',
            default: '/',
            required: true
        },
        {
            type: 'string',
            name: 'target',
            label: 'target',
            default: ''
        },
        {
            type: 'string',
            name: 'rel',
            label: 'rel',
            default: ''
        },
        {
            type: 'boolean',
            name: 'showIcon',
            group: 'styles',
            label: 'Show icon',
            default: false
        },
        {
            type: 'enum',
            name: 'icon',
            group: 'styles',
            label: 'Icon',
            options: [
                {
                    label: 'Apple',
                    value: 'apple'
                },
                {
                    label: 'Arrow left',
                    value: 'arrowLeft'
                },
                {
                    label: 'Arrow left circle',
                    value: 'arrowLeftCircle'
                },
                {
                    label: 'Arrow right',
                    value: 'arrowRight'
                },
                {
                    label: 'Arrow right circle',
                    value: 'arrowRightCircle'
                },
                {
                    label: 'Cart',
                    value: 'cart'
                },
                {
                    label: 'Chevron left',
                    value: 'chevronLeft'
                },
                {
                    label: 'Chevron right',
                    value: 'chevronRight'
                },
                {
                    label: 'DropDown',
                    value: 'dropDown'
                },
                {
                    label: 'Facebook',
                    value: 'facebook'
                },
                {
                    label: 'GitHub',
                    value: 'github'
                },
                {
                    label: 'Google Play',
                    value: 'googlePlay'
                },
                {
                    label: 'Instagram',
                    value: 'instagram'
                },
                {
                    label: 'LinkedIn',
                    value: 'linkedin'
                },
                {
                    label: 'Magnifying Glass',
                    value: 'magnifyingGlass'
                },
                {
                    label: 'Mail',
                    value: 'mail'
                },
                {
                    label: 'New Tab',
                    value: 'newTab'
                },
                {
                    label: 'Play',
                    value: 'play'
                },
                {
                    label: 'Play circle',
                    value: 'playCircle'
                },
                {
                    label: 'Reddit',
                    value: 'reddit'
                },
                {
                    label: 'RSS',
                    value: 'rss'
                },
                {
                    label: 'Send',
                    value: 'send'
                },
                {
                    label: 'Twitter',
                    value: 'twitter'
                },
                {
                    label: 'Vimeo',
                    value: 'vimeo'
                },
                {
                    label: 'YouTube',
                    value: 'youtube'
                }
            ],
            default: 'arrowRight'
        },
        {
            type: 'enum',
            name: 'iconPosition',
            group: 'styles',
            controlType: 'button-group',
            label: 'Icon position',
            options: [
                {
                    label: 'Left',
                    value: 'left'
                },
                {
                    label: 'Right',
                    value: 'right'
                }
            ],
            default: 'right'
        },
        {
            type: 'string',
            name: 'elementId',
            group: 'settings',
            label: 'Element ID',
            description: 'The unique ID for an HTML element, must not contain whitespace',
            default: ''
        }
    ]
};
