function  ifs() {
    
    alert("Vamos usar la funcion if vamos a comparar que numero es mayor");
    alert("Que numero es mayor");
    var a=0;
    var b=0;
    
    a = parseInt(prompt("por favor ingrese el 1er. numero a comparar"));
    b = parseInt(prompt("por favor ingrese el 2do. numero a comprar"));
    
    if (a > b) {
        alert("El numero mayor es " +a);
    }
    else{
        alert("El numero mayor es " +b);
    }
}
function ciclo_for() {
    
    alert("a continuacion e imprimirarn los numeros pares entre el 0 y el 100 en un ciclo for")
    /*     for (var i = 0;i<10;i++){
            if (i>=1) {break}
        alert(i);
           }
    esta imprime 0*/
    
           for (var i = 0;i<100;i++){
            if (i%2 !== 0 ){continue;}
        alert(i);
           }
    
    /*esta imprime los pares*/ 
    
       
    }



    function Switch_Case_letras() {
    
      var letra=prompt("Por favor ingrese la letra a evaluar");
      letra=letra;
      if(letra==""){
          alert("por favor ingrese la letra que desee evaluar");
      }
       
     
        switch (letra) 
        {
            case "a":
                alert ("La letra asignada : " +letra+ " es una vocal");
                break;
            case "e":
                alert ("La letra asignada : " +letra+ " es una vocal");
                break;
            case "i":
                alert ("La letra asignada : " +letra+ " es una vocal");
                break;
            case "o":
                alert ("La letra asignada : " +letra+ " es una vocal");
                break;
            case "u":
                alert ("La letra asignada : " +letra+ " es una vocal");
                break;
            default:
                alert("La letra asignada : " +letra+ " es una consonante");
                break;
        }               
       }