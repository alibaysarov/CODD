export const formatDate = (date: string) => {
    const dateObj = new Date(date);
    const datePart = dateObj.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    });

    const timePart = dateObj.toLocaleTimeString('en-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric'
    });

    const formattedDatetime = `${datePart} - ${timePart}`;

    return formattedDatetime;
}