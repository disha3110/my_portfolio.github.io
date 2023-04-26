// header toggle
 let menubtn=document.getElementById('menubtn')
 menubtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
 })

//typing effect
let typed=new Typed('.auto-input',{
    strings:['Front-End Developer!','Computer Science Student!','Web Developer!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
});

//active link on scroll
let navlinks =document.querySelectorAll('nav ul li a')
// get all sections
let sections=document.querySelectorAll('section')
console.log('sections')

window.addEventListener('scroll',function(){
   const scrollPos=window.scrollY + 20
   sections.forEach(section =>{
    if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
        navlinksforEach(link =>{
            link.classList.remove("active");
            if(section.getAttribute('id')===link.grtAttribute('href').substring(1)){
                link.classList.add('active')
            }
        });
    }
   });
});
