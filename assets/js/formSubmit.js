
  function submitContact(){
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbz0bmeku2enp206Vxq90xiLXXmuw5ekLxE8Wv8Q/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            // window.location.reload();
            window.location.href="success.html";
        },
        error:function (err){
          window.location.href="failure.html";

        }
    })
}
