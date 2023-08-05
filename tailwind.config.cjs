// const { text } = require('stream/consumers');
const { fontFamily } = require('tailwindcss/defaultTheme')
const config = require('./tailwind.theme.config')

// kmsec modifications inspired by Tailwind's own site config: https://github.com/tailwindlabs/tailwindcss.com/blob/master/tailwind.config.js
const themeConfig = config.default
const { colors } = themeConfig
module.exports = {
    darkMode: 'class',
    content: [
        './public/**/*.html',
        './src/**/*.{astro,js,ts,svelte}'
    ],
    theme: {
		fontFamily: {
            fira: ['Fira Sans', ...fontFamily.sans],
            title: ['Major Mono Display', ...fontFamily.mono],
		},
		extend: {
            colors: {
                theme: {
                    ...colors
                }
            },
            typography: (theme) => ({
                dark: {
                    css: {
                        color: theme("colors.slate[300]"),
                        'strong, h1, h2, h3, h4': {
                            color: colors.dark.primary,
                        },
                        blockquote: {
                            color: colors.dark.primary,
                            borderColor: colors.primary
                        },
                        a: {
                            fontWeight: theme('fontWeight.semibold'),
                            textDecoration: 'none',
                            color: theme('colors.white'),
                            '&:hover': {
                                color: theme('colors.indigo[200]'),
                            },
                        },
                        pre: {
                            color: theme('colors.white'),
                        },
                        code: {
                            color: theme('colors.white'),
                        },
                    },
                },
                DEFAULT: {
                    css: {
                        color: theme('colors.slate[800]'),
                        'strong, h1, h2, h3, h4': {
                            color: colors.primary,
                        },
                        blockquote: {
                            color: colors.primary,
                            borderColor: colors.dark.primary
                        },
                        'ul > li': {
                            marginTop: '10px',
                            marginBottom: '10px',
                            lineHeight: '1.3'
                        },
                        'li input': {
                            marginTop: '0px',
                            marginBottom: '0px',
                        },
                        a: {
                            fontWeight: theme('fontWeight.semibold'),
                            textDecoration: 'none',
                            borderBottom: `1px solid ${theme('colors.sky.300')}`,
                            color: theme('colors.black'),
                            '&:hover': {
                                color: theme('colors.indigo[400]'),
                                borderBottomWidth: '2px',
                            },
                        },
                        'pre code': {
                            fontWeight: theme('fontWeight.medium'),
                            fontSize: theme('fontSize.sm')[0],
                          },
                        pre: {
                            borderRadius: theme('borderRadius.lg'),
                            padding: theme('padding.5'),
                            boxShadow: theme('boxShadow.md'),
                            display: 'flex',
                            marginTop: '1em',
                            marginBottom: '1em',
                            
                          },
                        img: {
                            borderRadius: theme('borderRadius.lg'),
                            boxShadow: theme('boxShadow.xl'),
                        },
                        'img:active': {
                            scale: '1.5',
                        },
                      },
                    // css: {
                    //     blockquote: {
                    //         color: colors.primary,
                    //         borderColor: colors.dark.primary
                    //     },
                    //     'blockquote > p::before, p::after': {
                    //         color: colors.dark.primary,
                    //     },
                    //     h1: {
                    //         color: colors.dark.secondary,
                    //     },
                    //     h2: {
                    //         color: colors.dark.secondary,
                    //     },
                    //     h3: {
                    //         color: colors.dark.secondary,
                    //     },
                    // },
                },
            }),
		},
	},
    // variants: {
    //     extend: { typography: ["dark"] }
    // },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ]
};
