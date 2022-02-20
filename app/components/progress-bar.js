import React from 'react'
import { createUseStyles } from 'react-jss'

export default function ProgressBar(props) {
    const { className, percentDone } = props
    const classes = useStyles(props)
    return <progress value={percentDone / 100} className={`${classes.progressBar} ${className}`} />
}

const useStyles = createUseStyles(theme => ({
    progressBar: () => ({
        width: '100%',
        height: '1em',
        borderRadius: theme.defaultBorderRadius,
        '&::-moz-progress-bar, &::-webkit-progress-value': {
            borderRadius: [theme.defaultBorderRadius, 0, 0, theme.defaultBorderRadius],
            backgroundColor: theme.colorPrimary,
        },
    }),
}))
