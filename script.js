
const btn = document.querySelector('.mobile-toggle');
const links = document.querySelector('.nav-links');
if (btn && links) btn.addEventListener('click',()=>links.classList.toggle('open'));
const path = window.location.pathname.replace(/\/index\.html$/,'/');
document.querySelectorAll('.nav-links a').forEach(a=>{
  if(a.getAttribute('href')=== '#' ) return;
  const href = a.getAttribute('href');
  if (path.endsWith('/') && href==='index.html') a.classList.add('active');
  else if (path.includes(href)) a.classList.add('active');
});
