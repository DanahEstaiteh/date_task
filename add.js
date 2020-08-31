function add(dateObj,amount,addSth){
  if(addSth === undefined){
    let quantity=parseInt(amount.substring(0,amount.length),10);
    let type=amount.substring(amount.length-1,amount.length);
  }else{
    quantity=amount;
    type=addSth;
  }
if(type === "h" || type === "H"){
  let newDate=dateObj.setHours(dateObj.getHours()+quantity);
  return new Date(newDate).toDateString().concat(' ', new Date(newDate).toTimeString());
}else {
  newDate=dateObj.setDate(dateObj.getDate() + quantity);
  return new Date(newDate).toDateString().concat(' ', new Date(newDate).toTimeString());
}

}
module.exports=add;