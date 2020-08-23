function fromFormat(dateString,dateFormat){
   dateObj = new Date(dateString);
   timeObj=dateObj.toTimeString();
   if(dateFormat.startsWith('d')){
    date=dateString.split('/');
    year =  dateObj.getFullYear();
    month =  date[1];
    day =  date[0];
    editFormat=date[1].concat('/', date[0]);
    fullDate=editFormat.concat('/',dateObj.getFullYear())
    dateObj=new Date(fullDate);
   }
    return dateObj.toDateString().concat(' ', timeObj);
}

module.exports=fromFormat;