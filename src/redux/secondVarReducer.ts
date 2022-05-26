export type SecondStateType = {
    min: string,
    max: string,
    value: string,
    minValue: string,
    maxValue: string
}
export type ActionType = setMinAT | setMaxAT | setSettingsAT

const initialState = {
    min: '0',
    max: '0',
    value: '0',
    minValue: '',
    maxValue: ''
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

export const secondVarReducer = (state: SecondStateType = initialState, action: ActionType): SecondStateType => {
    switch (action.type) {
        case SET_MIN:
            return {...state, min: action.payload.newMin}
        case SET_MAX:
            return {...state, max: action.payload.newMax}
        case SET_SETTINGS:
            return {...state, minValue: state.min, maxValue: state.max}
        default:
            return state
    }
}