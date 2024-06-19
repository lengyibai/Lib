const r={mounted(t,s){const{enable:o=!0,auto:a=!0}=s.value||{};o&&setTimeout(()=>{const e=document.createElement("div");t.style.position="relative",e.style.cssText=`
      position: absolute;
      top: 0px;
      left: 0px;
      width: ${t.offsetWidth/3}px;
      height: 100%;
      transform: skewX(45deg) translateX(${t.offsetWidth*1.75}px);
      transition: all 2s;
      background-color: rgba(255, 255, 255, 0.75);
      filter: blur(20px);
    `,t.appendChild(e),a?(e.style.transitionDelay=` ${s.value}s`,e.style.transform=`skewX(45deg) translateX(${-t.offsetWidth*1.25}px)`,setTimeout(()=>{t.removeChild(e)},2e3)):(t.addEventListener("mouseenter",()=>{e.style.transform=`skewX(45deg) translateX(${-t.offsetWidth*1.5}px)`}),t.addEventListener("mouseleave",()=>{e.style.transform=`skewX(45deg) translateX(${t.offsetWidth*1.75}px)`}))})}};export{r as v};
