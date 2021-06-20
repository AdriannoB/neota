import React, { useEffect, useState } from 'react'

import { Grid, Table } from '../../../ui'
import { getApi, prepareTableData } from '../../../utils'

import { columns } from './components/table-columns'

export const TableView = () => {
  const [tableData, setTableData] = useState<any>()

  const getWeatherData = async () => {
    return await getApi({
      code: 'mavg',
      type: 'pr',
      start: 1940,
      end: 1959,
      country: 'HRV',
    })
  }

  useEffect(() => {
    // 1. get filters
    // 2. find if data exists in store
    // 3. if not, call api
    getWeatherData().then((res) => setTableData(res))
  }, [])



  return (
    <Grid>
      <h2>Table view</h2>
      {tableData && <Table columns={columns} data={prepareTableData(tableData.data)} />}
    </Grid>
  )
}
