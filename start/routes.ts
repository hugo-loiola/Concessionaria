/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

Route.group(() => {
  Route.post("/cliente_index", "ClientesController.index");
  Route.post("/cliente_store", "ClientesController.store");
  Route.post("/funcionario_index", "FuncionariosController.index");
  Route.post("/funcionario_store", "FuncionariosController.store");
  Route.post("/venda_index", "VendasController.index");
  Route.post("/venda_store", "VendasController.store");
  Route.post("/concessionaria_index", "ConcessionariasController.index");
  Route.post("/concessionaria_store", "ConcessionariasController.store");
  Route.post("/veiculo", "");
  Route.post("/tipo", "");
  Route.post("/marca", "");
}).prefix("/trabalho");
