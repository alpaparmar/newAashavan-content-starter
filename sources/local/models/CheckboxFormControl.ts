import { Model } from '@stackbit/types';

export const CheckboxFormControlModel: Model = {
    type: 'object',
    name: 'CheckboxFormControl',
    label: 'Checkbox',
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
            default: 'updates',
            required: true
        },
        {
            type: 'string',
            name: 'label',
            label: 'Label',
            default: 'Sign me up to receive updates'
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
}