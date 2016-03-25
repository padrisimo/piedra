// var usuarioElige = prompt("piedra, papel o tijera?");

function yea(dato) {
  var usuarioElige = dato;
  var computadoraElige = Math.random();
  if (computadoraElige <0.34){
  	computadoraElige = "piedra";
  }else if(computadoraElige <=0.67){
  	computadoraElige = "papel";
  }else{
  	computadoraElige = "tijera";
  }


  var comparar= function(eleccion1,eleccion2){
      if(eleccion1===eleccion2){
          return "¡Es un empate!";
      }
      if(eleccion1==="piedra"){
          if(eleccion2==="tijera"){
              return "piedra gana";
          }else{
              return "papel gana";
          }
      }else if(eleccion1 === "papel"){
                if(eleccion2 === "piedra"){
                    return "papel gana";
                  }else{
                    return "tijera gana";
                    }
                }else if(eleccion1 === "tijera"){
                          if(eleccion2 === "piedra"){
                              return "gana piedra";
                            }else{
                              return "tijera gana";
                              }
                          }
                // ouyea
    };

  var solucion = comparar(usuarioElige,computadoraElige);

  console.log(solucion);
  document.getElementById("compu").innerHTML = " la compu elige " + computadoraElige;
  document.getElementById("este").innerHTML = solucion ;


}

// hasta aqui lo nuevo
