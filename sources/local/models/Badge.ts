import { Model } from '@stackbit/types';

export const BadgeModel: Model = {
    type: 'object',
    name: 'Badge',
    label: 'Badge',
    labelField: 'label',
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        },
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
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
            default: '',
            description: 'The alternative text for screen readers'
        },
        {
            type: 'string',
            name: 'url',
            label: 'URL',
            default: '',
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
                    label: 'Dropdown',
                    value: 'dropdown'
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
                    value: 'linkedIn'
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
                    value: 'youTube'
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
            type: 'enum',
            name: 'style',
            group: 'styles',
            controlType: 'button-group',
            label: 'Style',
            options: [
                {
                    label: 'Primary',
                    value: 'primary'
                },
                {
                    label: 'Secondary',
                    value: 'secondary'
                }
            ],
            default: 'secondary'
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
}