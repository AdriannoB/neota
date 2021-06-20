export const prepareTableData = (data: any) =>
  data.map((row: any) => ({
    col1: row.monthVals[0],
    col2: row.monthVals[1],
    col3: row.monthVals[2],
    col4: row.monthVals[3],
    col5: row.monthVals[4],
    col6: row.monthVals[5],
    col7: row.monthVals[6],
    col8: row.monthVals[7],
    col9: row.monthVals[8],
    col10: row.monthVals[9],
    col11: row.monthVals[10],
    col12: row.monthVals[11],
  }))
