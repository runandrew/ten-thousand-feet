// Required packages
import axios from 'axios';
import { past7dates } from '../../utils';

/* -----------------    ACTIONS     ------------------ */
const SET_DATA = 'SET_DATA';

/* ------------   ACTION CREATORS     ------------------ */
const setDurationData = data => ({ type: SET_DATA, data });

/* ------------       REDUCER     ------------------ */

const initialCodeData = {
    durationData: [{
        data: [],
        start: '2016-12-10T05:00:00Z'
    }]
};

export default function reducer (codeData = initialCodeData, action) {
    switch (action.type) {
        case SET_DATA:
            return {
                durationData: action.data
            };
        default: return codeData;
    }
}

/* ------------       DISPATCHERS     ------------------ */
export const fetchCodeData = () => {
    return dispatch => {
        return axios.get('/waka?date=2016-12-20')
        .then(data => {
            dispatch(setDurationData(data.data));
        });
    };
};

export const fetchCodeData7Days = () => {
    return dispatch => {
        const convertedDates = past7dates();

        const promiseArray = convertedDates.map(date => {
            return axios.get(`/api/wakatime/durations?date=${date}`)
            .then(returnedData => returnedData.data)
            .catch(console.error);
        });

        return Promise.all(promiseArray)
        .then(data => {
            dispatch(setDurationData(data));
        })
        .catch(console.error);
    };
};