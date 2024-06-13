let $ = document
let fastp = $.querySelector('.b-t')
let fastps = $.querySelector('.s-t')
let fastpss = $.querySelector('.d-t')







fastps.addEventListener('click',fastpp)
fastp.addEventListener('click',fastpp)
fastpss.addEventListener('click',fastpp)



function fastpp(){
  Swal.fire({
    title: 'خرید',
    text: ' محصول به سبد خرید اضافه شد',
    icon: 'success',
    confirmButtonText: 'تایید'
  })
}