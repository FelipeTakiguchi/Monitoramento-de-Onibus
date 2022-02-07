import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'AuthController.verify').as('home.index')

Route.post('/gps', 'VeiculosController.show').as('gps.show')
