(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t.p+"static/media/Post1.7c82c67a.jpg"},11:function(e,a,t){e.exports=t.p+"static/media/Post2.079470bc.jpg"},12:function(e,a,t){e.exports=t(42)},21:function(e,a,t){},22:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(8),r=t.n(i),o=(t(21),t(22),t(23),t(40),t(41),t(5)),c=t.n(o),s=t(6),m=t.n(s),u=t(9),d=t.n(u),E=t(10),p=t.n(E),g=t(11),v=t.n(g);const f=()=>l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:d.a,alt:"logo sito"})),l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement("a",{href:"#blog"},"Blog")),l.a.createElement("li",null,l.a.createElement("a",{href:"#timer"},"Timer")),l.a.createElement("li",null,l.a.createElement("a",{href:"#about"},"About")))),b=()=>l.a.createElement("div",{className:"header"},l.a.createElement("img",{src:c.a,alt:"Header",className:"header-image"}),l.a.createElement("div",{className:"header-content"},l.a.createElement("h1",null,"Benvenuto nel nostro Sito"),l.a.createElement("p",null,"Scopri la tranquillit\xe0 attraverso la meditazione e la consapevolezza."),l.a.createElement("button",{className:"cta-button"},"Inizia la Meditazione"))),h=()=>{const[e,a]=Object(n.useState)(0),[t,i]=Object(n.useState)(!1),[r,o]=Object(n.useState)(!1),[c,s]=Object(n.useState)(0),m=Object(n.useRef)(null);return l.a.useEffect(()=>{const n=setInterval(()=>void(t&&!r&&e>0?a(e=>e-1):t&&!r&&0===e&&(i(!1),alert("Timer scaduto!"))),1e3);return()=>clearInterval(n)},[t,r,e]),l.a.createElement("div",{className:"timer"},l.a.createElement("p",null,(e=>{const a=Math.floor(e/60),t=e%60;return"".concat(String(a).padStart(2,"0")," Minuti e ").concat(String(t).padStart(2,"0")," Secondi")})(e)),l.a.createElement("input",{ref:m,type:"number",placeholder:"Inserisci i secondi"}),l.a.createElement("div",{id:"timer"},l.a.createElement("button",{onClick:()=>{if(t)o(!r);else if(m.current){const e=parseInt(m.current.value,10),t=Math.max(0,e);t>0?(a(t),s(t),i(!0),o(!1)):alert("Inserisci un valore positivo per avviare il timer.")}}},t?r?"Riprendi":"Pausa":"Avvia"),l.a.createElement("button",{onClick:()=>{i(!1),o(!1),a(c)}},"Resetta")))},N=()=>{const e=[{id:1,image:c.a,title:"Meditare in silenzio",description:"La sensazione di pace del momento"},{id:2,image:m.a,title:"Meditare in solitudine",description:"I vantaggi del effetuarlo da soli"},{id:3,image:c.a,title:"Meditare in silenzio",description:"La sensazione di pace del momento"},{id:4,image:m.a,title:"Meditare in solitudine",description:"I vantaggi del effetuarlo da soli"}];return l.a.createElement("section",{className:"blog-section"},e.map(e=>l.a.createElement("div",{key:e.id,className:"blog-card",id:"blog"},l.a.createElement("img",{src:e.image,alt:"Post ".concat(e.id),className:"blog-image"}),l.a.createElement("div",{className:"blog-content"},l.a.createElement("h3",{className:"blog-title"},e.title),l.a.createElement("p",{className:"blog-description"},e.description)))))},z=()=>l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"section-text"},l.a.createElement("h2",null,"Oasi Interiore: Meditazione nel Silenzio del Deserto"),l.a.createElement("p",null,"Scopri la pace nel deserto con la nostra sezione di meditazione. Una foto suggestiva cattura un momento di serenit\xe0 mentre ti guidiamo attraverso sessioni che fondono la quiete del deserto con la tua pratica meditativa. Trova l'oasi della calma interiore e rinnova la tua energia attraverso la meditazione in questo ambiente unico.")),l.a.createElement("div",{className:"section-image"},l.a.createElement("img",{src:v.a,alt:"Immagine Sezione"}))),S=()=>l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"section-image"},l.a.createElement("img",{src:p.a,alt:"Immagine Sezione"})),l.a.createElement("div",{className:"section-text"},l.a.createElement("h2",null,"Serenit\xe0 Domestica: Meditazione nel Tuo Rifugio"),l.a.createElement("p",null,"Esplora la pace nel comfort del tuo spazio con la nostra sessione di meditazione casalinga. Attraverso immagini serene, ti guideremo in sessioni che trasformano la tua casa in un rifugio di calma e consapevolezza. Sperimenta la serenit\xe0 della meditazione in un contesto familiare, riscoprendo l'equilibrio interiore senza dover uscire dalle tue mura. Connetti mente e spirito nel tuo spazio sicuro e trova la tranquillit\xe0 quotidiana attraverso la meditazione."))),I=()=>l.a.createElement("div",{className:"about-us-with-newsletter",id:"about"},l.a.createElement("div",{className:"about-us-content"},l.a.createElement("h2",null,"Chi Siamo"),l.a.createElement("p",null,"Benvenuti nel nostro sito di meditazione! Siamo un team appassionato che si impegna a guidarti nel viaggio della consapevolezza e della tranquillit\xe0 attraverso la pratica della meditazione.")),l.a.createElement("div",{className:"newsletter-form"},l.a.createElement("h2",null,"Iscriviti alla Newsletter"),l.a.createElement("p",null,"Rimani aggiornato sulle ultime novit\xe0 del blog."),l.a.createElement("form",null,l.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"Inserisci la tua email",required:!0}),l.a.createElement("button",{type:"submit"},"Iscriviti")))),M=()=>l.a.createElement("footer",{className:"footer"},l.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"}),l.a.createElement("div",{className:"footer-content"},l.a.createElement("div",{className:"footer-section"},l.a.createElement("h4",null,"Mappa del Sito"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#blog"},"Blog")),l.a.createElement("li",null,l.a.createElement("a",{href:"#timer"},"Timer")),l.a.createElement("li",null,l.a.createElement("a",{href:"#about"},"Chi Siamo")))),l.a.createElement("div",{className:"footer-section"},l.a.createElement("h4",null,"Seguici"),l.a.createElement("div",{className:"social-icons"},l.a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-facebook"})),l.a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-twitter"})),l.a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-instagram"}))))),l.a.createElement("div",{className:"copyright"},l.a.createElement("p",null,"\xa9 2023 MediationField. Tutti i diritti riservati.")));var w=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null),l.a.createElement(b,null),l.a.createElement(h,null),l.a.createElement(z,null),l.a.createElement(S,null),l.a.createElement(N,null),l.a.createElement(I,null),l.a.createElement(M,null))};var j=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then(a=>{let{getCLS:t,getFID:n,getFCP:l,getLCP:i,getTTFB:r}=a;t(e),n(e),l(e),i(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null))),j()},5:function(e,a,t){e.exports=t.p+"static/media/Slider1.a139b638.jpg"},6:function(e,a,t){e.exports=t.p+"static/media/Slider2.c3a5404a.jpg"},9:function(e,a,t){e.exports=t.p+"static/media/Logo.8a88a9ef.png"}},[[12,1,2]]]);
//# sourceMappingURL=main.086bcfac.chunk.js.map