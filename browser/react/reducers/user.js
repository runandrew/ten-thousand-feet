// Required packages
import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
const SET_USER = 'SET_USER';

/* ------------   ACTION CREATORS     ------------------ */
const setUser = user => ({ type: SET_USER, user });

/* ------------       REDUCER     ------------------ */

const initialUser = {
    noUser: true
};

export default function reducer (user = initialUser, action) {
    switch (action.type) {
        case SET_USER:
            return action.user;
        default: return user;
    }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchUser = () => {
    return dispatch => {
        return axios.get('/auth/me')
        .then(data => {
            dispatch(setUser(data.data));
        });
    };
};
