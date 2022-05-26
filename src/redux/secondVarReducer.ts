type SecondStateType = {
    min: number,
    max: number,
    value: string
}
type ActionType = {
    type: string
}

const initialState = {
    min: 0,
    max: 0,
    value: '0'
}

const SET_MIN = 'SET_MIN'
export const setMinAC = () => {
    return {
        type: SET_MIN
    } as const
}

export const secondVarReducer = (state: SecondStateType = initialState, action: ActionType): SecondStateType => {
    switch (action.type){
        case '':
            return state
        default:
            return state
    }
    return state
}