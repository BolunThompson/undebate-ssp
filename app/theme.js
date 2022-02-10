const theme = {
    // UI Colors
    colorPrimary: '#7470FF',
    colorSecondary: '#262D33',
    colorWarning: '#EE6055',
    colorSuccess: '#46941B',

    // Can be combined with UI colors to create a 'disabled' version
    disabledOpacity: '0.3',

    // Can be applied to text used to add more description to things such as text used to give info about an input field
    secondaryTextOpacity: '0.7',
    secondaryTextFontSize: '0.875rem',

    // Background Colors
    backgroundColorApp: '#ECECEC',
    backgroundColorWarning: 'rgba(238, 96, 85, 0.25)',
    backgroundColorComponent: 'rgba(38, 45, 51, 0.2)',

    // Sizing
    defaultBorderRadius: '0.625rem',
    iconSize: '1.25rem',

    // instead of using these 2 - try using { ...theme.button, from below and override if needed
    buttonPadding: '0.9375rem 1.875rem',
    buttonBorderRadius: '1.875rem',

    button: {
        padding: '0.9375rem 1.875rem',
        borderRadius: '1.875rem',
        borderColor: '#262D331A',
        fontSize: '1rem',
        fontWeight: 600,
        fontFamily: 'Poppins',
        lineHeight: '1.25rem', // in figma it's 24/16 but it didn't render the same so this is 20/16
    },

    inputFieldPadding: '1rem 1.25rem',
    inputFieldFontSize: '1.125rem',
    inputFieldLineHeight: '1.6875rem',
    inputFieldBackgroundColor: 'rgba(38, 45, 51, 0.1)',

    // Use for things like Election Header and Section Header
    headerFontSize: '1.125rem',

    //Font
    defaultFontFamily: 'Poppins',

    gap: '1.875rem',
}

export default theme
