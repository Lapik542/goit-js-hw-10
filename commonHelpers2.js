import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{a as o}from"./assets/vendor-216cde32.js";const l=document.querySelector(".form");l.addEventListener("submit",function(r){r.preventDefault();const n=document.querySelector('input[name="delay"]'),s=document.querySelector('input[name="state"]:checked'),e=parseInt(n.value,10),i=s?s.value:null;if(isNaN(e)||e<0){o.error({title:"Error",message:"Please enter a valid delay value",position:"topRight"});return}new Promise((t,a)=>{setTimeout(()=>{i==="fulfilled"?t(e):i==="rejected"&&a(e)},e)}).then(t=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`,position:"topRight"})},t=>{o.error({title:"Error",message:`❌ Rejected promise in ${t}ms`,position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map