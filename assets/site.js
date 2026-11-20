function toggleMenu(){const nav=document.getElementById('nav');const button=document.querySelector('.menu');nav.classList.toggle('open');button.setAttribute('aria-expanded',nav.classList.contains('open'));}
document.addEventListener('DOMContentLoaded',()=>{const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();});
