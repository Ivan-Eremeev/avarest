// Slick Slider
function slider(slider,sliderFor) {
  if (slider.length) {
    slider.slick({
      slidesToShow: 1, // Сколько слайдов показывать на экране
      slidesToScroll: 1, // Сколько слайдов пролистывать за раз
      asNavFor: sliderFor, // Связь со слайдерами
      dots: false, // Пагинация
      arrows: false, // Стрелки
      infinite: false, // Зацикленное пролистывание
      swipe: true, // Перелистывание пальцем
      draggable: true, // Перелистывание мышью
    });
    
    sliderFor.slick({
      slidesToShow: 3, // Сколько слайдов показывать на экране
      slidesToScroll: 1, // Сколько слайдов пролистывать за раз
      dots: false, // Пагинация
      arrows: false, // Стрелки
      vertical: true, // Вертикальный слайдер
      asNavFor: slider, // Связь со слайдерами
      focusOnSelect: true, // Выбрать слайд кликом
      infinite: false, // Зацикленное пролистывание
      responsive: [ // Адаптация
        {
          breakpoint: breakMd,
          settings: {
            vertical: false, // Вертикальный слайдер
          }
        },
      ]
    });
  }
}
slider($('.product__slider-for'), $('.product__slider-nav'));