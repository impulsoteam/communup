const DefaultLayout = () => import('layouts/Default.vue');
const IndexPage = () => import('pages/Index.vue');
const FindCExpertPage = () => import('pages/FindCExpert.vue');
const ProgramBenefitsPage = () => import('pages/ProgramBenefits.vue');

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'Index', component: IndexPage },
      { path: 'encontre-um-cexpert', name: 'FindCExpert', component: FindCExpertPage },
      { path: 'beneficios-do-programa', name: 'ProgramBenefits', component: ProgramBenefitsPage },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: IndexPage,
  });
}

export default routes;
