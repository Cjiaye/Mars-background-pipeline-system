import Layout from '../../layout'
export default {
  path: '/audit',
  name: 'audit:leave:list',
  meta: {
    title: '审批管理'
  },
  component: Layout,
  children: {
    path: '/audit/leave',
    component: () => import('../../views/audit-leave'),
    meta: {
      title: '休假申请'
    }
  }
}
