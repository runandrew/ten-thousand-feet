// Required packages
import axios from 'axios';

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
        const oneDay = 24 * 60 * 60 * 1000;
        const today = new Date();
        const dates = [];
        for (let i = 0; i < 7; i++) {
            dates.push(today - oneDay * i);
        }

        const mappedDates = dates.map(date => new Date(date));

        function convertDate (date) {
            const localDateSplit = date.toLocaleDateString().split('/');
            return [localDateSplit[2], localDateSplit[0], localDateSplit[1]].join('-');
        }
        const convertedDates = mappedDates.map(convertDate);

        const promiseArray = convertedDates.map(date => {
            return axios.get(`/waka?date=${date}`)
            .then(returnedData => returnedData.data);
        });

        return Promise.all(promiseArray)
        .then(data => {
            dispatch(setDurationData(data))
        });
    };
};
