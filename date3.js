function add(date_obj,amount,add_sth){
  if(add_sth === undefined){
    quantity=parseInt(amount.substring(0,amount.length),10);
    console.log(quantity)
    type=amount.substring(amount.length-1,amount.length);
  }else{
    quantity=amount;
    type=add_sth;
  }
if(type === "h" || type === "H"){
  new_date=date_obj.setHours(date_obj.getHours()+quantity);
  return new Date(new_date).toDateString().concat(' ', new Date(new_date).toTimeString());
}else {
  new_date=date_obj.setDate(date_obj.getDate() + quantity);
  console.log(new Date(new_date).toDateString().concat(' ', new Date(new_date).toTimeString()))
  return new Date(new_date).toDateString().concat(' ', new Date(new_date).toTimeString());
}

}
module.exports=add;