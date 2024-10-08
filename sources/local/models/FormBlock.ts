import { Model } from '@stackbit/types';

export const FormBlockModel: Model = {
    type: 'object',
    name: 'FormBlock',
    label: 'Form',
    labelField: 'elementId',
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
            name: 'variant',
            group: 'styles',
            label: 'Form arrangement',
            options: [
                {
                    label: 'Submit button at the bottom',
                    value: 'variant-a'
                },
                {
                    label: 'Submit button on the right',
                    value: 'variant-b'
                }
            ],
            default: 'variant-a'
        },
        {
            type: 'list',
            name: 'fields',
            label: 'Fields',
            items: {
                type: 'model',
                models: ['TextFormControl', 'EmailFormControl', 'TextareaFormControl', 'CheckboxFormControl', 'SelectFormControl', 'HiddenFormControl']
            },
            default: [
                {
                    type: 'TextFormControl',
                    label: 'Name',
                    name: 'name',
                    placeholder: 'Your name',
                    isRequired: true,
                    width: '1/2'
                },
                {
                    type: 'EmailFormControl',
                    label: 'Email',
                    name: 'email',
                    placeholder: 'Your email',
                    isRequired: true,
                    width: '1/2'
                },
                {
                    type: 'TextFormControl',
                    label: 'Home Address',
                    name: 'home-address',
                    placeholder: 'Your home address',
                    isRequired: false,
                    width: 'full'
                },
                {
                    type: 'CheckboxFormControl',
                    name: 'updates',
                    label: 'Sign me up to receive updates',
                    width: 'full'
                }
            ]
        },
        {
            type: 'string',
            name: 'submitLabel',
            label: 'Button',
            default: 'Send Message'
        },
        {
            type: 'string',
            name: 'elementId',
            group: 'settings',
            label: 'Element ID',
            description: 'The unique ID used for id and name attributes, must not contain whitespace',
            default: 'contact-form',
            required: true
        },
        {
            type: 'string',
            name: 'action',
            group: 'settings',
            label: 'Action (form submission URL)',
            default: ''
        },
        {
            type: 'string',
            name: 'destination',
            group: 'settings',
            label: 'Destination (email to redirect responses)',
            default: ''
        },
        {
            type: 'boolean',
            name: 'useAxios',
            group: 'settings',
            label: 'Use Axios?',
            default: false
        },
        {
            type: 'enum',
            name: 'method',
            group: 'settings',
            label: 'Method',
            options: [
                {
                    label: 'GET',
                    value: 'GET'
                },
                {
                    label: 'POST',
                    value: 'POST'
                }
            ],
            default: 'GET'
        },
        {
            type: 'style',
            name: 'styles',
            styles: {
                submitLabel: {
                    textAlign: ['left', 'center', 'right']
                }
            },
            default: {
                submitLabel: {
                    textAlign: 'left'
                }
            }
        }
    ]
};
