/* eslint-disable prettier/prettier */
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
import StringsController from 'App/Controllers/Http/StringsController'

Route.post('/', async () => {
  return { hello: 'world' }
})

Route.post('/string', 'StringsController.validateString')
Route.post('/string/rules', 'StringsController.validateStringWithRules')
Route.post('/string/database', 'StringsController.validateStringWithDatabase')
Route.post('/string/equals', 'StringsController.validateStringWithEquals'),
Route.post('/enum/ValidateEnum', 'EnumsController.validateEnum')
Route.post('/number/ValidateNumber', 'NumbersController.validateNumber')