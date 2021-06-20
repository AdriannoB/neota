import React, { useEffect, useReducer } from 'react'
import Select from 'react-select'

import { Grid, Modal, Table, Text } from '../../../ui'
import { getApi, prepareTableData } from '../../../utils'

import { columns } from './components/table-columns'
import {
  periodOptions,
  typeOptions,
  countryOptions,
} from './components/select-options'
import {
  tableViewReducer,
  initialState,
  ActionKind,
} from './table-view.reducer'
import {
  getSelectedCountry,
  getSelectedPeriod,
  getSelectedType,
} from './components/handlers'

export const TableView = () => {
  const [state, dispatch] = useReducer(tableViewReducer, initialState)

  const { tableData, selectedPeriod, selectedCountry, selectedType, isModalVisible } = state

  const getWeatherData = async () => {
    const periodSelected = periodOptions.filter(
      (item) => item.value === selectedPeriod
    )

    const typeSelected = typeOptions.filter(
      (item) => item.value === selectedType
    )

    const countrySelected = countryOptions.filter(
      (item) => item.value === selectedCountry
    )

    const { start, end } = periodSelected[0]

    return await getApi({
      code: 'mavg',
      type: typeSelected[0].value,
      start: start,
      end: end,
      country: countrySelected[0].value,
    })
  }

  useEffect(() => {
    getWeatherData().then((res) =>
      dispatch({ type: ActionKind.setTableData, payload: res })
    )
  }, [selectedPeriod, selectedCountry, selectedType])

  return (
    <>
      <Grid p="3rem">
        <Grid gridTemplateColumns="max-content max-content">
          <h2 style={{ marginBottom: 0 }}>Table view</h2>
          <button onClick={() => dispatch({ type: ActionKind.handleModal })}>Add data point</button>
        </Grid>
        <Grid gridTemplateColumns="repeat(3, 1fr)">
          <Select
            options={periodOptions}
            value={getSelectedPeriod(selectedPeriod)}
            onChange={(e) =>
              dispatch({ type: ActionKind.setFilterPeriod, payload: e?.value })
            }
            placeholder="Select period..."
          />
          <Select
            options={typeOptions}
            value={getSelectedType(selectedType)}
            onChange={(e) =>
              dispatch({ type: ActionKind.setFilterType, payload: e?.value })
            }
            placeholder="Select type..."
          />
          <Select
            options={countryOptions}
            value={getSelectedCountry(selectedCountry)}
            onChange={(e) =>
              dispatch({ type: ActionKind.setFilterCountry, payload: e?.value })
            }
            placeholder="Select country..."
          />
        </Grid>
        {tableData && (
          <Table columns={columns} data={prepareTableData(tableData.data)} />
        )}
      </Grid>
      <Modal title='Form' open={isModalVisible}>
        <Text>Some form</Text>
        <button onClick={() => dispatch({ type: ActionKind.handleModal})}>Close</button>
      </Modal>
    </>
  )
}
