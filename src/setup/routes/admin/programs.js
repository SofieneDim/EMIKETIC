// App Imports
import params from '../../../setup/config/params'
import Programs from '../../../modules/admin/programs/Programs'

// User programs routes
export const programsManage = {
    path: '/programs-manage',
    component: Programs,
    auth: true,
    role: params.user.roles.admin
}