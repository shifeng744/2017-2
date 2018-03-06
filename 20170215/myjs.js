/**
 * Created by SHI--PC on 2017/2/15.
 */
function scroll(){
    if(document.body.scrollTop){
        return{
            top:document.body.scrollTop;
            left:document.body.scrollLeftp;
        }
    }
    else {
        return{
            top:document.documentElement.scrollTop;
            left:document.documentElement.scrollLeft;
        }
    }
}
//
function $(id) {
    return document.getElementById(id);
}
function show(obj) {

}