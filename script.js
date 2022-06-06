$("#tamano").on('change', function() {
    console.log(this.value);
$.ajax({
        data:  this.value,
        url:   'http://localhost:5000/checksize',
        type:  'post',
        success:  function (response) {
                $("#resultado_tamano").html(response);
        }
});
   });