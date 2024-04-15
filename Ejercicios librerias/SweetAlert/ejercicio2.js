//Agregar un evento de clic al botón con el ID "sweetBtn"//
document.getElementById('sweetBtn').addEventListener('click', function() {
    //Mostrar un cuadro de diálogo SweetAlert con un mensaje de éxito//
  swal({
    title: "¡Bien hecho!",
    text: "¡Has hecho clic en el botón!",
    icon: "success",
    button: "¡Entendido!",
  });
});
