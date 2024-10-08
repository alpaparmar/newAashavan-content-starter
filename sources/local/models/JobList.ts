import { Model } from '@stackbit/types';

export const JobListModel: Model = {
    type: 'object',
    name: 'JobList',
    label: 'Job List',
    labelField: 'title',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'Job List Title'
        },
        {
            type: 'list',
            name: 'items',
            label: 'Items',
            items: {
                type: 'model',
                models: ['JobListItem']
            },
            default: [
                {
                    type: 'JobListItem',
                    title: 'Role Title',
                    location: 'Role location',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and',
                    actions: [
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
        }
    ]
};