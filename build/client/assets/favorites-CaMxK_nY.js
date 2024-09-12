import{r as p,j as e}from"./jsx-runtime-BJa62n0-.js";import{u as S,c as z,G as h,a as F,b as I,D as M,F as T,I as _,S as B,P as H,N as L}from"./DisplayPrefsOptions-WJMdYm0B.js";import{c}from"./emotion-css.development.esm-CNBYDLmo.js";import{T as i}from"./Typography-wcXED6J0.js";import{L as x}from"./Link-BYYak0VS.js";import{T as n,B as j,M as N}from"./Tooltip-zq-lYHWG.js";import{c as o}from"./createSvgIcon-DhpipJwV.js";import{P as R}from"./Paper-d-ALm8uW.js";import{C as D,a as V,b as W,c as $}from"./CardMedia-3qf8g595.js";import{u as G}from"./components-CUuv5FDo.js";import{c as E}from"./index-quUFlI7y.js";import"./DefaultPropsProvider-EXnQoTJj.js";import"./useTheme-5sFMoId9.js";import"./index-COTo03wr.js";import"./ButtonBase-KljXaplS.js";import"./useIsFocusVisible-CPlKmROo.js";import"./chainPropTypes-CPkqCYVL.js";import"./Button-fn9KT81s.js";import"./GlobalStyles-DQzmn2_Z.js";const g=p.createContext({});function Y({fav:t,children:r}){return e.jsx(g.Provider,{value:t,children:r})}function v(){const t=p.useContext(g);if(!t)throw new Error("useFavItem must be used inside a DisplayPrefsProvider");return t}function f(){var r,s,a;const t=v();return console.log("in fav item title.",t.type),e.jsxs(i,{variant:"body2",sx:{color:"text.secondary"},children:[t.type==="pattern"&&e.jsxs("span",{children:["by ",((r=t.favorited.designer)==null?void 0:r.name)||"a designer"]}),t.type==="project"&&e.jsxs("span",{children:["by ",((s=t.favorited.user)==null?void 0:s.username)||"a knitter"]}),t.type==="yarn"&&e.jsxs("span",{children:[t.favorited.name," by ",t.favorited.yarn_company_name]}),t.type==="stash"&&e.jsxs("span",{children:["by ",((a=t.favorited.user)==null?void 0:a.username)||"a collector"]})]})}function y(){var r,s;const t=v();return e.jsxs(p.Fragment,{children:[t.type==="yarn"&&t.favorited.permalink&&e.jsx(x,{href:`https://www.ravelry.com/yarns/library/${t.favorited.permalink}`,variant:"contained",target:"_blank",children:"Yarn on Ravelry"}),t.type==="pattern"&&t.favorited.permalink&&e.jsx(x,{href:`https://www.ravelry.com/patterns/library/${t.favorited.permalink}`,variant:"contained",target:"_blank",component:"a",children:"Pattern on Ravelry"}),t.type==="stash"&&t.favorited.permalink&&((r=t.favorited.user)==null?void 0:r.username)&&e.jsx(x,{href:`https://www.ravelry.com/people/${t.favorited.user.username}/stash/${t.favorited.permalink}`,variant:"contained",target:"_blank",component:"a",children:"Stash on Ravelry"}),t.type==="project"&&t.favorited.permalink&&((s=t.favorited.user)==null?void 0:s.username)&&e.jsx(x,{href:`https://www.ravelry.com/projects/${t.favorited.user.username}/${t.favorited.permalink}`,variant:"contained",target:"_blank",component:"a",children:"Project on Ravelry"})]})}const A=o(e.jsx("path",{d:"M20 8v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.86 1.28-3.41 3-3.86V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86M6 12v2h10v2h2v-4z"}),"Backpack"),q=o(e.jsx("path",{d:"M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41z"}),"BorderColor"),O=o(e.jsx("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16h-9v-6h9z"}),"BrandingWatermark"),U=o(e.jsx("path",{d:"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1m-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1"}),"Forum"),J=o(e.jsx("path",{d:"M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48"}),"Gesture"),K=o(e.jsx("path",{d:"M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .65.73.45.75.45C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.41.21.75-.19.75-.45V6c-1.49-1.12-3.63-1.5-5.5-1.5m3.5 14c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5z"}),"ImportContacts"),Q=o([e.jsx("path",{d:"M13 8.57c-.79 0-1.43.64-1.43 1.43s.64 1.43 1.43 1.43 1.43-.64 1.43-1.43-.64-1.43-1.43-1.43"},"0"),e.jsx("path",{d:"M13 3C9.25 3 6.2 5.94 6.02 9.64L4.1 12.2c-.25.33-.01.8.4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.68c2.36-1.12 4-3.53 4-6.32 0-3.87-3.13-7-7-7m3 7c0 .13-.01.26-.02.39l.83.66c.08.06.1.16.05.25l-.8 1.39c-.05.09-.16.12-.24.09l-.99-.4c-.21.16-.43.29-.67.39L14 13.83c-.01.1-.1.17-.2.17h-1.6c-.1 0-.18-.07-.2-.17l-.15-1.06c-.25-.1-.47-.23-.68-.39l-.99.4c-.09.03-.2 0-.25-.09l-.8-1.39c-.05-.08-.03-.19.05-.25l.84-.66c-.01-.13-.02-.26-.02-.39s.02-.27.04-.39l-.85-.66c-.08-.06-.1-.16-.05-.26l.8-1.38c.05-.09.15-.12.24-.09l1 .4c.2-.15.43-.29.67-.39L12 6.17c.02-.1.1-.17.2-.17h1.6c.1 0 .18.07.2.17l.15 1.06c.24.1.46.23.67.39l1-.4c.09-.03.2 0 .24.09l.8 1.38c.05.09.03.2-.05.26l-.85.66c.03.12.04.25.04.39"},"1")],"Psychology"),X=o(e.jsx("path",{d:"M20 4H4v2h16zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6zm-9 4H6v-4h6z"}),"Store"),Z=o(e.jsx("path",{d:"M6 13c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4m6-10C9.8 3 8 4.8 8 7s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4m6 10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4"}),"Workspaces");function b({fav:t}){switch(t.type){case"pattern":return e.jsx(n,{title:"Pattern",children:e.jsx(K,{})});case"project":return e.jsx(n,{title:"Project",children:e.jsx(q,{})});case"yarn":return e.jsx(n,{title:"Yarn",children:e.jsx(J,{})});case"stash":return e.jsx(n,{title:"Stash",children:e.jsx(A,{})});case"forumpost":return e.jsx(n,{title:"Forum",children:e.jsx(U,{})});case"designer":return e.jsx(n,{title:"Designer",children:e.jsx(Q,{})});case"yarnshop":return e.jsx(n,{title:"Yarn Shop",children:e.jsx(X,{})});case"yarnbrand":return e.jsx(n,{title:"Yarn Brand",children:e.jsx(O,{})});case"bundle":return e.jsx(n,{title:"Bundle",children:e.jsx(Z,{})});default:return t.type}}const ee=c`
  display: flex;
  flex-direction: row;
  //   border: 1px solid #eeeeee;
  margin: 0 0 16px 0;
`,te=c`
  margin: 0 10px 0 0;
  padding: 0;
  border: 0;
  line-height: 0;

  width: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
`,re=c`
  flex-grow: 1;
`,se=c`
  height: 100%;
  width: 165px;
  margin: 0;
  object-fit: cover;
`,ae=c`
  display: flex;
  margin-top: 10px;
  max-width: 400px;
  & * {
    margin-right: 10px;
  }
`,ne="../../images/yarn-ball.jpg";function ie(){var r;const t=v();return e.jsx(R,{elevation:2,children:e.jsxs("div",{className:ee,children:[e.jsx("div",{className:te,children:e.jsx("img",{className:se,src:t.favorited.first_photo.small_url||ne,alt:""})}),e.jsxs("div",{className:re,children:[e.jsx(i,{gutterBottom:!0,variant:"h5",component:"div",children:t.favorited.name}),e.jsx(f,{}),t.type==="yarn"&&((r=t.favorited.yarn_weight)==null?void 0:r.name)&&e.jsx(i,{variant:"body2",sx:{color:"text.secondary"},children:t.favorited.yarn_weight.name}),t.comment&&e.jsxs(i,{variant:"body2",sx:{color:"text.secondary"},children:['"',t.comment,'"']}),e.jsxs("div",{className:ae,children:[e.jsx(b,{fav:t}),e.jsx(y,{})]})]})]})},`stash-${t.id}`)}const oe=c`
  margin: 3px 8px 8px;
  flex: 1 0 21%;
  max-width: 350px;
  min-width: 250px;
`;function ce(){var r;const t=v();return console.log("fav item",t),e.jsx("div",{className:oe,children:e.jsxs(D,{sx:{maxWidth:345},children:[e.jsx(V,{sx:{height:140},image:t.favorited.first_photo.small_url,title:""}),e.jsxs(W,{children:[e.jsx(i,{gutterBottom:!0,variant:"h5",component:"div",children:t.favorited.name}),e.jsx(f,{}),t.type==="yarn"&&((r=t.favorited.yarn_weight)==null?void 0:r.name)&&e.jsx(i,{variant:"body2",sx:{color:"text.secondary"},children:t.favorited.yarn_weight.name}),t.comment&&e.jsxs(i,{variant:"body2",sx:{color:"text.secondary"},children:['"',t.comment,'"']})]}),e.jsxs($,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsx(b,{fav:t}),e.jsx(y,{})]})]})})}const le=c`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -8px;
`,de=c`
  margin-right: 4px; // to match the paginator form's right margin
`;function me({favoritesResults:t}){const{displayPrefs:r}=S(),s=r.resultsStyle==="list"?ie:ce;return e.jsx(p.Fragment,{children:e.jsx("div",{className:r.resultsStyle==="list"?de:le,children:t.map(a=>e.jsx(Y,{fav:a,children:e.jsx(s,{fav:a})},a.id))})})}const pe=[10,20,50];function _e(){var u;const{favorites:t,data:r,pageProps:s}=G(),[,a]=E();function C(d,l){a(m=>(m.set("currentPage",l),m),{replace:!1})}function w(d){a(l=>{const m=d.target.value,k=l.get("pageSize")*(l.get("currentPage")-1);return l.set("pageSize",m),l.set("currentPage",Math.floor(k/m+1)),l},{replace:!1})}const P=((u=r==null?void 0:r.paginator)==null?void 0:u.last_page)||1;return e.jsxs(z,{children:[e.jsxs(h,{container:!0,spacing:3,columnSpacing:{xs:1,sm:2,md:3},disableEqualOverflow:!0,sx:{marginBottom:"10px"},children:[e.jsx(h,{xs:12,sm:12,md:3,children:e.jsx(i,{variant:"h1",component:"h1",sx:{padding:"10px"},children:"My Favorites"})}),e.jsx(h,{xs:12,sm:6,md:5,sx:{alignSelf:"center",textAlign:"right"},children:e.jsx(F,{})}),e.jsxs(h,{xs:12,sm:6,md:4,display:"flex",justifyContent:"right",alignItems:"right",children:[e.jsx(I,{searchText:s.searchText}),e.jsx(M,{})]})]}),t.length?e.jsxs(p.Fragment,{children:[e.jsx(me,{favoritesResults:t}),e.jsxs(j,{display:"flex",justifyContent:"space-between",sx:{marginRight:"-4px"},children:[e.jsx(j,{sx:{minWidth:120},children:e.jsxs(T,{fullWidth:!0,size:"small",children:[e.jsx(_,{id:"page-size-label",children:"Page Size"}),e.jsx(B,{labelId:"page-size-label",id:"page-size",value:s.pageSize,label:"Page Size",onChange:w,children:pe.map(d=>e.jsx(N,{value:d,children:d},d))})]})}),e.jsx(H,{count:P,variant:"outlined",shape:"rounded",size:"large",page:+s.currentPage,onChange:C})]})]}):e.jsx(L,{searchText:s.searchText,dataType:"favorites"}),e.jsx(i,{variant:"body2",sx:{marginTop:"10px",marginLeft:"10px"},children:"To add something to your Ravelry favorites, please visit Ravelry."})]})}export{_e as default};
