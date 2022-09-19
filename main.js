const toggleBtn = document.querySelector('.dash__toggleBtn');
const menu = document.querySelector('.dash__menu');
const sns = document.querySelector('.dash__sns');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    sns.classList.toggle('active');
});