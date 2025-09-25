import { router } from ".";
import { getToken } from "@/utils/token";

const list = ['/login']

router.beforeEach(async(to, _, next) => {

  const token = getToken()
  if (token) {
    console.log(to)
    if (to.path === '/login') {
      next({ name: 'Dashboard' })
    } else {
      // todo addRoute
      next()
    }
  } else {
    if (list.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {

})