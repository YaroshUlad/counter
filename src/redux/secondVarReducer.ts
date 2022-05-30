export type SecondStateType = {
    min: string,
    max: string,
    value: string,
    minValue: string,
    maxValue: string
}
export type ActionType = setMinAT | setMaxAT | setSettingsAT | increaseValueAT | decreaseValueAT | resetValueAT

const initialState = {
    min: '0',
    max: '1',
    value: 'Set',
    minValue: '0',
    maxValue: '0'
}

const SET_MIN = 'SET_MIN'
export const setMinAC = (newMin: string) => {
    return {
        type: SET_MIN,
        payload: {
            newMin
        }
    } as const
}
type setMinAT = ReturnType<typeof setMinAC>

const SET_MAX = 'SET_MAX'
export const setMaxAC = (newMax: string) => {
    return {
        type: SET_MAX,
        payload: {
            newMax
        }
    } as const
}
type setMaxAT = ReturnType<typeof setMaxAC>

const SET_SETTINGS = 'SET_SETTINGS'
export const setSettingsAC = () => {
    return {
        type: SET_SETTINGS,
    } as const
}
type setSettingsAT = ReturnType<typeof setSettingsAC>

const INCREASE_VALUE = 'INCREASE_VALUE'
export const increaseValueAC = (newValue: string) => {
    return {
        type: INCREASE_VALUE,
        payload: {
            newValue
        }
    } as const
}
type increaseValueAT = ReturnType<typeof increaseValueAC>

const DECREASE_VALUE = 'DECREASE_VALUE'
export const decreaseValueAC = (newValue: string) => {
    return {
        type: DECREASE_VALUE,
        payload: {
            newValue
        }
    } as const
}
type decreaseValueAT = ReturnType<typeof decreaseValueAC>

const RESET_VALUE = 'RESET_VALUE'
export const resetValueAC = () => {
    return {
        type: RESET_VALUE
    } as const
}
type resetValueAT = ReturnType<typeof resetValueAC>


export const secondVarReducer = (state: SecondStateType = initialState, action: ActionType): SecondStateType => {
    switch (action.type) {
        case SET_MIN:
            if (action.payload.newMin === '') {
                state.value = 'min is required'
                return {...state, min: '0'}
            } else if (!Number.isInteger(+action.payload.newMin)) {
                state.value = 'Value can not be not integer'
                return {...state, min: action.payload.newMin}
            } else if (+action.payload.newMin < 0 || +state.max < 0) {
                state.value = 'Value can not be negative'
                return {...state, min: action.payload.newMin}
            } else {
                if (+action.payload.newMin >= +state.max) {
                    state.value = 'max can not be smaller or equal than min'
                } else {
                    state.value = 'Set'
                }
                return {...state, min: action.payload.newMin}
            }
        case SET_MAX:
            if (action.payload.newMax === '') {
                state.value = 'max is required'
                return {...state, max: '0'}
            } else if (!Number.isInteger(+action.payload.newMax)) {
                state.value = 'Value can not be not integer'
                return {...state, max: action.payload.newMax}
            } else if (+action.payload.newMax < 0 || +state.min < 0) {
                state.value = 'Value can not be negative'
                return {...state, max: action.payload.newMax}
            } else if (+action.payload.newMax <= +state.min) {
                state.value = 'max can not be smaller or equal than min'
            }else {
                state.value = 'Set'
            }
            return {...state, max: action.payload.newMax}
        case SET_SETTINGS:
            return {...state, minValue: state.min, maxValue: state.max, value: state.min}
        case INCREASE_VALUE:
            return {...state, value: action.payload.newValue}
        case DECREASE_VALUE:
            return {...state, value: action.payload.newValue}
        case RESET_VALUE:
            return {...state, value: state.minValue}
        default:
            return state
    }
}

export const getMin = (state: SecondStateType) => state.min
export const getMax = (state: SecondStateType) => state.max
export const getValue = (state: SecondStateType) => state.value