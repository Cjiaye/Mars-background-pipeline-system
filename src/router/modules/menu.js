import Layout from '../../layout'
export default {
  path: '/system',
  name: 'system:menu:list',
  meta: {
    title: '系统管理'
  },
  component: Layout,
  children: {
    path: '/system/menu',
    component: () => import('../../views/system-menu'),
    meta: {
      title: '菜单管理管理'
    }
  }
}
