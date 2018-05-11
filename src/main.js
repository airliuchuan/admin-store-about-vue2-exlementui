import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Row,
  Col,
  Button,
  Container,
  Header,
  Aside,
  Main,
  Submenu,
  MenuItem,
  Menu,
  MenuItemGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Breadcrumb,
  BreadcrumbItem
} from 'element-ui'
import '@/assets/css/element-variables.scss'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
