var rect = document.querySelector(".rectangle");
rect.addEventListener("mousemove", fun1);
function fun1(details){
 var recCordinate=rect.getBoundingClientRect();
 var cordinateCur=(details.x-recCordinate.x);
 if(cordinateCur<200)
 {
var redcolor = gsap.utils.mapRange(0,200,255,0,cordinateCur);
gsap.to(rect, {
    backgroundColor: `rgb(${redcolor}, 0, 0)`,
    ease: Power4,
});
}
else
{
 var bluecolor = gsap.utils.mapRange(200,400,0,255,cordinateCur);
 gsap.to(rect,{
     backgroundColor: `rgb(0, 0, ${bluecolor})`,
 });
}
}
rect.addEventListener("mouseleave", fun2);
function fun2(){
 gsap.to(rect, {
     backgroundColor: "white",
 });
}