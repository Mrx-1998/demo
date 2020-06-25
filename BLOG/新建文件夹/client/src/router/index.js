import Home from '../pages/Home'
import Archives from '../pages/Archives'
import Classify from '../pages/Classify'
import About from '../pages/About'
import Detailed from '../pages/Detailed'

const routes = [
  {
      path: '/',
      exact: true,
      component: Home
  },
  
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/detailed/:id',
    component: Detailed
  },
  {
    path: '/typeArchives/:id',
    component: Archives
  },
  {
    path: '/Archives',
    component: Archives
  },
  {
    path: '*',
    component: Home
  }
]

export default routes