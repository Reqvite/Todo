import { extendTheme, Theme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import { buttonTheme } from './button'
import { checkboxTheme } from './checkbox'
import { accentColor, accentColorTransparentDarker } from './const'

const activeLabelStyles = {
  'transform': 'scale(0.85) translateY(-35px)',
}

type ColorModeType = 'light' | 'dark'

export const getTheme = (colorMode: ColorModeType): ThemeConfig => {
  return extendTheme({
    'config': {
      'initialColorMode': colorMode,
      'useSystemColorMode': true,
    },
    'styles': {
      'global': (props: Theme) => ({
        'body': {
          'fontFamily': 'body',
          'color': mode('#3D4D54', '#ffffff')(props),
          'bg': mode('#ffffff', '#202023')(props),
        },
      }),
    },
    'colors': {
      'mainBgColorLight': '#ffffff',
      'secondaryBgColorLight': '#f5f5f5',
      'secondaryBgColorLightTransparent': '#f5f5f560',
      'mainBgColorDark': '#202023',
      'secondaryBgColorDark': '#282828',
      'secondaryBgColorDarkTransparent': '#28282860',
      'mainColorLight': '#3D4D54',
      'mainColorDark': '#ffffff',
      'errorColorLight': '#F56565',
      'errorColorDark': '#E53E3E',
      'successColorLight': '#48BB78',
      'successColorDark': '#2F855A',
      'accentColor': 'rgba(144, 144, 194)',
      'accentColorTransparent': 'rgba(144, 144, 194, 0.59)',
      'accentColorTransparentDarker': 'rgba(144, 144, 194, 0.30)',
      'accentColorTransparentDarkest': 'rgba(144, 144, 194, 0.1)',
    },
    'layerStyles': {
      'primary': {
        'bgGradient': 'linear(to-r, rgba(144, 144, 194),gray)',
      },
    },
    'shadows': {
      'mainShadow': `0 0 0 3px ${accentColorTransparentDarker}`,
    },
    'borders': {
      'borderMain': `2px solid ${accentColor}`,
    },
    'sizes': {
      'headerHeight': '75px',
      'drawerFooterHeight': '113px',
      'drawerWidth': '380px',
    },
    'space': {
      'bs': '1.5rem',
      'md': '3rem',
      'lg': '4rem',
    },
    'zIndices': {
      'navbar': 100,
      'drawer': 101,
      'drawerFooter': 102,
    },
    'components': {
      'Button': buttonTheme,
      'Form': {
        'variants': {
          'floating': {
            'container': {
              '_focusWithin': {
                'label': {
                  ...activeLabelStyles,
                },
              },
              // eslint-disable-next-line max-len
              'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
                {
                  ...activeLabelStyles,
                },
              'label': {
                'top': 0,
                'left': 0,
                'zIndex': 2,
                'position': 'absolute',
                'backgroundColor': 'transparent',
                'pointerEvents': 'none',
                'mx': 3,
                'px': 1,
                'my': 3,
                'transformOrigin': 'left top',
              },
            },
          },
        },
      },
      'Input': {
        'variants': {
          'clear': {
            'field': {
              'color': accentColor,
              'width': '100%',
              'display': 'inline-block',
              'my': '0.25rem',
              'bg': 'transparent',
            },
          },
          'primary': {
            'field': {
              'color': accentColor,
              'width': '100%',
              'display': 'inline-block',
              'my': '0.25rem',
              'bg': 'transparent',
              'border': '2px solid var(--chakra-colors-accentColor)',
            },
          },
        },
      },
      'Checkbox': checkboxTheme,
    },
  })
}
