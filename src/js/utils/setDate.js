export const setDate = (date) => {

    let newDate = new Date(date);
    return newDate.toLocaleDateString('ru-Latn', {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
    });

};