import { Model } from '@stackbit/types';

export const JobListItemModel: Model = {
    type: 'object',
    name: 'JobListItem',
    label: 'Item',
    labelField: 'title',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'Role Title'
        },
        {
            type: 'string',
            name: 'location',
            label: 'Location',
            default: 'Role location'
        },
        {
            type: 'markdown',
            name: 'text',
            label: 'Text',
            default: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.'
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
                    label: 'Apply',
                    url: '/',
                    showIcon: true,
                    icon: 'arrowRight',
                    iconPosition: 'right'
                }
            ]
        }
    ]
};