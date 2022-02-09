import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VeiculosController {
    public async form({ view }: HttpContextContract) {
        return view.render('pgs/form')
    }
}
