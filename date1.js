function fromFormat(date_string,date_format){
   date_obj = new Date(date_string);
   obj_time=date_obj.toTimeString();
   if(date_format.startsWith('d')){
    date=date_string.split('/');
    year =  date_obj.getFullYear();
    month =  date[1];
    day =  date[0];
    edit_format=date[1].concat('/', date[0]);
    full_date=edit_format.concat('/',date_obj.getFullYear())
    date_obj=new Date(full_date);
   }
    return date_obj.toDateString().concat(' ', obj_time);
}

module.exports=fromFormat;