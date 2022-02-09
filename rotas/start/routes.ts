import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'VeiculosController.form').as('gps.form')

Route.post('/gps', 'VeiculosController.show').as('gps.show')
