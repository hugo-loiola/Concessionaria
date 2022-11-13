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

import Route from '@ioc:Adonis/Core/Route'

Route.post('/store', 'UsersController.store')
Route.post('/login', 'UsersController.login')

Route.group(() => {
  Route.resource('/funcionario', 'FuncionariosController').apiOnly()
  Route.resource('/cliente', 'ClientesController').apiOnly()
  Route.resource('/concessionaria', 'ConcessionariasController').apiOnly()
  Route.resource('/venda', 'VendasController').apiOnly()
  Route.resource('/veiculo', 'VeiculosController').apiOnly()
  Route.resource('/tipo', 'TiposController').apiOnly()
  Route.resource('/marca', 'MarcasController').apiOnly()
}).middleware('auth')
