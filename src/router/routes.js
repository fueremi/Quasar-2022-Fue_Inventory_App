const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("pages/Dashboard/Index.vue"),
      },
      {
        path: "sales-orders",
        name: "SalesOrders",
        component: () => import("pages/SalesOrders/Index.vue"),
      },
      {
        path: "packages",
        name: "Packages",
        component: () => import("pages/Packages/Index.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
