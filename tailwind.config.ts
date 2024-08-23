import type {Config} from 'tailwindcss'

import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import daisyui from 'daisyui'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    darkMode: [
        'class',
        '[data-mode="dark"]'
    ],
    theme: {
        extend: {
            transitionProperty: {
                'max-height': 'max-height'
            },
            minHeight: {
                '136': '34rem',
            },
            spacing: {
                '128': '32rem',
                '168': '42rem',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            }
        }
    },
    plugins: [
        typography,
        forms,
        daisyui
    ],
    daisyui: {
        themes: [
            "light"
        ],
    },
}
export default config
