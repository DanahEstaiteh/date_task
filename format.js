
const MMM = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MMMM = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function format(dateObj, format) {
   format = format.toLowerCase();
   let day = dateObj.getDate();
   let month = dateObj.getMonth() + 1;
   let year = dateObj.getFullYear().toString();

   format = format.replace("yyyy", "" + year);
   format = format.replace("yy", "" + year.toString().substr(2, 2));
   format = format.replace("y", "" + year);


   format = format.replace("mmmm", "" + MMMM[month - 1]);
   format = format.replace("mmm", "" + MMM[month - 1]);
   format = format.replace("mm", month.toString().padStart(2, "0"));
   format = format.replace("m", "" + month);


   format = format.replace("dd", day.toString().padStart(2, "0"));
   format = format.replace("d", "" + day);
   return format;

}
module.exports = format;