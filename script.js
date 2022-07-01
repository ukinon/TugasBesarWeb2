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

let form = document.querySelector("button.reserve");
form.addEventListener('click',function(event){
  event.preventDefault();
  
  $(document).ready(function(){
    $("#popup").fadeIn().css("display","flex")
  });
});