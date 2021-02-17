export function getCurrentDate(separator=' '){

    let newDate = new Date()
    let date = newDate.getDate();

    let convert = new Array();
    convert[0] = "January";
    convert[1] = "February";
    convert[2] = "March";
    convert[3] = "April";
    convert[4] = "May";
    convert[5] = "June";
    convert[6] = "July";
    convert[7] = "August";
    convert[8] = "September";
    convert[9] = "October";
    convert[10] = "November";
    convert[11] = "December";
    let month = convert[newDate.getMonth() + 1];

    let year = newDate.getFullYear();
    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
}

export function getCurrentTime(date){
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
}

const Timestamp = () => {
    return(
        <div className="flex items-center mt-1 text-xs text-gray-600">
            <p>{getCurrentDate()}</p>
            <p className="ml-1 mr-1">•</p>
            <p>{getCurrentTime(new Date())}</p>
        </div>
    );
};

export default Timestamp

