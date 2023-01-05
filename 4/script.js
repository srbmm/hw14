let flag = true;
for(let item of $("tr")){
    if(flag){
        item.style.backgroundColor = "#ccc";
    }else {
        item.style.backgroundColor = "#fff";
    }
    flag = !flag;
    console.log(item);
}