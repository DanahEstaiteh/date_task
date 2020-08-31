function fromFormat(dateString, dateFormat) {
    let dateObj = new Date(dateString);
    let timeObj = dateObj.toTimeString();
    if (dateFormat.startsWith('d')) {
        let date = dateString.split('/');
        let editFormat = date[1].concat('/', date[0]);
        let fullDate = editFormat.concat('/', dateObj.getFullYear())
        dateObj = new Date(fullDate);
    }
    return dateObj.toDateString().concat(' ', timeObj);
}

module.exports = fromFormat;