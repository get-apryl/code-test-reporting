import {createTheme} from '@material-ui/core/styles'
import {AlertClassKey, AlertTitleClassKey} from '@material-ui/lab'
import {SkeletonClassKey} from '@material-ui/lab/Skeleton'
import React from 'react'

export type BrandColors = {
  darkCornflowerBlue: string
  softPink: string
  seashell: string
  middleBlue: string
  lightCoral: string
  darkGrey: string
  white: string
}

export type ConstValues = {
  appHeaderHeight: React.CSSProperties['height']
  borderWidth: React.CSSProperties['width']
}

declare module '@material-ui/core/styles/overrides' {
  // noinspection JSUnusedGlobalSymbols
  export interface ComponentNameToClassKey {
    MuiSkeleton: SkeletonClassKey
    MuiAlert: AlertClassKey
    MuiAlertTitle: AlertTitleClassKey
  }
}

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    brandColors: BrandColors
    constValues: ConstValues
  }
  interface ThemeOptions {
    brandColors: BrandColors
    constValues: ConstValues
  }
}

const brandColors: BrandColors = {
  darkCornflowerBlue: '#2D3E91',
  softPink: '#FFD1CC',
  seashell: '#FFF3EC',
  middleBlue: '#91CED2',
  lightCoral: '#F86969',
  darkGrey: '#403F3F',
  white: '#FFFFFF',
}

const constValues = {
  appHeaderHeight: 64,
  borderWidth: 3,
}

