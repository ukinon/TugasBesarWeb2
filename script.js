const totalharga = document.getElementById("total");
const customer = document.getElementById("customer");


function changeHarga50(){
  const hargaPerOrang = 50000;
  customer.addEventListener("input", function(ev){
    const value = ev.currentTarget.value;
    console.log(value);
    const total = value * hargaPerOrang;
    totalharga.value = total.toFixed(2);
    });
  };
  function changeHarga40(){
    const hargaPerOrang = 40000;
    customer.addEventListener("input", function(ev){
      const value = ev.currentTarget.value;
      console.log(value);
      const total = value * hargaPerOrang;
      totalharga.value = total.toFixed(2);
      });
    };
    function changeHarga30(){
      const hargaPerOrang = 30000;
      customer.addEventListener("input", function(ev){
        const value = ev.currentTarget.value;
        console.log(value);
        const total = value * hargaPerOrang;
        totalharga.value = total.toFixed(2);
        });
      };
      function changeHarga100(){
        const hargaPerOrang = 100000;
        customer.addEventListener("input", function(ev){
          const value = ev.currentTarget.value;
          console.log(value);
          const total = value * hargaPerOrang;
          totalharga.value = total.toFixed(2);
          });
        };
        function changeHarga150(){
          const hargaPerOrang = 150000;
          customer.addEventListener("input", function(ev){
            const value = ev.currentTarget.value;;
            console.log(value);
            const total = value * hargaPerOrang;
            totalharga.value = total.toFixed(2);
            });
          };

    $(document).ready(function (){
        $("#backbtn").click(function () {
          $("#popup").fadeOut();
          form.reset();
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