import Layout from '../../layout'
export default {
  path: '/system',
  name: 'system:role:list',
  meta: {
    title: '系统管理'
  },
  component: Layout,
  children: {
    path: '/system/system/role',
    component: () => import('../../views/system-role'),
    meta: {
      title: '角色管理'
    }
  }
}
