import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/admin/AdminDashboardView.vue'
import AdminNotificationView from '@/views/admin/AdminNotificationView.vue'
import AdminDashboardView from '@/views/admin/AdminDashboardView.vue'
import AdminSettingView from '@/views/admin/AdminSettingView.vue'
import AdminAccountView from '@/views/admin/AdminAccountView.vue'
import AdminApartmentView from '@/views/admin/AdminApartmentView.vue'
import AdminResidentView from '@/views/admin/AdminResidentView.vue'
import AdminRevenueView from '@/views/admin/AdminRevenueView.vue'
import AdminStatisticalView from '@/views/admin/AdminStatisticalView.vue'
import AdminLoginFormView from '@/views/admin/form/AdminLoginFormView.vue'
import AdminResetPasswordFormView from '@/views/admin/form/AdminResetPasswordFormView.vue'
import AdminCodeConfirmFormView from '@/views/admin/form/AdminCodeConfirmFormView.vue'
import AdminNewPasswordFormView from '@/views/admin/form/AdminNewPasswordFormView.vue'
import AdminRegisterFormView from '@/views/admin/form/AdminRegisterFormView.vue'
import AdminNewApartmentFormView from '@/views/admin/form/AdminNewApartmentFormView.vue'
import AdminCreateAccountFormView from "@/views/admin/form/AdminCreateAccountFormView.vue";
import AdminDoubleCheckFormView from "@/views/admin/form/AdminDoubleCheckFormView.vue";
import AdminEditAccountFormView from "@/views/admin/form/AdminEditAccountFormView.vue";
import AdminEditApartmentFormView from "@/views/admin/form/AdminEditApartmentFormView.vue";
import AdminEditFeeFormView from "@/views/admin/form/AdminEditFeeFormView.vue";
import AdminEditUserFormView from "@/views/admin/form/AdminEditUserFormView.vue";
import AdminNewFeeFormView1 from "@/views/admin/form/AdminNewFeeFormView1.vue";
import AdminNewFeeFormView2 from "@/views/admin/form/AdminNewFeeFormView2.vue";
import AdminNewFeeFormView3 from "@/views/admin/form/AdminNewFeeFormView3.vue";
import AdminNewFeePopUpFormView from "@/views/admin/form/AdminNewFeePopUpFormView.vue";
import AdminNewNotiFormView from "@/views/admin/form/AdminNewNotiFormView.vue";
import AdminNewUserFormView from "@/views/admin/form/AdminNewUserFormView.vue";
import AdminResponseFormView from "@/views/admin/form/AdminResponseFormView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin-dashboard',
      name: 'admin-dashboard',
      component: AdminDashboardView
    },
    {
      path: '/admin-account',
      name: 'admin-account',
      component: AdminAccountView
    },
    {
      path: '/admin-apartment',
      name: 'admin-apartment',
      component: AdminApartmentView
    },
    {
      path: '/admin-resident',
      name: 'admin-resident',
      component: AdminResidentView
    },
    {
      path: '/admin-revenue',
      name: 'admin-revenue',
      component: AdminRevenueView
    },
    {
      path: '/admin-statistical',
      name: 'admin-statistical',
      component: AdminStatisticalView
    },
    {
      path: '/admin-notification',
      name: 'admin-notification',
      component: AdminNotificationView
    },
    {
      path: '/admin-setting',
      name: 'admin-setting',
      component: AdminSettingView
    },
    {
      path: '/admin-login-form',
      name: 'admin-login-form',
      component: AdminLoginFormView
    },
    {path: '/admin-reset-password-form',
      name: 'admin-reset-password-form',
      component: AdminResetPasswordFormView
    },
    {
        path: '/admin-code-confirm-form',
        name: 'admin-code-confirm-form',
        component: AdminCodeConfirmFormView
    },
    {
        path: '/admin-new-password-form',
        name: 'admin-new-password-form',
        component: AdminNewPasswordFormView
    },
    {
        path: '/admin-register-form',
        name: 'admin-register-form',
        component: AdminRegisterFormView
    },
    {
        path: '/admin-new-apartment-form',
        name: 'admin-new-apartment-form',
        component: AdminNewApartmentFormView
    },
    {
        path: '/admin-create-account-form',
        name: 'admin-create-account-form',
        component: AdminCreateAccountFormView
    },
    {
        path: '/admin-double-check-form',
        name: 'admin-double-check-form',
        component: AdminDoubleCheckFormView
    },
    {
        path: '/admin-edit-account-form',
        name: 'admin-edit-account-form',
        component: AdminEditAccountFormView
    },
    {
        path: '/admin-edit-apartment-form',
        name: 'admin-edit-apartment-form',
        component: AdminEditApartmentFormView
    },
    {
        path: '/admin-edit-fee-form',
        name: 'admin-edit-fee-form',
        component: AdminEditFeeFormView
    },
    {
        path: '/admin-edit-user-form',
        name: 'admin-edit-user-form',
        component: AdminEditUserFormView
    },
    {
        path: '/admin-new-fee-form1',
        name: 'admin-new-fee-form1',
        component: AdminNewFeeFormView1
    },
    {
        path: '/admin-new-fee-form2',
        name: 'admin-new-fee-form2',
        component: AdminNewFeeFormView2
    },
    {
        path: '/admin-new-fee-form3',
        name: 'admin-new-fee-form3',
        component: AdminNewFeeFormView3
    },
    {
        path: '/admin-new-fee-pop-up-form',
        name: 'admin-new-fee-pop-up-form',
        component: AdminNewFeePopUpFormView
    },
    {
        path: '/admin-new-noti-form',
        name: 'admin-new-noti-form',
        component: AdminNewNotiFormView
    },
    {
        path: '/admin-new-user-form',
        name: 'admin-new-user-form',
        component: AdminNewUserFormView
    },
    {
        path: '/admin-response-form',
        name: 'admin-response-form',
        component: AdminResponseFormView
    }

  ]
})

export default router
