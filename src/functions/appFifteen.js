export function getDatoAgo(date, dateAgo) {
    let result = date - dateAgo;
    console.log(Math.floor(result / 1000 / 3600 / 24));
    return Math.floor(result / 1000 / 3600 / 24);
}