import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
    public async login({ auth, request, response}:HttpContextContract){
        const email = request.input('email')
        const password = request.input('password')

        try {
            const token = await auth.use('api').attempt(email, password)
            await auth.use('api').attempt(email, password, {
                expiresIn: '2min'
              })
            return token
        } catch {
            return response.badRequest('Invalid credentials')
        }
    }
}
