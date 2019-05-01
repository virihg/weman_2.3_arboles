//ejemplo de funcion para ser llamada dentro de sort input
function multiplyBy2(arr){
    for(var i = 0; i<arr.length; i++){
        arr[i] = arr[i] * 2;
    }
}

function sortInput(arr){
  //llama a tu codigo aqui
  //ejemplo:
  multiplyBy2(arr);

  return arr;
}

//esta funcion toma el contenido de text_input
//valida que sean numeros separados por comas
//muestra el array en el div content o un mensaje de error
function setArray() {
  var text_input = document.getElementById("text_input").value
  var content_div = document.getElementById("content");
  var error_div = document.getElementById("error");
  if(validateInput(text_input)){
      var arr = text_input.split(",").filter(function(i){
        return i.length != 0;
      });
    content_div.innerHTML = (arr.join("<br>"));
    error_div.innerHTML = "";
  } else {
    content_div.innerHTML = "";
    error_div.innerHTML = "Solo números y comas permitidos";
  }
}

//esta funcion solo usa un regex para validar que el input
//contenga solo numeros enteros positivos y comas
function validateInput(toValidate){
   var regex = /^[0-9.,]+$/;
   return regex.test(toValidate);
}


//esta funcion convierte el contenido del div content en un array de numeros
function callSortInput(){
  var content_div = document.getElementById("content");
  if(content_div.innerHTML.length == 0){
      content_div.innerHTML = "";
      document.getElementById("error").innerHTML = "Nada que hacer";
      return;
  }
  var arr = content_div.innerHTML.split("<br>").filter(function(i){
    return i.length != 0;
  }).map(Number);
   var result = sortInput(arr);
  if(Array.isArray(result)){
    document.getElementById("content").innerHTML = result.join("<br>");
  } else {
    document.getElementById("content").innerHTML = result;
  }
}
