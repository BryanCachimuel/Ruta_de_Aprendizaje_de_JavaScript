$(document).ready(function(){
    let currentIndex = 0;
    let testimonial = $(".testimonial");
    let totaltestimonial = testimonial.length;

    showTestimonial(currentIndex);

    $("#prevBtn").on("click", function(){
        currentIndex = (currentIndex - 1 + totaltestimonial) % totaltestimonial;
        showTestimonial(currentIndex);
    });

    $("#nextBtn").on("click", function(){
        currentIndex = (currentIndex + 1) % totaltestimonial;
        showTestimonial(currentIndex);
    });

    function showTestimonial(index){
        testimonial.hide();
        testimonial.eq(index).fadeIn();
    }
});