$(document).ready(function(){
    let currentIndex = 0;
    let testimonial = $(".testimonial");
    let totaltestimonial = testimonial.length;

    showTestimonial(currentIndex);


    function showTestimonial(index){
        testimonial.hide();
        testimonial.eq(index).fadeIn();
    }
});