// Utility functions

export const dateStrToUTC = (dateStr) => {
    return new Date(dateStr);
};

export const dateUTCToDayStr = (UTCdate) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = UTCdate.getDay();
    return daysOfWeek[day];
};