export default createTheme({
  // Add customized property
  brandColors,
  constValues,
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 540,
      md: 896,
      lg: 1280,
      xl: 1920,
    },
  },
  props: {
    MuiAccordion: {elevation: 0},
    MuiCard: {elevation: 0},
    MuiGrid: {
      spacing: 2,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableElevation: true,
      disableTouchRipple: true,
      disableFocusRipple: true,
    },
    MuiLink: {
      underline: 'always',
    },
    MuiInputBase: {},
  },
  // TODO : Override default design for inputs
  overrides: {
    MuiContainer: {
      disableGutters: {},
    },
    MuiAlert: {
      standardInfo: {
        '& .MuiAlert-icon': {
          color: 'inherit',
        },
      },
    },
    MuiSelect: {
      outlined: {
        // background: 'none',
      },
      select: {
        '&:focus': {
          backgroundColor: 'none',
        },
      },
    },
    MuiAlertTitle: {
      root: {
        fontWeight: 700,
      },
    },
    MuiDialogTitle: {
      root: {
        fontWeight: 600,
      },
    },
    MuiTypography: {
      root: {letterSpacing: '0.15px'},
    },
    MuiAccordion: {
      root: {
        borderBottom: `solid 1px rgba(0, 0, 0, 0.12)`,
        '&::before': {
          backgroundColor: 'transparent',
        },
        '&$expanded': {
          margin: 0,
        },
      },
    },
    MuiAccordionSummary: {
      root: {
        padding: 0,
        paddingRight: 16,
        backgroundColor: 'transparent',
      },
    },
    MuiAccordionDetails: {
      root: {
        padding: '12px 16px 12px 0',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'unset',
        fontSize: 16,
        minWidth: 36,
        height: 36,
      },
      sizeSmall: {
        fontSize: 14,
        lineHeight: '18px',
      },
      sizeLarge: {
        fontSize: 18,
        height: 42,
      },
      outlinedSizeSmall: {
        borderWidth: 1,
        padding: '3px 12px',
        fontWeight: 600,
      },
      containedSizeSmall: {
        padding: '8px 16px',
      },
      contained: {
        color: brandColors.darkCornflowerBlue,
        backgroundColor: brandColors.white,
      },
      containedSizeLarge: {
        fontWeight: 'bold',
        paddingRight: 48,
        paddingLeft: 48,
      },
      outlined: {
        borderWidth: 2,
        borderColor: '#DEDFE4',
        // padding: '8px 0',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: brandColors.darkGrey,
        },
      },
      label: {
        lineHeight: 'normal',
      },
    },
    MuiTextField: {
      root: {},
    },
    MuiLink: {
      root: {
        // color: brandColors.darkCornflowerBlue,
        fontSize: '16px',
      },
      underlineHover: {
        cursor: 'pointer',
      },
    },
    MuiInputLabel: {
      root: {
        '&$disabled': {
          opacity: 0.5,
        },
      },
    },
    MuiFormHelperText: {
      root: {
        fontSize: '12px',
      },
      contained: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
    MuiOutlinedInput: {
      root: {
        '&$disabled $notchedOutline': {
          borderColor: brandColors.darkGrey,
        },
        '&$disabled': {
          opacity: 0.5,
        },
      },
      notchedOutline: {
        // border: 'none'
        borderWidth: 2,
        borderColor: brandColors.darkGrey,
      },
      input: {
        borderColor: '#403F3F',
        borderWidth: 3,
      },
      inputMarginDense: {
        '&$notchedOutline': {
          borderWidth: 2,
          borderColor: brandColors.darkGrey,
        },
      },
    },
    MuiCardContent: {
      root: {
        padding: '20px',
      },
    },
    MuiPopover: {
      paper: {
        boxShadow:
          '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)',
      },
    },
    MuiList: {
      padding: {paddingTop: 0, paddingBottom: 0},
    },
    MuiListItemText: {
      root: {
        fontSize: 14,
      },
      primary: {
        fontSize: 14,
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 36,
      },
    },
  },
  palette: {
    background: {default: brandColors.white!},
    primary: {
      main: brandColors.middleBlue!,
    },
    secondary: {
      // light: "#F06191",
      main: brandColors.darkCornflowerBlue!,
      // dark: "#BE134D",
    },
    action: {
      disabled: '#fff',
      disabledBackground: 'rgba(64, 63, 63, 0.38)',
    },
    text: {
      primary: brandColors.darkGrey,
      secondary: brandColors.darkGrey,
      disabled: '#403F3F, 38%',
    },
    error: {
      main: '#F86969',
    },
    warning: {
      main: '#FFBD5C',
    },
    info: {
      main: '#2196F3',
    },
    success: {
      main: '#6ECC71',
    },
  },
  typography: {
    fontFamily: 'DM Sans',
    h1: {
      fontFamily: 'Spartan',
      fontWeight: 'bold',
      fontSize: '34px',
      lineHeight: '48px',
      letterSpacing: '-1.5px',
    },
    h2: {
      fontFamily: 'Spartan',
      fontWeight: 'bold',
      fontSize: '24px',
      lineHeight: '140%',
    },
    h3: {
      fontFamily: 'Spartan',
      fontSize: '24px',
      lineHeight: '140%',
    },
    h4: {
      fontFamily: 'Spartan',
      fontSize: '18px',
      fontWeight: 'bold',
      letterSpacing: '0.25px',
      lineHeight: '140%',
    },
    h5: {
      fontFamily: 'Spartan',
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '21px',
      letterSpacing: '0.15px',
    },
    h6: {
      fontFamily: 'Spartan',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '20px',
      letterSpacing: '0.15px',
    },
    subtitle1: {
      // fontFamily: "Spartan",
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.15px',
      color: 'rgba(64, 63, 63, 1)',
    },
    subtitle2: {
      fontWeight: 'bold',
      fontSize: '12px',
      lineHeight: '157%',
      letterSpacing: '0.1px',
    },
    body1: {
      fontSize: '16px',
      lineHeight: '20px',
      letterSpacing: '0.15px',
    },
    body2: {
      fontSize: '14px',
      lineHeight: '140%',
      letterSpacing: '0.15px',
    },
    caption: {
      fontSize: '12px',
      lineHeight: '160%',
      letterSpacing: '0.4px',
    },
  },
  shape: {
    borderRadius: 0,
  },
})
