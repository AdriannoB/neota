import React from 'react'
import { Grid, Text } from '../../../../ui'
import { ActionKind } from '../table-view.reducer'

export const renderModalContent = (dispatch: any) => {
  return (
    <>
      <Text>Some form</Text>
      <Grid gridTemplateColumns='1fr 1fr'>
        <input type="text" placeholder='January' />
        <input type="text" placeholder='February' />
        <input type="text" placeholder='March' />
        <input type="text" placeholder='April' />
        <input type="text" placeholder='MAy' />
        <input type="text" placeholder='June' />
        <input type="text" placeholder='July' />
        <input type="text" placeholder='August' />
        <input type="text" placeholder='September' />
        <input type="text" placeholder='October' />
        <input type="text" placeholder='November' />
        <input type="text" placeholder='December' />
        <button onClick={() => dispatch({ type: ActionKind.handleModal })}>
          Close
        </button>
        <button onClick={() => dispatch({ type: ActionKind.handleModal })}>
          Submit
        </button>
      </Grid>
    </>
  )
}
