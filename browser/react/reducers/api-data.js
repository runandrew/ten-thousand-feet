
// Required packages
import axios from 'axios';
import { past7dates, convertAllData } from '../../utils';

/* -----------------    ACTIONS     ------------------ */
const SET_DATA = 'SET_DATA';
const SET_FETCH_STATUS = 'SET_FETCH_STATUS';

/* ------------   ACTION CREATORS     ------------------ */
const setDayData = data => ({ type: SET_DATA, data });

/* ------------       REDUCER     ------------------ */

const initialData = {
    allDays: [{
        date: '12/22/2016',
        codingData: {
            branches: [],
            hourlyTotals: [],
            totalCodingHours: 0
        },
        physicalData: {
            hourlyTotals: [],
            totalDistance: 0,
            totalSteps: 0
        }
    }],
    isFetching: true,
    lastFetched: new Date(0)
};

export default function reducer (dayData = initialData, action) {
    switch (action.type) {
        case SET_DATA: {
            return Object.assign({}, dayData,
                {
                    allDays: action.data,
                    isFetching: false,
                    lastFetched: new Date()
                }
            );
        }
        case SET_FETCH_STATUS: {
            return Object.assign({}, dayData, { isFetching: action.data });
        }
        default: return dayData;
    }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchCodeData7Days = () => {
    return dispatch => {

        const convertedDates = past7dates();

        // Get all the coding data
        const promiseArrayCodeData = convertedDates.map(date => {
            return axios.get(`/api/wakatime/durations?date=${date}`)
            .then(returnedData => returnedData.data)
            .catch(console.error);
        });

        // Get all the phycial data
        const promisePhysicalData = axios.get('/api/jawbone/moves')
        .then(returnedData => returnedData.data)
        .catch(console.error);

        // Wait for all the promises to resolve/reject then convert the data
        return Promise.all([...promiseArrayCodeData, promisePhysicalData])
        .then(data => {
            const allData = {
                coding: data.slice(0, -1),
                physical: data[data.length - 1]
            };
            const actionData = setDayData(convertAllData(allData));
            dispatch(actionData);
        })
        .catch(console.error);
    };
};
