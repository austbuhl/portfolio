(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{44:function(e){e.exports=JSON.parse('[{"id":1,"name":"ProjectSocial","images":[{"url":"/PS/ProjectSocialHome.png","desc":"Homepage"},{"url":"/PS/ProjectSocialPark.png","desc":"Park Detail Page"},{"url":"/PS/ProjectSocialEvent.png","desc":"Event Detail Page"},{"url":"/PS/ProjectSocialProfile.png","desc":"User Profile Page"}],"backend":"https://github.com/austbuhl/project-social-back-end","description":"<p>ProjectSocial is a social app connecting New Yorkers by enabling them to host and attend events at public parks in their local neighborhood. This is a Single-Page Application built with a React/Redux FrontEnd with Semantic UI for Styling and a Rails/PostgreSQL BackEnd. I pulled park coordinates and their corresponding activities from NYC\'s Open Data Portal to seed my database.</p> <br /> <p>On the FrontEnd, all park activities and events are being housed in my Redux store - which I chose to \'normalize\' to ensure a single-source of truth and increase my application\'s performance. I am using 100% functional components, making use of React Hooks wherever necessary for local state. I integrated the Google Maps API in order to plot all the park markers on the home page. The search feature leverages the Google Places API to feed up suggestions based on your location and parameters. The compass is using the browser\'s built-in Geolocation API to pan the map over to your neighborhood.</p> <br /> I am utilizing JSON Web Tokens and localStorage alongside BCrypt for user authentication. Once logged in, a user can choose to attend/create events, comment on an event\'s message board, and view other user\'s profile pages. User\'s can choose to add each other as friends to see some additional information about one another. I am using WebSockets via Rails\' ActionCable to ensure that the event\'s comments are served up real-time for seamless user communication and coordination.</p>","frontend":"https://github.com/austbuhl/project-social-front-end","url":"https://projectsocial.netlify.app/","tech":"React - Redux - Ruby on Rails","stack":{"frontend":["React","Redux","Javascript","Semantic UI","React Router","Google Maps API","JWT"],"backend":["Rails","PostgreSQL","NYC Open Data","BCrypt","ActionCable","Redis"]}},{"id":2,"name":"Candle Crush","images":[{"url":"/CC/CandleCrushHome.png","desc":"Homepage"},{"url":"/CC/CandleCrushCatalog.png","desc":"Product Catalog"},{"url":"/CC/CandleCrushDetail.png","desc":"Product Detail Page"},{"url":"/CC/CandleCrushCart.png","desc":"Your Cart"}],"backend":"https://github.com/austbuhl/candle-crush-back-end","description":"<p>Candle Crush is an e-commerce app for high-end candles. This is a Single-Page Application built with a React FrontEnd with Material UI Styling, a Rails/PostgreSQL BackEnd and React Router for Client-Side Routing. User auth is done with JSON Web Tokens and localStorage on the client-side alongside BCrypt on the server-side.</p> <br /> <p>When creating an account, user\'s can choose to create a vendor account or just a basic consumer. Vendors have access to create and sell their own items on the site.  All users can search through the product catalog or filter by scent/price. Each candle has a show page where user\'s can get some additional information about the product and also leave/read other\'s ratings and reviews.</p> <br /> <p>The cart features a fully responsive interface enabling user\'s to add or remove items all the way up until checkout. User\'s are also able to return products at any time from their profile page.</p>","frontend":"https://github.com/austbuhl/candle-crush-front-end","url":"","tech":"React - Ruby on Rails","stack":{"frontend":["React","Javascript","Material UI","React Router","JWT"],"backend":["Rails","PostgreSQL","BCrypt"]}},{"id":3,"name":"Stonks.js","images":[{"url":"/Stonks/StonksHome.png","desc":"Homepage"},{"url":"/Stonks/StonksChart.png","desc":"Trailing 6-Month Closing Price Chart"}],"backend":"https://github.com/austbuhl/candle-crush-back-end","description":"<p>Stonks.js is a financial markets tracking application, built with a Vanilla Javascript FrontEnd with Bootstrap Styling and a Rails API. This project was completed in a four-day sprint by a partner and I. We utilized IEX Cloud\'s API to serve up real-time stock quotes and news.</p> <br /> <p>User\'s can follow their favorite companies to have news articles and quote tailored to their specific interests. We integrated the trailing 3-month closing prices with Chart.js to enable a clean and simple interface for trend analysis. User\'s are able to search for any publicly traded company by name or by ticker symbol via the dynamic search bar which will make auto-complete suggestions as you type.</p>","frontend":"https://github.com/austbuhl/candle-crush-front-end","url":"","tech":"Javascript - Ruby on Rails","stack":{"frontend":["Javascript","Bootstrap","IEX Cloud API","Chart.js"],"backend":["Rails","PostgreSQL"]}},{"id":4,"name":"Fantasy Fanatics","images":[{"url":"/Fantasy/FantasyHome.png","desc":"Homepage"},{"url":"/Fantasy/FantasyTeam.png","desc":"Team Page"},{"url":"/Fantasy/FantasyPlayers.png","desc":"Players List Page"},{"url":"/Fantasy/FantasyRankings.png","desc":"Rankings List Page"}],"backend":"","description":"<p>Fantasy Fanatics is a Ruby on Rails application that optimizes your fantasy football lineup on a weekly basis. User\'s can draft and build a team of their favorite players and join a league. Once their team is drafted they can tinker with their lineup manually or have their lineup automatically set based on the consensus analyst rankings for that particular week.</p> <br /> <p>When signing up users have the option to join as a team owner or as an analyst. Analysts are able to login weekly to post their rankings that all other users can see. The multiple user roles were built with a self-referential user model and leverage BCrypt for password protection.</p>","frontend":"https://github.com/austbuhl/fantasy-fanatics","url":"","tech":"Full Stack Ruby on Rails","stack":{"frontend":["Ruby on Rails","Bootstrap"],"backend":["Rails","PostgreSQL","BCrypt"]}}]')},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(1),i=a.n(s),r=a(15),c=a.n(r),o=(a(73),a(9)),l=a(26),d=a(23),h=(a(74),function(e){e.toggleTheme;return Object(n.jsx)("nav",{className:"navbar",children:Object(n.jsxs)("ul",{className:"navbar-nav",children:[Object(n.jsx)("li",{className:"logo",children:Object(n.jsxs)("a",{href:"/portfolio",className:"nav-link",children:[Object(n.jsx)("span",{className:"link-text logo-text",children:"Austin"}),Object(n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"angle-double-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"svg-inline--fa fa-angle-double-right fa-w-14 fa-5x",children:Object(n.jsxs)("g",{className:"fa-group",children:[Object(n.jsx)("path",{fill:"currentColor",d:"M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z",className:"fa-secondary"}),Object(n.jsx)("path",{fill:"currentColor",d:"M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z",className:"fa-primary"})]})})]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)("a",{href:"https://www.linkedin.com/in/austinbuhler/",target:"_blank",className:"nav-link",children:[Object(n.jsx)(d.c,{}),Object(n.jsx)("span",{className:"link-text",children:"LinkedIn"})]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)("a",{href:"https://github.com/austbuhl",target:"_blank",className:"nav-link",children:[Object(n.jsx)(d.b,{}),Object(n.jsx)("span",{className:"link-text",children:"GitHub"})]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)("a",{href:"https://medium.com/@austinbuhler",target:"_blank",className:"nav-link",children:[Object(n.jsx)(d.d,{}),Object(n.jsx)("span",{className:"link-text",children:"Blog"})]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)("a",{href:"mailto:austinbuhler@gmail.com",className:"nav-link",children:[Object(n.jsx)(d.a,{}),Object(n.jsx)("span",{className:"link-text",children:"Email"})]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)("a",{href:"/Austin Buhler - Resume.pdf",className:"nav-link",children:[Object(n.jsx)(d.f,{}),Object(n.jsx)("span",{className:"link-text",children:"Resume"})]})})]})})}),u=a(24),j=(a(75),a(108)),b=a(118),p=a(110),m=a(111),g=a(117),x=a(112),f=a(113),O=a(20),y=a(60),v=a.n(y),k=a(61),w=a.n(k),R={in:{opacity:1,x:300},out:{opacity:0,x:-300},end:{x:0,opacity:1}},C={duration:.75},P={in:{opacity:1,y:0,scale:1},out:{opacity:0,y:"-100vh",scale:.3}},S={in:{opacity:1,x:-1e3},out:{opacity:0,x:1e3},end:{x:0,opacity:1}},N=Object(j.a)((function(e){return{root:{display:"flex",height:"35vh",width:"auto",maxWidth:750,boxShadow:"10px 10px 10px #0a131f",border:"1.25px solid #0a131f",borderRadius:10,margin:"2em"},details:{display:"flex",flexDirection:"column",width:"40%",marginRight:"1em"},content:{flex:"1 0 auto"},cover:{flex:"1 0 auto"},controls:{display:"flex",justifyContent:"space-between"}}})),I={React:Object(n.jsx)(d.e,{}),Redux:Object(n.jsx)(O.h,{}),Javascript:Object(n.jsx)(O.c,{}),Rails:Object(n.jsx)(O.f,{}),PostgreSQL:Object(n.jsx)(O.e,{}),"Google Maps API":Object(n.jsx)(O.b,{}),"Material UI":Object(n.jsx)(O.d,{}),Bootstrap:Object(n.jsx)(O.a,{}),"Ruby on Rails":Object(n.jsx)(O.i,{}),"React Router":Object(n.jsx)(O.g,{})},F=function(e){var t=e.projects,a=N();return Object(n.jsxs)(u.b.div,{initial:"out",animate:"in",exit:"out",variants:P,transition:C,style:{width:"100%"},className:"cards-container",children:[Object(n.jsx)(m.a,{variant:"h3",component:"h3",style:{marginTop:".5em"},children:Object(n.jsx)("strong",{children:"Projects"})}),t.map((function(e){return Object(n.jsxs)(b.a,{className:a.root,children:[Object(n.jsxs)("div",{className:a.details,children:[Object(n.jsxs)(p.a,{className:a.content,children:[Object(n.jsx)(l.b,{to:"/projects/".concat(e.id),children:Object(n.jsx)(m.a,{component:"h3",variant:"h4",children:e.name})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"FrontEnd"}),e.stack.frontend.map((function(e){return I[e]})),Object(n.jsx)("h4",{children:"BackEnd"}),e.stack.backend.map((function(e){return I[e]}))]})]}),Object(n.jsxs)("div",{className:a.controls,children:[Object(n.jsx)(g.a,{title:"View Source Code",arrow:!0,placement:"right",children:Object(n.jsx)(x.a,{"aria-label":"view source code",target:"_blank",href:e.frontend,children:Object(n.jsx)(v.a,{})})}),Object(n.jsx)(g.a,{title:"View Site",arrow:!0,placement:"left",children:Object(n.jsx)(x.a,{"aria-label":"view site",target:"_blank",href:e.url,children:Object(n.jsx)(w.a,{})})})]})]}),Object(n.jsx)(f.a,{className:a.cover,image:e.images[0].url,title:e.images[0].url})]},e.id)}))]})},B=a(62),T=(a(86),a(87),a(114)),L=function(e){var t=e.project;console.log(t);return Object(n.jsx)(u.b.div,{initial:"out",animate:"end",exit:"out",variants:S,transition:C,className:"project-detail",children:Object(n.jsxs)(T.a,{container:!0,spacing:3,children:[Object(n.jsxs)(T.a,{item:!0,sm:12,md:6,children:[Object(n.jsx)(m.a,{component:"h3",variant:"h4",children:Object(n.jsx)("strong",{children:t.name})}),Object(n.jsx)(B.Carousel,{id:"image-carousel",dynamicHeight:!0,showArrows:!0,children:t.images.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{className:"project-image",src:e.url}),Object(n.jsx)("p",{className:"legend",children:e.desc})]})}))}),Object(n.jsxs)("div",{className:"project-links",children:[Object(n.jsx)("a",{href:t.frontend,target:"_blank",children:"FrontEnd"})," | ",""!==t.backend&&Object(n.jsx)("a",{href:t.backend,target:"_blank",children:"BackEnd"})," | ",""!==t.url&&Object(n.jsx)("a",{href:t.url,target:"_blank",children:"Site"})]})]}),Object(n.jsxs)(T.a,{item:!0,sm:12,md:6,children:[Object(n.jsx)("br",{}),Object(n.jsx)("h3",{children:"Built With"}),Object(n.jsx)("p",{children:"".concat(t.stack.frontend.join(", "),", ").concat(t.stack.backend.join(", "))}),Object(n.jsx)("br",{}),Object(n.jsx)("h3",{children:"Description"}),Object(n.jsx)("div",{dangerouslySetInnerHTML:{__html:t.description}})]})]})})},A=a(44),E=a(115),J=a(116);a(88);var H=function(){return Object(n.jsx)(u.a,{exitBeforeEnter:!0,children:Object(n.jsx)(o.c,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(h,{}),Object(n.jsxs)(E.a,{id:"main-container",children:[Object(n.jsx)(o.a,{exact:!0,path:"/portfolio/projects/:id",render:function(e){var t=e.match,a=parseInt(t.params.id),s=A.find((function(e){return e.id===a}));return Object(n.jsx)(L,{project:s})}}),Object(n.jsx)(o.a,{exact:!0,path:"/portfolio/projects",children:Object(n.jsx)(F,{projects:A})}),Object(n.jsx)(o.a,{exact:!0,path:"/portfolio",children:Object(n.jsxs)(u.b.main,{initial:"out",animate:"end",exit:"out",variants:R,transition:C,style:{marginTop:"3.5em"},children:[Object(n.jsx)(m.a,{variant:"h2",component:"h2",children:Object(n.jsx)("strong",{children:"Austin Buhler"})}),Object(n.jsx)("img",{src:"https://avatars2.githubusercontent.com/u/44592690?s=460&u=e3953edcf5c5ace3e45c7565c52e9031f9177cf4&v=4",alt:"Austin",style:{borderRadius:"50%",height:"20vh"}}),Object(n.jsx)(m.a,{variant:"h4",style:{marginTop:"1rem"},children:Object(n.jsx)("strong",{children:"Software Engineer"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("a",{href:"mailto:austinbuhler@gmail.com",children:Object(n.jsx)("span",{children:"austinbuhler@gmail.com"})}),Object(n.jsx)("a",{href:"https://github.com/austbuhl",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("span",{children:" | @austbuhl"})}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{style:{maxWidth:"35rem",fontSize:"1.5rem"},children:"Full stack software developer specializing in React, Javascript and Ruby on Rails. Passionate about technology, solving problems, clean data, all things sports and breakfast burritos."})]}),Object(n.jsx)(l.b,{to:"/portfolio/projects",children:Object(n.jsx)(J.a,{color:"primary",style:{marginTop:"1rem",fontSize:"1.5rem"},children:"View Projects"})})]})})]})]})})})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,120)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(l.a,{children:Object(n.jsx)(H,{})})}),document.getElementById("root")),U()}},[[90,1,2]]]);
//# sourceMappingURL=main.568eb0af.chunk.js.map