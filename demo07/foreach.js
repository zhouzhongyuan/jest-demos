function forEach(items, callback){
    for(var index = 0; index < items.length; index++){
        callback(items[index]);
    }
}
export default forEach;