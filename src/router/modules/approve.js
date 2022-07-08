import Layout from '../../layout'
export default {
  path: '/audit',
  name: 'audit:approve:list',
  meta: {
    title: '审批管理'
  },
  component: Layout,
  children: {
    path: '/audit/approve',
    component: () => import('../../views/audit-approve'),
    meta: {
      title: '待审核'
    }
  }
}
