function get_date() {
    var myDate = new Date(); //获取今天日期
    myDate.setDate(myDate.getDate() - 12);
    var dateArray = []; 
    var dateTemp; 
    var flag = 1; 
    for (var i = 0; i < 12; i++) {
        dateTemp = (myDate.getMonth()+1)+"-"+myDate.getDate();
        dateArray.push(dateTemp);
        myDate.setDate(myDate.getDate() + flag);
    }
    return dateArray;
}
let date = get_date();
