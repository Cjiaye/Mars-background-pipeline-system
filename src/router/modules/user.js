import Layout from '../../layout'
export default {
  path: '/system',
  name: 'system:user:list',
  meta: {
    title: '系统管理'
  },
  component: Layout,
  children: {
    path: '/system/user',
    component: () => import('../../views/system-user'),
    meta: {
      title: '用户管理'
    }
  }
}
