/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import someModuleRoutes from '#someModule/routes/index'

router.on('/').renderInertia('home')

someModuleRoutes()
