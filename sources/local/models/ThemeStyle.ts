import { Model } from '@stackbit/types';

export const ThemeStyleModel: Model = {
    type: 'data',
    name: 'ThemeStyle',
    label: 'Theme Style',
    file: 'content/data/style.json',
    filePath: 'content/data/style.json',
    fieldGroups: [
        {
            name: 'text-styles',
            label: 'Text styles'
        },
        {
            name: 'color-palettes',
            label: 'Color palettes'
        },
        {
            name: 'button-styles',
            label: 'Button styles'
        }
    ],
    fields: [
        {
            type: 'enum',
            name: 'fontHeadlines',
            label: 'Font - headlines & subtitles',
            group: 'text-styles',
            options: [
                {
                    label: 'Hind',
                    value: 'hind'
                },
                {
                    label: 'Nunito Sans',
                    value: 'nunito'
                }
            ]
        },
        {
            type: 'object',
            name: 'h1',
            label: 'H1',
            labelField: 'size',
            group: 'text-styles',
            readOnly: true,
            fields: [
                {
                    type: 'enum',
                    name: 'size',
                    label: 'Font size',
                    options: [
                        {
                            label: 'XS',
                            value: 'xs'
                        },
                        {
                            label: 'SM',
                            value: 'sm'
                        },
                        {
                            label: 'Base',
                            value: 'base'
                        },
                        {
                            label: 'LG',
                            value: 'lg'
                        },
                        {
                            label: 'XL',
                            value: 'xl'
                        },
                        {
                            label: '2XL',
                            value: '2xl'
                        },
                        {
                            label: '3XL',
                            value: '3xl'
                        },
                        {
                            label: '4XL',
                            value: '4xl'
                        },
                        {
                            label: '5XL',
                            value: '5xl'
                        },
                        {
                            label: '6XL',
                            value: '6xl'
                        },
                        {
                            label: '7XL',
                            value: '7xl'
                        },
                        {
                            label: '8XL',
                            value: '8xl'
                        },
                        {
                            label: '9XL',
                            value: '9xl'
                        }
                    ],
                    default: '5xl'
                },
                {
                    type: 'object',
                    name: 'h1',
                    label: 'H1',
                    labelField: 'size',
                    group: 'text-styles',
                    readOnly: true,
                    fields: [
                        {
                            type: 'enum',
                            name: 'weight',
                            label: 'Font weight',
                            controlType: 'button-group',
                            options: [
                                {
                                    label: 'Normal',
                                    value: 'normal'
                                },
                                {
                                    label: 'Bold',
                                    value: 'bold'
                                }
                            ],
                            default: 'bold'
                        },
                        {
                            type: 'enum',
                            name: 'decoration',
                            label: 'Decoration',
                            controlType: 'button-group',
                            options: [
                                {
                                    label: 'None',
                                    value: 'none'
                                },
                                {
                                    label: 'Underline',
                                    value: 'underline'
                                },
                                {
                                    label: 'Line through',
                                    value: 'line - through'
                                }
                            ],
                            default: 'none'
                        },
                        {
                            type: 'enum',
                            name: 'case',
                            label: 'Case',
                            controlType: 'button-group',
                            options: [
                                {
                                    label: 'Default',
                                    value: 'none'
                                },
                                {
                                    label: 'ag',
                                    value: 'lowercase'
                                },
                                {
                                    label: 'Ag',
                                    value: 'capitalize'
                                },
                                {
                                    label: 'AG',
                                    value: 'uppercase'
                                }
                            ],
                            default: 'none'
                        },
                        {
                            type: 'enum',
                            name: 'letterSpacing',
                            label: 'Letter spacing',
                            controlType: 'button-group',
                            options: [
                                {
                                    label: 'Tighter',
                                    value: 'tighter'
                                },
                                {
                                    label: 'Tight',
                                    value: 'tight'
                                },
                                {
                                    label: 'Normal',
                                    value: 'normal'
                                },
                                {
                                    label: 'Wide',
                                    value: 'wide'
                                },
                                {
                                    label: 'Wider',
                                    value: 'wider'
                                }
                            ],
                            default: 'normal'
                        }
                    ]
                }
            ]
        },
        {
            type: 'object',
            name: 'h2',
            label: 'H2',
            labelField: 'size',
            group: 'text-styles',
            readOnly: true,
            fields: [
                {
                    type: 'enum',
                    name: 'size',
                    label: 'Font size',
                    options: [
                        {
                            label: 'XS',
                            value: 'xs'
                        },
                        {
                            label: 'SM',
                            value: 'sm'
                        },
                        {
                            label: 'Base',
                            value: 'base'
                        },
                        {
                            label: 'LG',
                            value: 'lg'
                        },
                        {
                            label: 'XL',
                            value: 'xl'
                        },
                        {
                            label: '2XL',
                            value: '2xl'
                        },
                        {
                            label: '3XL',
                            value: '3xl'
                        },
                        {
                            label: '4XL',
                            value: '4xl'
                        },
                        {
                            label: '5XL',
                            value: '5xl'
                        },
                        {
                            label: '6XL',
                            value: '6xl'
                        },
                        {
                            label: '7XL',
                            value: '7xl'
                        },
                        {
                            label: '8XL',
                            value: '8xl'
                        },
                        {
                            label: '9XL',
                            value: '9xl'
                        }
                    ],
                    default: '4xl'
                },
                {
                    type: 'enum',
                    name: 'weight',
                    label: 'Font weight',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Normal',
                            value: 'normal'
                        },
                        {
                            label: 'Bold',
                            value: 'bold'
                        }
                    ],
                    default: 'bold'
                },
                {
                    type: 'enum',
                    name: 'decoration',
                    label: 'Decoration',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'None',
                            value: 'none'
                        },
                        {
                            label: 'Underline',
                            value: 'underline'
                        },
                        {
                            label: 'Line through',
                            value: 'line - through'
                        }
                    ],
                    default: 'none'
                },
                {
                    type: 'enum',
                    name: 'case',
                    label: 'Case',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Default',
                            value: 'none'
                        },
                        {
                            label: 'ag',
                            value: 'lowercase'
                        },
                        {
                            label: 'Ag',
                            value: 'capitalize'
                        },
                        {
                            label: 'AG',
                            value: 'uppercase'
                        }
                    ],
                    default: 'none'
                },
                {
                    type: 'enum',
                    name: 'letterSpacing',
                    label: 'Letter spacing',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Tighter',
                            value: 'tighter'
                        },
                        {
                            label: 'Tight',
                            value: 'tight'
                        },
                        {
                            label: 'Normal',
                            value: 'normal'
                        },
                        {
                            label: 'Wide',
                            value: 'wide'
                        },
                        {
                            label: 'Wider',
                            value: 'wider'
                        }
                    ],
                    default: 'normal'
                }
            ]
        },
        {
            type: 'object',
            name: 'h3',
            label: 'H3',
            labelField: 'size',
            group: 'text-styles',
            readOnly: true,
            fields: [
                {
                    type: 'enum',
                    name: 'size',
                    label: 'Font size',
                    options: [
                        {
                            label: 'XS',
                            value: 'xs'
                        },
                        {
                            label: 'SM',
                            value: 'sm'
                        },
                        {
                            label: 'Base',
                            value: 'base'
                        },
                        {
                            label: 'LG',
                            value: 'lg'
                        },
                        {
                            label: 'XL',
                            value: 'xl'
                        },
                        {
                            label: '2XL',
                            value: '2xl'
                        },
                        {
                            label: '3XL',
                            value: '3xl'
                        },
                        {
                            label: '4XL',
                            value: '4xl'
                        },
                        {
                            label: '5XL',
                            value: '5xl'
                        },
                        {
                            label: '6XL',
                            value: '6xl'
                        },
                        {
                            label: '7XL',
                            value: '7xl'
                        },
                        {
                            label: '8XL',
                            value: '8xl'
                        },
                        {
                            label: '9XL',
                            value: '9xl'
                        }
                    ],
                    default: '3xl'
                },
                {
                    type: 'enum',
                    name: 'weight',
                    label: 'Font weight',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Normal',
                            value: 'normal'
                        },
                        {
                            label: 'Bold',
                            value: 'bold'
                        }
                    ],
                    default: 'bold'
                },
                {
                    type: 'enum',
                    name: 'decoration',
                    label: 'Decoration',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'None',
                            value: 'none'
                        },
                        {
                            label: 'Underline',
                            value: 'underline'
                        },
                        {
                            label: 'Line through',
                            value: 'line - through'
                        }
                    ],
                    default: 'none'
                },
                {
                    type: 'enum',
                    name: 'case',
                    label: 'Case',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Default',
                            value: 'none'
                        },
                        {
                            label: 'ag',
                            value: 'lowercase'
                        },
                        {
                            label: 'Ag',
                            value: 'capitalize'
                        },
                        {
                            label: 'AG',
                            value: 'uppercase'
                        }
                    ],
                    default: 'none'
                },
                {
                    type: 'enum',
                    name: 'letterSpacing',
                    label: 'Letter spacing',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Tighter',
                            value: 'tighter'
                        },
                        {
                            label: 'Tight',
                            value: 'tight'
                        },
                        {
                            label: 'Normal',
                            value: 'normal'
                        },
                        {
                            label: 'Wide',
                            value: 'wide'
                        },
                        {
                            label: 'Wider',
                            value: 'wider'
                        }
                    ],
                    default: 'normal'
                }
            ]
        },
        {
            type: 'object',
            name: 'h4',
            label: 'H4',
            labelField: 'size',
            group: 'text-styles',
            readOnly: true,
            fields: [
                {
                    type: 'enum',
                    name: 'size',
                    label: 'Font size',
                    options: [
                        {
                            label: 'XS',
                            value: 'xs'
                        },
                        {
                            label: 'SM',
                            value: 'sm'
                        },
                        {
                            label: 'Base',
                            value: 'base'
                        },
                        {
                            label: 'LG',
                            value: 'lg'
                        },
                        {
                            label: 'XL',
                            value: 'xl'
                        },
                        {
                            label: '2XL',
                            value: '2xl'
                        },
                        {
                            label: '3XL',
                            value: '3xl'
                        },
                        {
                            label: '4XL',
                            value: '4xl'
                        },
                        {
                            label: '5XL',
                            value: '5xl'
                        },
                        {
                            label: '6XL',
                            value: '6xl'
                        },
                        {
                            label: '7XL',
                            value: '7xl'
                        },
                        {
                            label: '8XL',
                            value: '8xl'
                        },
                        {
                            label: '9XL',
                            value: '9xl'
                        }
                    ],
                    default: '2xl'
                },
                {
                    type: 'enum',
                    name: 'weight',
                    label: 'Font weight',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Normal',
                            value: 'normal'
                        },
                        {
                            label: 'Bold',
                            value: 'bold'
                        }
                    ],
                    default: 'bold'
                },
                {
                    type: 'enum',
                    name: 'decoration',
                    label: 'Decoration',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'None',
                            value: 'none'
                        },
                        {
                            label: 'Underline',
                            value: 'underline'
                        },
                        {
                            label: 'Line through',
                            value: 'line - through'
                        }
                    ],
                    default: 'none'
                },
                {
                    type: 'enum',
                    name: 'case',
                    label: 'Case',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Default',
                            value: 'none'
                        },
                        {
                            label: 'ag',
                            value: 'lowercase'
                        },
                        {
                            label: 'Ag',
                            value: 'capitalize'
                        },
                        {
                            label: 'AG',
                            value: 'uppercase'
                        }
                    ],
                    default: 'none'
                },
                {
                    type: 'enum',
                    name: 'letterSpacing',
                    label: 'Letter spacing',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Tighter',
                            value: 'tighter'
                        },
                        {
                            label: 'Tight',
                            value: 'tight'
                        },
                        {
                            label: 'Normal',
                            value: 'normal'
                        },
                        {
                            label: 'Wide',
                            value: 'wide'
                        },
                        {
                            label: 'Wider',
                            value: 'wider'
                        }
                    ],
                    default: 'normal'
                }
            ]
        },
        {
            type: 'object',
            name: 'h5',
            label: 'H5',
            labelField: 'size',
            group: 'text-styles',
            readOnly: true,
            fields: [
                {
                    type: 'enum',
                    name: 'size',
                    label: 'Font size',
                    options: [
                        {
                            label: 'XS',
                            value: 'xs'
                        },
                        {
                            label: 'SM',
                            value: 'sm'
                        },
                        {
                            label: 'Base',
                            value: 'base'
                        },
                        {
                            label: 'LG',
                            value: 'lg'
                        },
                        {
                            label: 'XL',
                            value: 'xl'
                        },
                        {
                            label: '2XL',
                            value: '2xl'
                        },
                        {
                            label: '3XL',
                            value: '3xl'
                        },
                        {
                            label: '4XL',
                            value: '4xl'
                        },
                        {
                            label: '5XL',
                            value: '5xl'
                        },
                        {
                            label: '6XL',
                            value: '6xl'
                        },
                        {
                            label: '7XL',
                            value: '7xl'
                        },
                        {
                            label: '8XL',
                            value: '8xl'
                        },
                        {
                            label: '9XL',
                            value: '9xl'
                        }
                    ],
                    default: 'xl'
                },
                {
                    type: 'enum',
                    name: 'weight',
                    label: 'Font weight',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Normal',
                            value: 'normal'
                        },
                        {
                            label: 'Bold',
                            value: 'bold'
                        }
                    ],
                    default: 'bold'
                },
                {
                    type: 'enum',
                    name: 'decoration',
                    label: 'Decoration',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'None',
                            value: 'none'
                        },
                        {
                            label: 'Underline',
                            value: 'underline'
                        },
                        {
                            label: 'Line through',
                            value: 'line - through'
                        }
                    ],
                    default: 'none'
                },
                {
                    type: 'enum',
                    name: 'case',
                    label: 'Case',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Default',
                            value: 'none'
                        },
                        {
                            label: 'ag',
                            value: 'lowercase'
                        },
                        {
                            label: 'Ag',
                            value: 'capitalize'
                        },
                        {
                            label: 'AG',
                            value: 'uppercase'
                        }
                    ],
                    default: 'none'
                },
                {
                    type: 'enum',
                    name: 'letterSpacing',
                    label: 'Letter spacing',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Tighter',
                            value: 'tighter'
                        },
                        {
                            label: 'Tight',
                            value: 'tight'
                        },
                        {
                            label: 'Normal',
                            value: 'normal'
                        },
                        {
                            label: 'Wide',
                            value: 'wide'
                        },
                        {
                            label: 'Wider',
                            value: 'wider'
                        }
                    ],
                    default: 'normal'
                }
            ]
        },
        {
            type: 'object',
            name: 'h6',
            label: 'H6',
            labelField: 'size',
            group: 'text-styles',
            readOnly: true,
            fields: [
                {
                    type: 'enum',
                    name: 'size',
                    label: 'Font size',
                    options: [
                        {
                            label: 'XS',
                            value: 'xs'
                        },
                        {
                            label: 'SM',
                            value: 'sm'
                        },
                        {
                            label: 'Base',
                            value: 'base'
                        },
                        {
                            label: 'LG',
                            value: 'lg'
                        },
                        {
                            label: 'XL',
                            value: 'xl'
                        },
                        {
                            label: '2XL',
                            value: '2xl'
                        },
                        {
                            label: '3XL',
                            value: '3xl'
                        },
                        {
                            label: '4XL',
                            value: '4xl'
                        },
                        {
                            label: '5XL',
                            value: '5xl'
                        },
                        {
                            label: '6XL',
                            value: '6xl'
                        },
                        {
                            label: '7XL',
                            value: '7xl'
                        },
                        {
                            label: '8XL',
                            value: '8xl'
                        },
                        {
                            label: '9XL',
                            value: '9xl'
                        }
                    ],
                    default: 'lg'
                },
                {
                    type: 'enum',
                    name: 'weight',
                    label: 'Font weight',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Normal',
                            value: 'normal'
                        },
                        {
                            label: 'Bold',
                            value: 'bold'
                        }
                    ],
                    default: 'bold'
                },
                {
                    type: 'enum',
                    name: 'decoration',
                    label: 'Decoration',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'None',
                            value: 'none'
                        },
                        {
                            label: 'Underline',
                            value: 'underline'
                        },
                        {
                            label: 'Line through',
                            value: 'line - through'
                        }
                    ],
                    default: 'none'
                },
                {
                    type: 'enum',
                    name: 'case',
                    label: 'Case',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Default',
                            value: 'none'
                        },
                        {
                            label: 'ag',
                            value: 'lowercase'
                        },
                        {
                            label: 'Ag',
                            value: 'capitalize'
                        },
                        {
                            label: 'AG',
                            value: 'uppercase'
                        }
                    ],
                    default: 'none'
                },
                {
                    type: 'enum',
                    name: 'letterSpacing',
                    label: 'Letter spacing',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Tighter',
                            value: 'tighter'
                        },
                        {
                            label: 'Tight',
                            value: 'tight'
                        },
                        {
                            label: 'Normal',
                            value: 'normal'
                        },
                        {
                            label: 'Wide',
                            value: 'wide'
                        },
                        {
                            label: 'Wider',
                            value: 'wider'
                        }
                    ],
                    default: 'normal'
                }
            ]
        },
        {
            type: 'enum',
            name: 'fontBody',
            label: 'Font - body & captions',
            group: 'text-styles',
            options: [
                {
                    label: 'Hind',
                    value: 'hind'
                },
                {
                    label: 'Nunito Sans',
                    value: 'nunito'
                }
            ]
        },
        {
            type: 'color',
            name: 'main',
            label: 'Site background',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'light',
            label: 'Light',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'onLight',
            label: 'Foreground over light',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'dark',
            label: 'Dark',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'onDark',
            label: 'Foreground over dark',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'primary',
            label: 'Primary',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'onPrimary',
            label: 'Foreground over primary',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'secondary',
            label: 'Secondary',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'onSecondary',
            label: 'Foreground over secondary',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'complementary',
            label: 'Complementary',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'onComplementary',
            label: 'Foreground over complementary',
            group: 'color-palettes'
        },
        {
            type: 'object',
            name: 'buttonPrimary',
            label: 'Primary button',
            group: 'button-styles',
            readOnly: true,
            fields: [
                {
                    type: 'enum',
                    name: 'weight',
                    label: 'Font weight',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Normal',
                            value: 'normal'
                        },
                        {
                            label: 'Bold',
                            value: 'bold'
                        }
                    ],
                    default: 'normal'
                },
                {
                    type: 'enum',
                    name: 'case',
                    label: 'Case',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Default',
                            value: 'none'
                        },
                        {
                            label: 'ag',
                            value: 'lowercase'
                        },
                        {
                            label: 'Ag',
                            value: 'capitalize'
                        },
                        {
                            label: 'AG',
                            value: 'uppercase'
                        }
                    ],
                    default: 'none'
                },
                {
                    type: 'enum',
                    name: 'letterSpacing',
                    label: 'Letter spacing',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Tighter',
                            value: 'tighter'
                        },
                        {
                            label: 'Tight',
                            value: 'tight'
                        },
                        {
                            label: 'Normal',
                            value: 'normal'
                        },
                        {
                            label: 'Wide',
                            value: 'wide'
                        },
                        {
                            label: 'Wider',
                            value: 'wider'
                        }
                    ],
                    default: 'normal'
                },
                {
                    type: 'enum',
                    name: 'borderRadius',
                    label: 'Corner radius',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'None',
                            value: 'none'
                        },
                        {
                            label: 'Small',
                            value: 'md'
                        },
                        {
                            label: 'Large',
                            value: 'full'
                        }
                    ],
                    default: 'none'
                },
                {
                    type: 'number',
                    name: 'horizontalPadding',
                    label: 'Horizontal padding',
                    controlType: 'slider',
                    min: 0,
                    max: 30,
                    step: 1,
                    unit: 'px',
                    default: 24
                },
                {
                    type: 'number',
                    name: 'verticalPadding',
                    label: 'Vertical padding',
                    controlType: 'slider',
                    min: 0,
                    max: 30,
                    step: 1,
                    unit: 'px',
                    default: 12
                },
                {
                    type: 'enum',
                    name: 'shadow',
                    label: 'Shadow',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'None',
                            value: 'none'
                        },
                        {
                            label: 'Mild',
                            value: 'md'
                        },
                        {
                            label: 'Float',
                            value: 'xl'
                        }
                    ],
                    default: 'none'
                }
            ]
        },
        {
            type: 'object',
            name: 'buttonSecondary',
            label: 'Secondary button',
            group: 'button-styles',
            readOnly: true,
            fields: [
                {
                    type: 'enum',
                    name: 'weight',
                    label: 'Font weight',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Normal',
                            value: 'normal'
                        },
                        {
                            label: 'Bold',
                            value: 'bold'
                        }
                    ],
                    default: 'bold'
                },
                {
                    type: 'enum',
                    name: 'case',
                    label: 'Case',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Default',
                            value: 'none'
                        },
                        {
                            label: 'ag',
                            value: 'lowercase'
                        },
                        {
                            label: 'Ag',
                            value: 'capitalize'
                        },
                        {
                            label: 'AG',
                            value: 'uppercase'
                        }
                    ],
                    default: 'none'
                },
                {
                    type: 'enum',
                    name: 'letterSpacing',
                    label: 'Letter spacing',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Tighter',
                            value: 'tighter'
                        },
                        {
                            label: 'Tight',
                            value: 'tight'
                        },
                        {
                            label: 'Normal',
                            value: 'normal'
                        },
                        {
                            label: 'Wide',
                            value: 'wide'
                        },
                        {
                            label: 'Wider',
                            value: 'wider'
                        }
                    ],
                    default: 'normal'
                },
                {
                    type: 'enum',
                    name: 'borderRadius',
                    label: 'Corner radius',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'None',
                            value: 'none'
                        },
                        {
                            label: 'Small',
                            value: 'md'
                        },
                        {
                            label: 'Large',
                            value: 'full'
                        }
                    ],
                    default: 'none'
                },
                {
                    type: 'enum',
                    name: 'borderStyle',
                    label: 'Border style',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'None',
                            value: 'none'
                        },
                        {
                            label: 'Solid',
                            value: 'solid'
                        },
                        {
                            label: 'Dashed',
                            value: 'dashed'
                        },
                        {
                            label: 'Dotted',
                            value: 'dotted'
                        },
                        {
                            label: 'Double',
                            value: 'double'
                        }
                    ],
                    default: 'solid'
                },
                {
                    type: 'number',
                    name: 'horizontalPadding',
                    label: 'Horizontal padding',
                    controlType: 'slider',
                    min: 0,
                    max: 30,
                    step: 1,
                    unit: 'px',
                    default: 24
                },
                {
                    type: 'number',
                    name: 'verticalPadding',
                    label: 'Vertical padding',
                    controlType: 'slider',
                    min: 0,
                    max: 30,
                    step: 1,
                    unit: 'px',
                    default: 12
                },
                {
                    type: 'enum',
                    name: 'shadow',
                    label: 'Shadow',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'None',
                            value: 'none'
                        },
                        {
                            label: 'Mild',
                            value: 'md'
                        },
                        {
                            label: 'Float',
                            value: 'xl'
                        }
                    ],
                    default: 'none'
                }
            ]
        },
        {
            type: 'object',
            name: 'link',
            label: 'Link',
            group: 'button-styles',
            readOnly: true,
            fields: [
                {
                    type: 'enum',
                    name: 'weight',
                    label: 'Font weight',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Normal',
                            value: 'normal'
                        },
                        {
                            label: 'Bold',
                            value: 'bold'
                        }
                    ],
                    default: 'bold'
                },
                {
                    type: 'enum',
                    name: 'case',
                    label: 'Case',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Default',
                            value: 'none'
                        },
                        {
                            label: 'ag',
                            value: 'lowercase'
                        },
                        {
                            label: 'Ag',
                            value: 'capitalize'
                        },
                        {
                            label: 'AG',
                            value: 'uppercase'
                        }
                    ],
                    default: 'none'
                },
                {
                    type: 'enum',
                    name: 'letterSpacing',
                    label: 'Letter spacing',
                    controlType: 'button-group',
                    options: [
                        {
                            label: 'Tighter',
                            value: 'tighter'
                        },
                        {
                            label: 'Tight',
                            value: 'tight'
                        },
                        {
                            label: 'Normal',
                            value: 'normal'
                        },
                        {
                            label: 'Wide',
                            value: 'wide'
                        },
                        {
                            label: 'Wider',
                            value: 'wider'
                        }
                    ],
                    default: 'normal'
                },
            ]
        }
    ]
};
