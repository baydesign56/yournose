function grett(){
  var d = new Date();
  var n = d.getHours();
  var m = document.getElementById("gre");
  console.log(n) ;
  if(n >= 1 && n <= 9 ){
      m.innerHTML = "Selamat pagi";
    console.log("Selamat pagi" ) ; 

  }
  if(n >= 10 && n <= 14 ){
    m.innerHTML = "Selamat siang";
    console.log("Selamat siang" ) ; 
  }
  if(n >= 15 && n <= 17 ){
    m.innerHTML = "Selamat sore";
    console.log("Selamat sore" ) ; 
  }
  if(n >= 18 && n <= 24 ){
    m.innerHTML = "Selamat malam";
    console.log("Selamat malam" ) ; 
  }
}