$(function () {

  $('.carousel__inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 861,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      },


    ]
  });


});