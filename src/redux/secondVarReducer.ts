export type SecondStateType = {
    min: string,
    max: string,
    value: string
}
export type ActionType = setMinAT | setMaxAT

const initialState = {
    min: '0',
    max: '1',
    value: '0'
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

export const secondVarReducer = (state: SecondStateType = initialState, action: ActionType): SecondStateType => {
    switch (action.type) {
        case SET_MIN:
            return {...state, min: action.payload.newMin}
        case SET_MAX:
            return {...state, max: action.payload.newMax}
        default:
            return state
    }
}