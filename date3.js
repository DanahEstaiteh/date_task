function add(dateObj,amount,addSth){
  if(addSth === undefined){
    quantity=parseInt(amount.substring(0,amount.length),10);
    console.log(quantity)
    type=amount.substring(amount.length-1,amount.length);
  }else{
    quantity=amount;
    type=addSth;
  }
if(type === "h" || type === "H"){
  newDate=dateObj.setHours(dateObj.getHours()+quantity);
  return new Date(newDate).toDateString().concat(' ', new Date(newDate).toTimeString());
}else {
  newDate=dateObj.setDate(dateObj.getDate() + quantity);
  console.log(new Date(newDate).toDateString().concat(' ', new Date(newDate).toTimeString()))
  return new Date(newDate).toDateString().concat(' ', new Date(newDate).toTimeString());
}

}
module.exports=add;