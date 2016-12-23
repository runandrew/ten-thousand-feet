// Utility functions

/* -----------------    DATE CONVERSIONS     ------------------ */

// 20161222 => 12/22/2016
export const condensedDateToSlashDate = (condensedDate) => {
    const year = condensedDate.slice(0, 4);
    const month = condensedDate.slice(4, 6);
    const day = condensedDate.slice(6, 8);
    return new Date(+year, +month - 1, +day).toLocaleDateString();
};

// 2016122200 => Thu Dec 22 2016 13:00:00 GMT-0500 (EST)
export const condensedDateToUTCWTime = (condensedDate) => {
    const year = condensedDate.slice(0, 4);
    const month = condensedDate.slice(4, 6);
    const day = condensedDate.slice(6, 8);
    const hour = condensedDate.slice(8, 10);
    return new Date(+year, +month - 1, +day, +hour + 1);
};

// 2016-12-22T05:00:00Z => 12/22/2016
export const wakaDateToSlashDate = (wakaDate) => {
    return (new Date(wakaDate)).toLocaleDateString();
};

export const dateStrToUTC = (dateStr) => {
    return new Date(dateStr);
};

export const dateUTCToDayStr = (UTCdate) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = UTCdate.getDay();
    return daysOfWeek[day];
};

// Return the past seven dates
export const past7dates = () => {
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 7; i++) {
        dates.push(today - oneDay * i);
    }

    const mappedDates = dates.map(date => new Date(date));

    function convertDate (date) { // 2016/12/10 => 2016-12-10
        const localDateSplit = date.toLocaleDateString().split('/');
        return [localDateSplit[2], localDateSplit[0], localDateSplit[1]].join('-');
    }

    return mappedDates.map(convertDate);
};


/* -----------------    API DATA MANIPULATION     ------------------ */
// Take all of the API data from Jawbone and Wakatime and combine it into an app friendly version
export const convertAllData = ({ coding, physical }) => {

    // Maps each day's coding event
    function mapCodeEvents(dayEvents) {
        let totalCodingTime = 0;
        const mappedCodeEvents = dayEvents.map(event => {
            totalCodingTime += event.duration; // keep track of total time coded
            return {
                duration: event.duration,
                project: event.project,
                time: new Date(event.time * 1000)
            };
        });

        return {
            mappedCodeEvents,
            totalCodingTime: (totalCodingTime / 60 / 60).toFixed(1) // Return coding hours to one decimal
        };
    }

    // Takes each coding day and formats it
    const mappedCodeAllData = coding.map(day => {
        const mappedCodeHourlyTotals = mapCodeEvents(day.data);
        return {
            date: wakaDateToSlashDate(day.start),
            codingData: {
                branches: day.branches,
                hourlyTotals: mappedCodeHourlyTotals.mappedCodeEvents,
                totalCodingHours: mappedCodeHourlyTotals.totalCodingTime
            }
        };
    });

    // Maps each day's hourly physical events
    function mapPhysHourlyTotals(dayHourlyTotals) {
        let totalStepCount = 0;
        const keysPhysHourlyTotals = Object.keys(dayHourlyTotals);
        return keysPhysHourlyTotals.map(hourKey => {
            totalStepCount += dayHourlyTotals[hourKey].steps; // Add current hour's steps to the total steps

            return {
                date: condensedDateToUTCWTime(hourKey),
                steps: dayHourlyTotals[hourKey].steps,
                totalSteps: totalStepCount
            };
        });
    }

    // Takes each physical day data and formats it
    const mappedPhysAllData = physical.items.map(day => {
        return {
            date: condensedDateToSlashDate('' + day.date),
            physicalData: {
                totalSteps: day.details.steps,
                totalDistance: day.details.km, // total distance travelled [km]
                hourlyTotals: mapPhysHourlyTotals(day.details.hourly_totals)
            }
        };
    });

    // Take all of the data (physical and coding) and merge the common days, target are the coding days
    const mappedAllData = mappedCodeAllData.map(codeDay => {
        const correspondingPhysDayData = mappedPhysAllData.find(physDay => codeDay.date === physDay.date);
        return Object.assign({}, codeDay, correspondingPhysDayData);
    });

    return mappedAllData;
};
