import { Model } from '@stackbit/types';

export const MediaGallerySectionModel: Model = {
    type: 'object',
    name: 'MediaGallerySection',
    label: 'Media gallery',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    extends: ['Section'],
    groups: ['sectionComponent'],
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
            name: 'title',
            label: 'Title',
            default: 'Gallery'
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            default: 'This is the subtitle'
        },
        {
            type: 'list',
            name: 'images',
            label: 'Images',
            items: {
                type: 'model',
                models: ['ImageBlock']
            },
            default: [
                {
                    type: 'ImageBlock',
                    url: 'https://assets.stackbit.com/components/images/default/image-1.jpeg',
                    altText: 'Image one',
                    caption: 'Image one caption'
                },
                {
                    type: 'ImageBlock',
                    url: 'https://assets.stackbit.com/components/images/default/image-2.jpeg',
                    altText: 'Image two',
                    caption: 'Image two caption'
                },
                {
                    type: 'ImageBlock',
                    url: 'https://assets.stackbit.com/components/images/default/image-3.jpeg',
                    altText: 'Image three',
                    caption: 'Image three caption'
                },
                {
                    type: 'ImageBlock',
                    url: 'https://assets.stackbit.com/components/images/default/image-4.jpeg',
                    altText: 'Image four',
                    caption: 'Image four caption'
                }
            ]
        },
        {
            type: 'number',
            name: 'spacing',
            label: 'Spacing between images',
            group: 'styles',
            controlType: 'slider',
            min: 0,
            max: 30,
            step: 1,
            unit: 'rem',
            default: 1
        },
        {
            type: 'number',
            name: 'columns',
            label: 'Images per row',
            group: 'styles',
            controlType: 'slider',
            min: 1,
            max: 7,
            step: 1,
            default: 4
        },
        {
            type: 'enum',
            name: 'aspectRatio',
            label: 'Image aspect ratio',
            group: 'styles',
            options: [
                {
                    label: '1:1',
                    value: '1:1'
                },
                {
                    label: '3:2',
                    value: '3:2'
                },
                {
                    label: '2:3',
                    value: '2:3'
                },
                {
                    label: '4:3',
                    value: '4:3'
                },
                {
                    label: '3:4',
                    value: '3:4'
                },
                {
                    label: '16:9',
                    value: '16:9'
                },
                {
                    label: 'Auto',
                    value: 'auto'
                }
            ],
            default: '1:1'
        },
        {
            type: 'number',
            name: 'imageSizePx',
            label: 'Max image size, in px',
            group: 'styles',
            controlType: 'slider',
            min: 50,
            max: 640,
            step: 1,
            unit: 'px',
            default: 300
        },
        {
            type: 'boolean',
            name: 'showCaption',
            group: 'styles',
            label: 'Show caption',
            default: true
        },
        {
            type: 'boolean',
            name: 'enableHover',
            label: 'Enable hover',
            default: true
        },
        {
            type: 'style',
            name: 'styles',
            styles: {
                self: {
                    width: ['narrow', 'wide', 'full'],
                    height: ['auto', 'screen'],
                    margin: ['tw0:96'],
                    padding: ['tw0:96'],
                    justifyContent: ['flex-start', 'flex-end', 'center'],
                    borderRadius: '*',
                    borderWidth: ['0:8'],
                    borderStyle: '*',
                    borderColor: [
                        {
                            value: 'border-primary',
                            label: 'Primary color',
                            color: '$primary'
                        },
                        {
                            value: 'border-secondary',
                            label: 'Secondary color',
                            color: '$secondary'
                        },
                        {
                            value: 'border-dark',
                            label: 'Dark color',
                            color: '$dark'
                        },
                        {
                            value: 'border-complementary',
                            label: 'Complementary color',
                            color: '$complementary'
                        }
                    ]
                },
                title: {
                    fontWeight: ['400', '500'],
                    fontStyle: ['normal', 'italic'],
                    textAlign: ['left', 'center', 'right']
                },
                subtitle: {
                    fontWeight: ['400', '500'],
                    fontStyle: ['normal', 'italic'],
                    textAlign: ['left', 'center', 'right']
                }
            },
            default: {
                self: {
                    width: 'full',
                    height: 'auto',
                    margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
                    padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
                    justifyContent: 'center',
                    borderRadius: 'none',
                    borderWidth: 0,
                    borderStyle: 'none',
                    borderColor: 'border-dark'
                },
                title: {
                    textAlign: 'center'
                },
                subtitle: {
                    fontWeight: 400,
                    fontStyle: 'normal',
                    textAlign: 'center'
                }
            }
        }
    ]
};
