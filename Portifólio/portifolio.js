document.addEventListener("DOMContentLoaded", function(event) {
    var cont = 0;
    var nomeT = 'Leandro Siqueira';
    var velocidade = 100;

    function typeWriterName() {
    if (cont < nomeT.length) {
      document.getElementById("name").innerHTML += nomeT.charAt(cont);
      cont++;
      setTimeout(typeWriterName, velocidade);
      if (cont == nomeT.length)  typeWriterJob();
    } 
      
    }

   var i = 0;
   var funcaoT = 'Logística';
   var velocidade = 100;

   function typeWriterJob() {
    if (i < funcaoT.length) {
      document.getElementById("job").innerHTML += funcaoT.charAt(i);
      i++;
      setTimeout(typeWriterJob, velocidade);
    }
   }

   typeWriterName();

   } 
 ) ;
