import Layout from '../../layout'
export default {
  path: '/system',
  name: 'system:dept:list',
  meta: {
    title: '系统管理'
  },
  component: Layout,
  children: {
    path: '/system/system/dept',
    component: () => import('../../views/system-dept'),
    meta: {
      title: '部门管理'
    }
  }
}
