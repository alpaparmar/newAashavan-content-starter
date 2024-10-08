import { Model } from '@stackbit/types';

export const FaqItemModel: Model = {
    type: 'object',
    name: 'FaqItem',
    label: 'Item',
    labelField: 'question',
    fields: [
        {
            type: 'string',
            name: 'question',
            label: 'Question',
            default: 'How is this different from what we have today?',
            required: true
        },
        {
            type: 'markdown',
            name: 'answer',
            label: 'Answer',
            default: 'At the office, working together is often a distraction, on remote, it could be motivation. At the office, working together is often a distraction, on remote, it could be motivation. At the office, working together is often a distraction, on remote, it could be motivation.',
            required: true
        },
        {
            type: 'style',
            name: 'style',
            styles: {
                question: {
                    fontWeight: ['400', '700'],
                    fontStyle: ['normal', 'italic']
                }
            }
        }
    ]
}