document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "59172637762";

  let cliente = document.querySelector("#cliente").value;
  let hora = document.querySelector("#hora").value;
  let servicio = document.querySelector("#servicio").value;
  let pedido = document.querySelector("#pedido").value;
  let cantidad = document.querySelector("#cantidad").value;
  const extra = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
    .map(item => item.value)
    .join(',');
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
    *_Pollos Almendras_*%0A
    
    *Pedidos*%0A%0A
    
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A

		*Indica la hora de tu reserva o pedido*%0A
		${hora}%0A
	
		*¿Cuál es el servicio que se desea realizar?*%0A
    ${servicio}%0A

		*Pedido*%0A
    ${pedido}%0A

		*Cantidad*%0A
    ${cantidad}%0A

    *¿Servicio extra que se desea realizar?(Porciòn extra)*%0A
    ${extra}`;


  if (cliente === "" || hora === "" || servicio === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu pedido, ${cliente}`;

  window.open(url);
});
