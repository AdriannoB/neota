import { periodOptions, countryOptions, typeOptions } from './components/select-options'

export enum ActionKind {
  setTableData = "setTableData",
  setFilterPeriod = 'setFilterPeriod',
  setFilterType = 'setFilterType',
  setFilterCountry = 'setFilterCountry',
  handleModal = 'handleModal'
}

interface InitialStateProps {
  tableData: any
  selectedPeriod?: any,
  selectedCountry?: any,
  selectedType?: any,
  isModalVisible: boolean
}

type Action = {
  type: ActionKind
  payload?: any
}

export const initialState = {
  tableData: null,
  selectedPeriod: periodOptions[0].value,
  selectedCountry: countryOptions[0].value,
  selectedType: typeOptions[0].value,
  isModalVisible: false
}

export const tableViewReducer = (state: InitialStateProps, action: Action): InitialStateProps => {
  switch (action.type) {
    case ActionKind.setFilterPeriod:
      return {
        ...state,
        selectedPeriod: action.payload,
      }
    case ActionKind.setFilterType:
      return {
        ...state,
        selectedType: action.payload,
      }
    case ActionKind.setFilterCountry:
      return {
        ...state,
        selectedCountry: action.payload
      }
      case ActionKind.setTableData:
      return {
        ...state,
        tableData: action.payload
      }
    case ActionKind.handleModal:
      return {
        ...state,
        isModalVisible: !state.isModalVisible,
      }
    default:
      return state
  }
}