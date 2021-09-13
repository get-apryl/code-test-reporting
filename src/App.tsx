import React, {useEffect, useState} from 'react'
import {Box, Theme, Typography, useTheme} from '@material-ui/core'
import {createStyles, makeStyles} from '@material-ui/core/styles'
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {Trans, useTranslation} from 'react-i18next'
import Dinero from 'dinero.js'

interface ApiData {
  month: number
  total: {
    amount: number // Decimal as int: 1.42 => 142
    currency: string
  }

  average: {
    amount: number
    currency: string
  }
}

interface ReimbursementData {
  total: number
  average: number
  totalMoney: Dinero.Dinero
  averageMoney: Dinero.Dinero
  month: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    reimbursementContainer: {
      width: 600,
      border: `1px solid ${theme.brandColors.darkGrey}`,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: theme.spacing(5),
    },
    averageText: {
      fontSize: 10,
      fontWeight: 700,
      color: theme.palette.primary.dark,
    },
    averageDot: {
      border: '1px solid transparent',
      borderRadius: 7.5,
      backgroundColor: theme.palette.primary.dark,
      height: 8,
      width: 8,
      marginRight: theme.spacing(0.5),
    },
    customToolTip: {
      border: '1px solid rgba(229, 229, 229, 1)',
      backgroundColor: theme.brandColors.white,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
    },
    claimedAmount: {
      color: theme.brandColors.darkCornflowerBlue,
      fontWeight: 700,
    },
  })
)

const userLocale = 'de-DE'
const mockData: ApiData[] = [
  {
    month: 1,
    total: {
      amount: 100,
      currency: 'EUR',
    },
    average: {
      amount: 100,
      currency: 'EUR',
    },
  },
]

function setMyLocale(dinero: Dinero.Dinero) {
  return dinero.setLocale(userLocale)
}

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const Reimbursement: React.FC = () => {
  const {t} = useTranslation('Reporting')
  const classes = useStyles()
  const [reimbursementData, setReimbursementData] = useState<
    ReimbursementData[]
  >([])
  const theme = useTheme()

  useEffect(() => {
    const claimsData = mockData.map(function (item, index) {
      const totalMoney = Dinero(item.total as Dinero.Options)
      const averageMoney = Dinero(item.average as Dinero.Options)
      return {
        total: totalMoney.toUnit(),
        average: averageMoney.toUnit(),
        totalMoney,
        averageMoney,
        month: months[index],
      }
    })
    setReimbursementData(claimsData)
  }, [])

  const last_running_average = reimbursementData
    .slice()
    .reverse()
    .find((data) => data.average > 0)
  const average = last_running_average?.averageMoney || Dinero({amount: 0})
  const averagePerMonth =
    average.getAmount() > 0 ? setMyLocale(average).toFormat() : '0'

  let barToolTip = false
  const CustomTooltip = ({active, payload: graphData}: any) => {
    const BARGRAPH = 0
    if (active && graphData && graphData.length && barToolTip) {
      const total = setMyLocale(graphData[BARGRAPH].payload.totalMoney)
      const formattedTotal = total.getAmount() > 0 ? total.toFormat() : '0'

      return (
        <Box className={classes.customToolTip}>
          <Box>
            <Typography variant='caption'>{t('Claimed:')}&nbsp;</Typography>
            <Typography variant='caption' className={classes.claimedAmount}>
              {formattedTotal}
            </Typography>
          </Box>
        </Box>
      )
    }

    return null
  }

  return (
    <Box className={classes.reimbursementContainer}>
      <Box pl={2.5} pt={1.5} display='flex'>
        <Box>
          <Typography variant='subtitle1'>
            {t('Reimbursement Claims')}
          </Typography>
          <Typography variant='caption'>
            {t('awarded by OVIAVO to Members')}
          </Typography>
        </Box>
        <Box ml={'auto'} pr={3}>
          <Box
            display='flex'
            alignItems='center'
            mt={1}
            justifyContent={'flex-end'}
          >
            <Box className={classes.averageDot} />
            <Typography variant={'caption'} className={classes.averageText}>
              <Trans i18nKey={'average-spending-per-month'}>
                Avg. <strong>{averagePerMonth}</strong> reimbursed per month
              </Trans>
            </Typography>
          </Box>
        </Box>
      </Box>

      <ComposedChart
        width={620}
        height={172}
        data={reimbursementData}
        margin={{top: 30, right: 65, bottom: 5, left: 5}}
        barCategoryGap={32}
      >
        <ReferenceLine
          segment={[
            {
              x: 'Jan',
              y: average.getAmount(),
            },
            {
              x: 'Dec',
              y: average.getAmount(),
            },
          ]}
          strokeWidth={0}
          ifOverflow='extendDomain'
          isFront={true}
        />

        <CartesianGrid strokeDasharray=' 3' vertical={false} />
        <XAxis
          dataKey='month'
          axisLine={false}
          tickLine={false}
          tick={{fill: 'rgba(64, 63, 63, 0.38)', fontSize: 10}}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{fill: 'rgba(64, 63, 63, 0.38)', dx: -5, fontSize: 9}}
        />
        <Bar
          dataKey='total'
          fill={theme.brandColors.darkCornflowerBlue}
          onMouseOver={() => (barToolTip = true)}
          onMouseOut={() => (barToolTip = false)}
          isAnimationActive={false}
        />
        <Line
          type='monotone'
          dataKey='average'
          stroke={theme.brandColors.middleBlue}
          dot={false}
          activeDot={false}
          strokeWidth={2}
          isAnimationActive={false}
        />
        <Tooltip content={<CustomTooltip />} cursor={false} offset={15} />
      </ComposedChart>
    </Box>
  )
}
