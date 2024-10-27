(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();var s=[];for(var w=0;w<256;++w)s.push((w+256).toString(16).slice(1));function E(t,e=0){return(s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]).toLowerCase()}var b,A=new Uint8Array(16);function P(){if(!b&&(b=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!b))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(A)}var I=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const S={randomUUID:I};function U(t,e,a){if(S.randomUUID&&!e&&!t)return S.randomUUID();t=t||{};var d=t.random||(t.rng||P)();return d[6]=d[6]&15|64,d[8]=d[8]&63|128,E(d)}class m{constructor(e){this.id=U(),this.description=e,this.done=!1,this.createdAt=new Date}}const u={All:"all",Completed:"completed",Pending:"pending"},l={todos:[new m("Piedra del alma"),new m("Piedra del infinito"),new m("Piedra del tiempo"),new m("Piedra del poder"),new m("Piedra del campo")],filter:u.All},q=()=>{v()},v=()=>{if(!localStorage.getItem("state"))return;const{todos:t=[],filter:e=u.All}=JSON.parse(localStorage.getItem("state"));l.todos=t,l.filter=e},y=()=>{localStorage.setItem("state",JSON.stringify(l)),v()},x=(t=u.All)=>{switch(t){case u.All:return[...l.todos];case u.Completed:return l.todos.filter(e=>e.done);case u.Pending:return l.todos.filter(e=>!e.done);default:throw new Error(`Option ${t} is not valid.`)}},D=t=>{if(!t)throw new Error("Description is required");l.todos.push(new m(t)),y()},F=t=>{l.todos=l.todos.map(e=>(e.id===t&&(e.done=!e.done),e)),y()},O=t=>{l.todos=l.todos.filter(e=>e.id!==t),y()},N=()=>{l.todos=l.todos.filter(t=>!t.done),y()},k=(t=u.All)=>{l.filter=t,y()},M=()=>l.filter.toString(),i={addTodo:D,deleteCompleted:N,deleteTodo:O,getCurrentFilter:M,getTodos:x,initStore:q,loadStore:v,setFilter:k,togleTodo:F},V=`<section class="todoapp">
    <header class="header">
        <h1>Tareas</h1>
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>
    </header>
    
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->
            <!-- <li class="completed" data-id="abc">
                <div class="view">
                    <input class="toggle" type="checkbox" checked>
                    <label>Probar JavaScript</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            </li> -->
            <!-- <li>
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label>Comprar un unicornio</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Rule the web">
            </li> -->
        </ul>
    </section>

    <!-- This footer should hidden by default and shown when there are todos -->
    <footer class="footer">
        <!-- This should be "0 items left" by default -->
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
            <li>
                <a class="filtro" class="selected" href="#/">Todos</a>
            </li>
            <li>
                <a class="filtro" href="#/pending">Pendientes</a>
            </li>
            <li>
                <a class="filtro" href="#/completed">Completados</a>
            </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed">Borrar completados</button>
    </footer>
</section>


<footer class="info">
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <!-- Change this out with your name and url ↓ -->
    <p>Creado por <a href="http://todomvc.com">ti</a></p>
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>
</footer>`,H=t=>{if(!t)throw new Error("A TODO object is required");const{done:e,description:a,id:d}=t,n=`
        <div class="view">
            <input class="toggle" type="checkbox" ${e?"checked":""}>
            <label>${a}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `,r=document.createElement("li");return r.innerHTML=n,r.setAttribute("data-id",d),e&&r.classList.add("completed"),r};let f;const R=(t,e=[])=>{if(f||(f=document.querySelector(t)),!f)throw new Error(`Element ${t} not found`);f.innerHTML="",e.forEach(a=>{f.append(H(a))})},p={TodoList:".todo-list",NewTodoInput:"#new-todo-input",ClearCompleted:".clear-completed",TodoFilters:".filtro",PendingCountNumber:"#pending-count"},$=t=>{const e=()=>{const o=i.getTodos(i.getCurrentFilter());R(p.TodoList,o),a(),d()},a=()=>{let o=i.getTodos("pending").length,c=document.querySelector(p.PendingCountNumber);c.textContent=o},d=()=>{const o=i.getCurrentFilter()==="all"?"":i.getCurrentFilter();document.querySelector(`a[href="#/${o}"]`).setAttribute("class","filtro selected")};(()=>{const o=document.createElement("div");o.innerHTML=V,document.querySelector(t).append(o),e()})();const n=document.querySelector(p.NewTodoInput),r=document.querySelector(p.TodoList),h=document.querySelector(p.ClearCompleted),T=document.querySelectorAll(p.TodoFilters);n.addEventListener("keyup",o=>{o.keyCode===13&&o.target.value.trim().length!==0&&(i.addTodo(o.target.value),e(),o.target.value="")}),r.addEventListener("click",o=>{const c=o.target.closest("[data-id]");i.togleTodo(c.getAttribute("data-id")),e()}),r.addEventListener("click",o=>{const c=o.target.className==="destroy",g=o.target.closest("[data-id]");!g||!c||(i.deleteTodo(g.getAttribute("data-id")),e())}),h.addEventListener("click",()=>{i.deleteCompleted(),e()}),T.forEach(o=>{o.addEventListener("click",c=>{let g=c.target,C=g.getAttribute("href").replace("#/","");T.forEach(L=>{L.classList.remove("selected")}),g.classList.add("selected"),i.setFilter(C==""?void 0:C),e()})})};i.initStore();$("#app");
