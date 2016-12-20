/* -----------------    ACTIONS     ------------------ */
const SET_DATA = 'SET_DATA';

/* ------------   ACTION CREATORS     ------------------ */
const setData = data => ({ type: SET_DATA, data });

/* ------------       REDUCER     ------------------ */
export default function reducer (data = [], action) {
    switch (action.type) {
        case SET_DATA:
            return {
                data: action.data
            };
        default: return data;
    }
}

/* ------------       DISPATCHERS     ------------------ */
export const fetchData = () => {
    return dispatch => {
        return [1];
    };
};
