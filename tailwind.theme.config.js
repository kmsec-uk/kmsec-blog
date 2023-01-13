const colors = require('tailwindcss/colors')

module.exports = {
    default: {
        colors: {
            primary: colors.slate[700],
            secondary: colors.slate[800],
            dark: {
                primary: colors.slate[200],
                secondary: colors.slate[300]
            },
            // accent: {
            //     gray: {
            //         light: colors.indigo[700],
            //         dark: colors.indigo[400]
            //     },
            //     default: colors.slate[700]
            // }
        }
    }
}