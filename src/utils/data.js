

export const formattedDate = (data) => {
    const dateObject = new Date(data);    
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'UTC'
    };
    return new Intl.DateTimeFormat('pt-BR', options).format(dateObject);
}