import{c as e,r as o,d as n,a as r,b as s,w as a,v as t,e as l,f as i,o as d,t as c,F as u,g as p,h as g,i as f,S as h,j as w,k as m}from"./vendor.62cd23b7.js";const b=e({}.VITE_SUPABASE_URL,{}.VITE_SUPABASE_ANON_KEY),v=o(null);async function y(e){try{const{error:o,user:n}=await b.auth.signIn({email:e.email,password:e.password});o&&alert("Error logging in: "+o.message),o||n||alert("Check your email for the login link!")}catch(o){console.error("Error thrown:",o.message),alert(o.error_description||o)}}async function k(e){try{const{email:o,password:n}=e;if(!o||!n)return void alert("Please provide both your email and password.");const{error:r}=await b.auth.signUp({email:o,password:n});if(r)return alert(r.message),void console.error(r,r.message);alert("Signup successful, confirmation mail should be sent soon!")}catch(o){alert("Fatal error signing up"),console.error("signup error",o)}}async function x(e){const{error:o}=await b.auth.signIn({provider:e});o&&console.error("Error: ",o.message)}async function L(){const e=prompt("Please enter your email:");if(e){const{error:o}=await b.auth.api.resetPasswordForEmail(e);o?alert("Error: "+o.message):alert("Password recovery email has been sent.")}else window.alert("Email address is required.")}async function T(e){try{const{error:o}=await b.auth.update(e);o?alert("Error updating user info: "+o.message):(alert("Successfully updated user info!"),window.location.href="/")}catch(o){alert("Error updating user info: "+o.message)}}async function E(){console.log("logging out");try{const{error:e}=await b.auth.signOut();if(e)return alert("Error signing out"),void console.error("Error",e);alert("You have signed out!")}catch(e){alert("Unknown error signing out"),console.error("Error",e)}}var U=n({name:"Auth",setup:()=>({email:o(""),password:o(""),handleLogin:y,handleOAuthLogin:x,handleSignup:k,handlePasswordReset:L})});const C={class:"w-full sm:w-1/2 xl:w-1/3"},P={class:"border-teal p-8 border-t-12 mb-6 rounded-lg shadow-lg bg-white"},S={class:"mb-4"},A=s("label",{class:"font-bold text-grey-darker block mb-2"},"Email",-1),R={class:"mb-4"},j=s("label",{class:"font-bold text-grey-darker block mb-2"},"Password",-1),_={class:"flex flex-col gap-2"},V={key:0},H={key:1},F={class:"mt-2 text-sm leading-5"},O={class:"mt-4"},z=i('<div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm leading-5"><span class="px-2 bg-white text-gray-500">Or continue with</span></div></div>',1),M={class:"mt-6"},B={class:"mt-6"},I={class:"block w-full rounded-md shadow-sm"},Y={class:"mt-6"},q={class:"block w-full rounded-md shadow-sm"};U.render=function(e,o,n,i,c,u){return d(),r("main",C,[s("div",P,[s("div",S,[A,a(s("input",{"onUpdate:modelValue":o[1]||(o[1]=o=>e.email=o),type:"text",class:"\n            block\n            appearance-none\n            w-full\n            bg-white\n            border border-grey-light\n            hover:border-grey\n            px-2\n            py-2\n            rounded\n            shadow\n          ",placeholder:"Your email"},null,512),[[t,e.email]])]),s("div",R,[j,a(s("input",{"onUpdate:modelValue":o[2]||(o[2]=o=>e.password=o),type:"password",class:"\n            block\n            appearance-none\n            w-full\n            bg-white\n            border border-grey-light\n            hover:border-grey\n            px-2\n            py-2\n            rounded\n            shadow\n          ",placeholder:"Your password"},null,512),[[t,e.password]])]),s("div",_,[s("a",{class:"btn-black",href:"#",tabindex:"0",onClick:o[3]||(o[3]=o=>e.handleSignup({email:e.email,password:e.password}))}," Sign up "),s("a",{class:"btn-black-outline",href:"#",onClick:o[4]||(o[4]=o=>e.handleLogin({email:e.email,password:e.password}))},[e.password.length?(d(),r("span",V,"Sign in")):(d(),r("span",H," Send magic link "))])]),s("div",F,[s("a",{class:"\n            font-medium\n            text-indigo-600\n            hover:text-indigo-500\n            focus:outline-none focus:underline\n            transition\n            ease-in-out\n            duration-150\n          ",href:"/",onClick:o[5]||(o[5]=l(((...o)=>e.handlePasswordReset&&e.handlePasswordReset(...o)),["prevent"]))}," Forgot your password? ")]),s("div",O,[z,s("div",M,[s("div",B,[s("span",I,[s("button",{class:"\n                  w-full\n                  flex\n                  justify-center\n                  py-2\n                  px-4\n                  border border-transparent\n                  text-sm\n                  font-medium\n                  rounded-md\n                  text-white\n                  bg-indigo-600\n                  hover:bg-indigo-500\n                  focus:outline-none\n                  focus:border-indigo-700\n                  focus:shadow-outline-indigo\n                  active:bg-indigo-700\n                  transition\n                  duration-150\n                  ease-in-out\n                ",type:"button",onClick:o[6]||(o[6]=o=>e.handleOAuthLogin("github"))}," GitHub ")])]),s("div",Y,[s("span",q,[s("button",{class:"\n                  w-full\n                  flex\n                  justify-center\n                  py-2\n                  px-4\n                  border border-transparent\n                  text-sm\n                  font-medium\n                  rounded-md\n                  text-white\n                  bg-indigo-600\n                  hover:bg-indigo-500\n                  focus:outline-none\n                  focus:border-indigo-700\n                  focus:shadow-outline-indigo\n                  active:bg-indigo-700\n                  transition\n                  duration-150\n                  ease-in-out\n                ",type:"button",onClick:o[7]||(o[7]=o=>e.handleOAuthLogin("google"))}," Google ")])])])])])])};var G=n({name:"Auth",setup:()=>({password:o(""),handleUpdateUser:T})});const N={class:"w-full sm:w-1/2 xl:w-1/3"},$={class:"border-teal p-8 border-t-12 mb-6 rounded-lg shadow-lg bg-white"},K={class:"mb-4"},W=s("label",{class:"font-bold text-grey-darker block mb-2"},"Password",-1),D={class:"flex flex-col gap-2"};G.render=function(e,o,n,l,i,c){return d(),r("main",N,[s("div",$,[s("div",K,[W,a(s("input",{"onUpdate:modelValue":o[1]||(o[1]=o=>e.password=o),type:"password",class:"\n            block\n            appearance-none\n            w-full\n            bg-white\n            border border-grey-light\n            hover:border-grey\n            px-2\n            py-2\n            rounded\n            shadow\n          ",placeholder:"Your password"},null,512),[[t,e.password]])]),s("div",D,[s("a",{class:"btn-black",href:"#",tabindex:"0",onClick:o[2]||(o[2]=o=>e.handleUpdateUser({password:e.password}))}," Update password ")])])])};const J=o([]);async function Q(e,o){try{const{error:n}=await b.from("todos").update({is_complete:o}).eq("id",e.id).single();if(n)return alert(n.message),void console.error("There was an error updating",n);console.log("Updated task",e.id)}catch(n){alert("Error"),console.error("Unknown problem updating record",n)}}var X=n({name:"Todo",props:{todo:{type:Object,required:!0}},setup:e=>({updateTaskCompletion:Q,clearTodo:function(){(async function(e){try{await b.from("todos").delete().eq("id",e.id),console.log("deleted todo",e.id)}catch(o){console.error("error",o)}})(e.todo).then((()=>{J.value=J.value.filter((o=>o.id!=e.todo.id))}))}})});const Z={class:"\n      w-full\n      block\n      cursor-pointer\n      hover:bg-gray-200\n      focus:outline-none focus:bg-gray-200\n      transition\n      duration-150\n      ease-in-out\n    "},ee={class:"flex items-center px-4 py-4 sm:px-6"},oe={class:"min-w-0 flex-1 flex items-center"},ne={class:"text-sm leading-5 font-medium truncate"},re=s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"gray","aria-label":"delete"},[s("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})],-1);X.render=function(e,o,n,a,t,l){return d(),r("li",Z,[s("div",ee,[s("div",oe,[s("div",ne,c(e.todo.task),1)]),s("div",null,[s("input",{class:"cursor-pointer",type:"checkbox",checked:e.todo.is_complete,onClick:o[1]||(o[1]=o=>e.updateTaskCompletion(e.todo,!e.todo.is_complete))},null,8,["checked"])]),s("button",{class:"w-4 h-4 ml-2 border-2 hover:border-black rounded",onClick:o[2]||(o[2]=(...o)=>e.clearTodo&&e.clearTodo(...o))},[re])])])};var se=n({name:"TodoList",components:{Todo:X},async setup(){await async function(){try{const{data:e,error:o}=await b.from("todos").select("*").order("id");if(o)return void console.log("error",o);if(null===e)return void(J.value=[]);J.value=e,console.log("got todos!",J.value)}catch(e){console.error("Error retrieving data from db",e)}}();const e=o("");return{task:e,allTodos:J,insertTask:async function(){var o;if(e.value.length<=3)alert("Please make your task a little more descriptive");else if(null!==(null==v?void 0:v.value))try{const n=await async function(e){try{const{data:o,error:n}=await b.from("todos").insert(e).single();return n?(alert(n.message),console.error("There was an error inserting",n),null):(console.log("created a new todo"),o)}catch(o){return alert("Error"),console.error("Unknown problem inserting to db",o),null}}({user_id:null==(o=null==v?void 0:v.value.user)?void 0:o.id,task:e.value});if(!n)return;J.value.push(n),e.value=""}catch(n){console.error("Unknown error when adding todo",n)}else alert("Please log in again")},userSession:v}}});const ae={class:"w-full"},te=s("h1",{class:"mb-12 font-bold text-6xl"},"Todo List.",-1),le={class:"flex gap-2 my-2"},ie={class:"bg-white shadow overflow-hidden rounded-md"};se.render=function(e,o,n,l,i,c){const f=g("Todo");return d(),r("div",ae,[te,s("div",le,[a(s("input",{"onUpdate:modelValue":o[1]||(o[1]=o=>e.task=o),class:"rounded w-full p-2",type:"text",placeholder:"What do you need to?"},null,512),[[t,e.task]]),s("button",{class:"btn-black",onClick:o[2]||(o[2]=(...o)=>e.insertTask&&e.insertTask(...o))},"Add")]),s("div",ie,[(d(!0),r(u,null,p(e.allTodos,((e,o)=>(d(),r("ul",{key:o},[s(f,{todo:e},null,8,["todo"])])))),128))])])};const de={name:"Loading"},ce={class:"loader"};de.render=function(e,o,n,s,a,t){return d(),r("div",ce,"Loading...")};const ue={name:"Footer"},pe={class:"flex text-center justify-center align-center p-5"},ge=f(" Made with "),fe=s("svg",{viewBox:"0 0 261.76 226.69",height:"25","aria-label":"Vue"},[s("defs"),s("path",{fill:"#41b883",d:"M161.096398.001167l-30.2245777 52.3506912L100.6472426.001167H-.0049077l130.876728 226.687666L261.7485483.001167z"}),s("path",{fill:"#34495e",d:"M161.096398.001167l-30.2245777 52.3506912L100.6472426.001167H52.3457835L130.8718203 136.0111 209.3978571.001167z"})],-1),he=f(" + "),we=s("svg",{class:"ml-1",fill:"#3178c6",viewBox:"0 0 27 26",height:"25","aria-label":"TypeScript"},[s("defs"),s("path",{d:"M.98608 0H25.3094c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975H.98608C.441483 26 0 25.5635 0 25.025V.975C0 .436522.441483 0 .98608 0zM14.6175 13.8324V11.7H5.25909v2.1324H8.6002v9.4946H11.26v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567V12.146c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z","clip-rule":"evenodd"})],-1);ue.render=function(e,o,n,s,a,t){return d(),r("div",pe,[ge,fe,he,we])};var me={components:{Auth:U,PasswordReset:G,TodoList:se,Loading:de,Footer:ue},setup:()=>({userSession:v,handleLogout:E}),computed:{showPasswordReset:function(){return"recovery"===function(e,o){o||(o=window.location.href),e=e.replace(/[[]]/g,"\\$&");const n=new RegExp("[?&#]"+e+"(=([^&#]*)|&|#|$)").exec(o);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}("type",location.href)}}};const be={id:"app",class:"w-full h-full flex flex-col justify-center bg-gray-300"},ve={key:0,class:"w-full h-full flex flex-col justify-center items-center p-4"},ye={key:1,class:"w-full h-full flex flex-col justify-center items-center p-4"},ke={key:2,class:"\n        w-full\n        h-full\n        flex flex-col\n        justify-center\n        items-center\n        p-4\n        max-w-sm\n        m-auto\n      "};me.render=function(e,o,n,a,t,l){const i=g("PasswordReset"),c=g("Auth"),u=g("TodoList"),p=g("Loading"),f=g("Footer");return d(),r("div",be,[l.showPasswordReset?(d(),r("div",ve,[s(i)])):null===a.userSession?(d(),r("div",ye,[s(c)])):(d(),r("div",ke,[(d(),r(h,null,{default:w((()=>[s("div",null,[s(u),s("button",{class:"btn-black w-full mt-12",onClick:o[1]||(o[1]=(...e)=>a.handleLogout&&a.handleLogout(...e))}," Logout ")])])),fallback:w((()=>[s(p)])),_:1}))])),s(f)])};m(me).mount("#app"),b.auth.onAuthStateChange(((e,o)=>{v.value=o}));
