var form = `<div>
  <div class="form-group">
    <label for="name">Producto</label>
    <input type="text" class="form-control" id="producto" aria-describedby="emailHelp" placeholder="Nombre del artículo">
  </div>

  <div class="form-group mt-3">
    <label for="stock">Stock</label>
    <input type="number" class="form-control" id="stock" placeholder="Existencias">
  </div>
  
  <div class="form-group mt-3">
  <label for="precio">Precio</label>
  <input type="number" class="form-control" id="precio" placeholder="Ingrese costo real">
</div>

<div class="form-group mt-3">
    <label for="ventas">Ventas</label>
    <input type="number" class="form-control" id="ventas" placeholder="Ingrese ventas semanales">
  </div>

  <button type="submit" class="btn btn-primary mt-3" onclick="save()">Agregar</button>
</div>`;

function table() {
    let table = `<table class="table">
  <thead>
    <tr>
      <th class="col-1">NO</th>
      <th class="col-3">Producto</th>
      <th class="col-1">Stock</th>
      <th class="col-1">Precio</th>
      <th class="col-1">Ventas</th>
      <th class="col-2">Editar</th>
      <th class="col-2">Eliminar</th>
    </tr>
  </thead>
  <tbody>`;
    for (let i = 0; i < details.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${details[i].producto}</td>
      <td>${details[i].stock}</td>
      <td>${details[i].precio}</td>
      <td>${details[i].ventas}</td>
      <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Editar</button></td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Eliminar</button></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};
document.getElementById("form").innerHTML = form;
details = [];
getData();
table();
function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};
function save() {
    let producto = document.getElementById("producto");
    let stock = document.getElementById("stock");
    let precio = document.getElementById("precio");
    let ventas = document.getElementById("ventas");

    if (producto.value == 0) {
        alert("producto esta vacío");
        return
    }
    let data = {
        producto: producto.value,
        stock: stock.value,
        precio: precio.value,
        ventas: ventas.value

    };
    details.push(data);
    setData();

    //console.log(details)
    //console.log(stock.value)
    table();
    producto.value = "";
    stock.value = "";
    precio.value = "";
    ventas.value = "";
};
function deleteData(index) {
    details.splice(index, 1);
    setData();
    table();

    // console.log('delete work')
    // console.log(details)
};

function edit(index) {
    let editForm = `<div>
  <div class="form-group">
    <label for="producto">Producto</label>
    <input type="text" value="${details[index].producto}" class="form-control" id="newProducto" aria-describedby="emailHelp" placeholder="Nombre del artículo">

  </div>
  <div class="form-group mt-3">
    <label for="stock
    ">Stock</label>
    <input type="number" value="${details[index].stock}" class="form-control" id="newStock" placeholder="Actualizar stock">
  </div>

  </div>
  <div class="form-group mt-3">
    <label for="precio
    ">precio</label>
    <input type="number" value="${details[index].precio}" class="form-control" id="newPrecio" placeholder="Actualizar precio">
  </div>

  </div>
  <div class="form-group mt-3">
    <label for="stock
    ">Stock</label>
    <input type="number" value="${details[index].ventas}" class="form-control" id="newventas" placeholder="Actualizar ventas">
  </div>

  <button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Actualizar</button>
</div>`;
    document.getElementById("form").innerHTML = editForm;
    // console.log('edit work');
};
function update(index) {
    let newProducto = document.getElementById('newProducto');
    let newStock = document.getElementById('newStock');
    let newPrecio = document.getElementById('newPrecio');
    let newventas = document.getElementById('newventas');

    details[index] = {
        producto: newProducto.value,
        stock: newStock.value,
        precio: newPrecio,
        ventas: newventas,

    };
    setData();
    table();
    document.getElementById("form").innerHTML = form;
// console.log('update work')
// console.log(details)
}


