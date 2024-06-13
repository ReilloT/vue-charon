export function formateDate(time){
    //time格式: YY-MM-DD HH:SS
    const date = new Date(time);
    const now = Date.now();
    const diff = (now - date) / 1000;
    if(diff<60){
        //1min内
        return "刚刚";
    }else if(diff<3600){
        //1hour内
        return Math.ceil(diff/60)+'分钟前';
    }else if(diff<3600*24){
        //1day内
        return Math.ceil(diff/3600)+"小时前";
    }else if(diff<3600*2400*2){
        //1day~2day内
        return "1天前";
    }
    //2day之前
    return time;
}