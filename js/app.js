let $ = document
let fastp = $.querySelector('.b-t')
let fastps = $.querySelector('.s-t')
let fastpss = $.querySelector('.d-t')
let moshaver = $.querySelector('.bg_gradient_main_site')
let moshaverr = $.querySelector('.moshaver')





fastps.addEventListener('click',fastpp)
fastp.addEventListener('click',fastpp)
fastpss.addEventListener('click',fastpp)
moshaverr.addEventListener('click',moshaveri)
moshaver.addEventListener('click',moshaveri)


function fastpp(){
  Swal.fire({
    title: 'خرید',
    text: ' محصول به سبد خرید اضافه شد',
    icon: 'success',
    confirmButtonText: 'تایید'
  })
}

function moshaveri(){
  Swal.fire({
    title: 'مشاوره',
    text: 'درخواست شما برای مشاوره ثبت شد و پشتیبانان ما در اسرع وقت با شما تماس خواهد گرفت',
    icon: 'success',
    confirmButtonText: 'تایید'
  })
}