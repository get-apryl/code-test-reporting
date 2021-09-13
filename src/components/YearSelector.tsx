import React, {FC} from 'react'
import {Box, Button, Theme, Typography} from '@material-ui/core'
import {createStyles, makeStyles} from '@material-ui/core/styles'
import {useTranslation} from 'react-i18next'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    yearLine: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    yearText: {
      marginRight: theme.spacing(1),
    },
    buttonRoot: {
      height: theme.spacing(3),
      color: theme.brandColors.darkGrey,
    },
    buttonSizeSmall: {
      fontSize: 12,
      lineHeight: '1.5',
    },
    buttonContained: {
      backgroundColor: theme.brandColors.white,
      '&:hover': {
        backgroundColor: theme.brandColors.white,
      },
    },
    buttonContainedActive: {
      backgroundColor: theme.brandColors.middleBlue,
      fontWeight: 700,
      '&:hover': {
        backgroundColor: theme.brandColors.middleBlue,
      },
    },
    buttonContainedSizeSmall: {
      padding: `0 ${theme.spacing(1)}px`,
    },
  })
)

export interface YearSelectorProps {
  activeYearIndex: number
  setYearIndex: React.Dispatch<React.SetStateAction<number>>
  chartYears: number[]
}

export const YearSelector: FC<YearSelectorProps> = (props) => {
  const {activeYearIndex, setYearIndex, chartYears} = props
  const classes = useStyles()
  const {t} = useTranslation()
  return (
    <Box className={classes.yearLine}>
      <Typography className={classes.yearText} variant='caption'>
        {t('Year')}
      </Typography>
      {chartYears.map((chartYear: number, index: number) => (
        <Button
          onClick={() => setYearIndex(index)}
          key={index}
          variant={'contained'}
          classes={{
            root: classes.buttonRoot,
            sizeSmall: classes.buttonSizeSmall,
            contained:
              index === activeYearIndex
                ? classes.buttonContainedActive
                : classes.buttonContained,
            containedSizeSmall: classes.buttonContainedSizeSmall,
          }}
          size={'small'}
        >
          {chartYear}
        </Button>
      ))}
    </Box>
  )
}
