const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });

  const mouseFollower = document.querySelector("#minicircle");
  document.addEventListener("mousemove", (event) => {
    mouseFollower.style.left = event.clientX + "px";
    mouseFollower.style.top = event.clientY + "px";
  });



  const fleftelm = document.querySelector("#fleftelm");
const fimages = document.querySelector("#fimages");
const last = document.querySelector(".last");

fleftelm.style.transform = "translateY(-300%)";

window.addEventListener("scroll", () => {
  const triggerTop = fimages.getBoundingClientRect().top;
  const lastBottom = last.getBoundingClientRect().bottom;

  if (triggerTop <= 0 && lastBottom >= 0) {
    const scrollProgress = Math.abs(triggerTop) / (lastBottom - triggerTop);
    fleftelm.style.transform = `translateY(-300%${scrollProgress * 100}%)`;
  }
});
  




// Simulate Shery.hoverWithMediaCircle(".hvr", {...});


// Simulate Shery.mouseFollower();
//var timeout;
//function minicircleFollower(xscale, yscale) {
  //window.addEventListener("mousemove", function (dets) {
  //  document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
 //// })
//}
//function circlemove() {
 // var xscale = 1;
 //// var yscale = 1;

 /// var xprev = 0;
  //var yprev = 0;

  //window.addEventListener("mousemove", function (dets) {
  //  this.clearTimeout(timeout);
   // xprev = dets.clientX;
 //   yprev = dets.clientY;
//
  //  xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
  //  yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);
   // minicircleFollower(xscale, yscale);
  // timeout = this.setTimeout(function(){
 //   document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
 //  },100);
  //});
//}
//circlemove();
//minicircleFollower();