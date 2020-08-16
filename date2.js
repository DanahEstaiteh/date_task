const MMM = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MMMM = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
function format(date_obj,format){
   format=format.toLowerCase();
    day=date_obj.getDate();
    month=date_obj.getMonth()+1;
    year=date_obj.getFullYear()+"";
    function two_digit(date){
       if(date <10){
         return "0"+date;
       }
     return date;
    }
   format = format.replace("yyyy", "" + year);
    format = format.replace("yy", "" + year.toString().substr(2, 2));
    format = format.replace("y", "" + year);

   
    format = format.replace("mmmm" , "" +MMMM[month-1]);
    format = format.replace("mmm" ,"" + MMM[month-1]);
    format = format.replace("mm", "" + two_digit(month));
    format = format.replace("m" , "" + month);

   
    format = format.replace("dd", "" +two_digit(day));
    format = format.replace("d", "" +day);
     return format;
    
    }
    module.exports=format;