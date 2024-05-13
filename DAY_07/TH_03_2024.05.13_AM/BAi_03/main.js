$(document).ready(function(){
    var currentSlide = 0;
    var totalSlides = $(".slide").length;
    function showSlide(index) {
      $(".slide").hide();
      $(".slide").eq(index).show();
    }
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }
    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    }
    showSlide(currentSlide);
    setInterval(nextSlide, 5000);
    $("#nextBtn").click(function(){
      nextSlide();
    });
    $("#prevBtn").click(function(){
      prevSlide();
    });
  });