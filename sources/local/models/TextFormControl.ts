import { Model } from '@stackbit/types';

export const TextFormControlModel: Model = {
    type: 'object',
    name: 'TextFormControl',
    label: 'Text',
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
            default: 'home-address'
        },
        {
            type: 'string',
            name: 'label',
            label: 'Label',
            default: 'Home address'
        },
        {
            type: 'boolean',
            name: 'hideLabel',
            label: 'Hide label',
            default: false
        },
        {
            type: 'string',
            name: 'placeholder',
            label: 'Placeholder text',
            default: 'Your home address'
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
