let serviceBrands = document.querySelectorAll('.service__brands')
let serviceMoreBtns = document.querySelectorAll('.service__brands-more')

serviceMoreBtns.forEach(function (serviceMoreBtn) {
  serviceMoreBtn.addEventListener('click', function (e) {
    if (!e.target.classList.contains('service__brands-more_active')) {
      e.target.classList.add('service__brands-more_active')
      e.target.innerText = 'Скрыть'
      serviceMoreBtn.parentNode.childNodes[1].classList.add(
        'service__brands_active'
      )
    } else {
      e.target.classList.remove('service__brands-more_active')
      e.target.innerText = 'Показать все'
      serviceMoreBtn.parentNode.childNodes[1].classList.remove(
        'service__brands_active'
      )
    }
  })
})

// function changeServiceBrands() {
//   if (!serviceBrands.classList.contains('service__brands_active')) {
//     serviceMoreBtn.classList.add('service__brands-more_active');
//     serviceBrands.classList.add('service__brands_active');
//     serviceMoreBtn.innerText = 'Скрыть';
//   } else {
//     serviceMoreBtn.classList.remove('service__brands-more_active');
//     serviceBrands.classList.remove('service__brands_active');
//     serviceMoreBtn.innerText = 'Показать все';
//   }
// }

// serviceMoreBtn.addEventListener('click', function () {
//   changeServiceBrands();
// });

// console.log(serviceMoreBtn.value);
