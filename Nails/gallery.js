//display the photos from gallery

function modal() {
 
    var modal = document.getElementById('myModal'); 
    var modalImg = $("#img");
    
    $('.photo').click(function () {
        modal.style.display = "block";
        var newSrc = this.src;
        modalImg.attr('src', newSrc);        
    });
   
    $(document).click(function (e) {
        if ($(e.target).is('#myModal')) {            
            $('#myModal').fadeOut(1000);
        }
    });
}