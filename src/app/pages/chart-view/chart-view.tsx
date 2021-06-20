import React, { useEffect, useState } from 'react'

import { Grid, Text } from '../../../ui'
import { getApi } from '../../../utils'

export const ChartView = () => {
  const [data, setData] = useState()

  // 1. selet na type (pr | tas)
  // 2. select na start - end date
  // 3. select na country

  const getWeatherData = async () => {
    return await getApi({
      code: 'annualavg',
      type: 'pr',
      start: 1920,
      end: 1939,
      country: 'HRV',
    })
  }

  useEffect(() => {
    getWeatherData().then((res) => setData(res))
  }, [])

  console.log(data)

  return (
    <Grid>
      <h2>Chart view</h2>
      <Text>Some Chart view content</Text>
    </Grid>
  )
}
