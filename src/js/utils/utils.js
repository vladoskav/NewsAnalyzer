export const utils = (date) => {

    let newDate = new Date(date);
    return newDate.toLocaleDateString('ru-Latn', {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
    });

};
export const occurrence = (string, substring) => {
    let counter = 0;
    let sub = substring.toLowerCase();
    let str = string.toLowerCase();
    let arr = [];
    let index = -1;

    do {
        index = str.indexOf(sub, index + 1);
        if (index !== -1) {
            arr[counter++] = index;
            let i = index;
        }
    } while (index !== -1);

    return counter;
};