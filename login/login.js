let clic = document.querySelector('.btn_form')
var app = document.getElementById('app');
let da = document.querySelector('.da')
let saa = document.querySelector('.saa')

clic.addEventListener('click',mani)

function mani(e){
    e.preventDefault()

    var typewriter = new Typewriter(app, {
        loop: true
      });
      
      typewriter
        .typeString('هنوز بک اند سایت تکمیل نشده هفته بعد که تکمیل شد بیا ثبت نام کن😉')
        .pauseFor(300)
        .deleteAll()
        .typeString('حالا شاید هفته بعدم نشد 😂🤔')
        .pauseFor(1000)
        .deleteAll()
        .start();
    
}

let sw = Swal.mixin({
  toast : true,
  position : 'top',
  showconfirmButton : false
  
})



clic.addEventListener('click', function(e){
   e.preventDefault()
   let nn = window.navigator.language;
  
  
   axios({
     method:'post',
     url:'https://bcdf-1017c-default-rtdb.firebaseio.com/uzers.json',
     data: JSON.stringify(nn)
   }).then(k=>console.log('ll>'+k))




  if(saa.value.length < 6){
    sw.fire({
      title : 'ورود ناموفق',
      text : 'رمز عبور شما کمتر از 6 کاراکتر است:)',
      icon: 'error'})
  }else if(da.value.length < 8){
    sw.fire({
      title : 'ورود ناموفق',
      text : 'نام کاربری شما کمتر از 8 کاراکتر است:)',
      icon: 'error'})
  }else{
    sw.fire({ title : 'ورود موفق',
      text : 'شما با موفقیت وارد شدید',
      icon : 'success'})}
  
})

 




