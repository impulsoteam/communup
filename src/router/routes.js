const DefaultLayout = () => import('layouts/Default.vue');
const IndexPage = () => import('pages/Index.vue');
const FindCExpertPage = () => import('pages/FindCExpert.vue');

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'Index', component: IndexPage },
      { path: 'encontre-um-cexpert', name: 'FindCExpert', component: FindCExpertPage },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
