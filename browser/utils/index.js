// Utility functions

export const dateStrToUTC = (dateStr) => {
    return new Date(dateStr);
};

export const dateUTCToDayStr = (UTCdate) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = UTCdate.getDay();
    return daysOfWeek[day];
};

export const past7dates = () => {
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

    return mappedDates.map(convertDate);
};
