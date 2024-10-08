import { Model } from '@stackbit/types';

export const EmailFormControlModel: Model = {
    type: 'object',
    name: 'EmailFormControl',
    label: 'Email',
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
        },
        {
            type: 'string',
            name: 'label',
            label: 'Label',
            default: 'Name'
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
            default: 'Your name'
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
        },
    ]
};
