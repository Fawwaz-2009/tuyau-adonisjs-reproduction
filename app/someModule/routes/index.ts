import router from '@adonisjs/core/services/router'
import SomeController from '../controllers/index.js'

function someModuleRoutes() {
  router.get('/some-thing', [SomeController, 'index'])
}

export default someModuleRoutes
