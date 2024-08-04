import{_ as n,c as e,I as a,w as h,j as i,a as s,D as k,o as d}from"./chunks/framework.D2UteZtW.js";const B=JSON.parse('{"title":"_getCoordsAngle","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Functions/GetCoordsAngle.md","filePath":"docs/Functions/GetCoordsAngle.md","lastUpdated":1722784533000}'),r={name:"docs/Functions/GetCoordsAngle.md"},p=i("h1",{id:"getcoordsangle",tabindex:"-1"},[s("_getCoordsAngle "),i("a",{class:"header-anchor",href:"#getcoordsangle","aria-label":'Permalink to "_getCoordsAngle"'},"​")],-1),E=i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/** "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"@description"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," 计算两点角度")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," * "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"@param"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," coord1"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," 起点坐标")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," * "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"@param"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," coord2"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," 终点坐标")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," const"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," _getCoordsAngle"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  coord1"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"x"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," number"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"y"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," number"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  coord2"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"x"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," number"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"y"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," number"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // 计算相对于第一个坐标的水平和垂直距离")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," deltaX"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," coord2.x "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," coord1.x;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," deltaY"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," coord2.y "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," coord1.y;")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // 使用反三角函数计算角度（以弧度为单位）")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," angleRad"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Math."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"atan2"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(deltaY, deltaX);")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // 将弧度转换为角度")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  let"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," angleDeg "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," angleRad "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"180"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Math."),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"PI"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // 将角度转换为顺时针方向为正方向的角度")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  angleDeg "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," -"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"angleDeg "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 90"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // 调整角度使得右边成为 360 度的位置变为 0 度")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (angleDeg "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    angleDeg "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 360"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," angleDeg;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"};")])])])],-1);function g(y,o,c,F,A,D){const l=k("ContainerBox"),t=k("CodeBox");return d(),e("div",null,[p,a(l,{title:"介绍"},{desc:h(()=>[s(" 计算两点角度 ")]),_:1}),a(l,{title:"基础用法",noGap:""},{default:h(()=>[a(t,null,{codes:h(()=>[E]),_:1})]),_:1})])}const _=n(r,[["render",g]]);export{B as __pageData,_ as default};
