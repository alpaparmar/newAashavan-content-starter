import { Model } from '@stackbit/types';

export const SelectFormControlModel: Model = {
    type: 'object',
    name: 'SelectFormControl',
    label: 'Select',
    labelField: 'label',
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles'
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'name',
            label: 'Name',
            required: true,
            default: 'city'
        },
        {
            type: 'string',
            name: 'label',
            label: 'Label',
            default: 'City'
        },
        {
            type: 'boolean',
            name: 'hideLabel',
            label: 'Hide label',
            default: false
        },
        {
            type: 'string',
            name: 'defaultValue',
            label: 'Default value',
            default: 'Please choose...'
        },
        {
            type: 'list',
            name: 'options',
            label: 'Options',
            items: {
                type: 'string'
            },
            default: ['New York', 'San Francisco']
        },
        {
            type: 'boolean',
            name: 'isRequired',
            label: 'Is the field required?',
            default: false
        },
        {
            type: 'enum',
            name: 'width',
            group: 'styles',
            label: 'Width',
            options: [
                {
                    label: 'Full',
                    value: 'full'
                },
                {
                    label: 'One half',
                    value: '1/2'
                }
            ],
            default: 'full'
        }
    ]
};
