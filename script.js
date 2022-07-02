const totalharga = document.getElementById("total");
const customer = document.getElementById("customer");


function changeHarga(){
  const hargaPerOrang = 50000;
  customer.addEventListener("input", function(ev){
    const value = ev.currentTarget.value;
    console.log(value);
    const total = value * hargaPerOrang;
    totalharga.value = total.toFixed(2);
    });
  };

    $(document).ready(function (){
        $("#backbtn").click(function () {
          $("#popup").fadeOut();
        });     
      });
      $(document).ready(function (){
        $("#thankyou").click(function () {
          $("#thankyou").fadeOut();
        });     
      });

document.querySelectorAll(".reserve").forEach( reserve => reserve.addEventListener("click", (event) => {
  event.preventDefault();
  $(document).ready(function(){
    $("#popup").fadeIn().css("display","flex")
  });
}));

let form = document.getElementById("myform");
form.addEventListener('submit',function(event){
  event.preventDefault();
  $(document).ready(function(){
    $("#thankyou").fadeIn().css("display","flex")
  });
  $(document).ready(function(){
    $("#popup").fadeOut()
  });
  form.reset();
});

total.onkeypress=function(ev){
  ev.preventDefault();
};