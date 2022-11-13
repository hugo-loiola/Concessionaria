import User from 'App/Models/User'

export default class UsersController {
  async store({ request }) {
    const dados = await request.only(['email', 'password'])
    return await User.create(dados)
  }

  async login({ request, auth }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return await auth.use('api').attempt(email, password)
  }
}
