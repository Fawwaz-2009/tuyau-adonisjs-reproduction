import type { HttpContext } from '@adonisjs/core/http'

export default class SomeController {
  public async index(ctx: HttpContext) {
    return ctx.response.send('Hello World')
  }
}
