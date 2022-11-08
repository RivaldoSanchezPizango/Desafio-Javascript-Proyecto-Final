const productos = [
  { nombre: "Cafe", precio: 750 },
  { nombre: "Leche", precio: 340 },
  { nombre: "Arroz", precio: 230 },
  { nombre: "Aceite", precio: 700 },
  { nombre: "Galletas", precio: 150 },
]

let carrito = [];

let seleccion = prompt("Hola desea comprar algun producto si o no");

while (seleccion != "si" && seleccion != "no") {
  alert("Ingrese si o no")
  seleccion = prompt("Hola desea comprar algo si o no");
}

if (seleccion == "si") {
  alert("A continuacion nuestra lista de productos");
  console.log(productos);

  const nuestrosProductos = productos.map(
    (producto) => producto.nombre + "" + producto.precio + "$"
  );
  alert(nuestrosProductos.join(" - "))
} else if (seleccion == "no") {
  alert("Gracias por venir")
}

while (seleccion != "no") {
  let producto = prompt("Agregar al carrito");
  let precio = 0;

  if (producto == "Cafe" || producto == "Leche" || producto == "Arroz" || producto == "Aceite" || producto == "Galletas") {
    switch (producto) {
      case "Cafe":
        precio = 750;
        break;

      case "Leche":
        precio = 340;
        break;

      case "Arroz":
        precio = 230;
        break;

      case "Aceite":
        precio = 700;
        break;

      case "Galletas":
        precio = 150;
        break;
    }
    let unidades = parseInt(prompt("Cuantas unidades quieres llevar"));

    carrito.push({ producto, unidades, precio });
    console.log(carrito);
  } else {
    alert("No tenemos ese producto");
  }

  seleccion = prompt("Desea seguir comprando");

  while (seleccion === "no") {
    alert("Gracias por su compra");
    carrito.forEach((carritoFinal) => {
      console.log(`producto ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
      total a pagar ${carritoFinal.unidades * carritoFinal.precio}`);
    })
    break;
  }
}

const total = carrito.reduce((acumulador, el) => acumulador + el.precio * el.unidades, 0);
console.log(`El total a pagar es: ${total}`);
