export const constantRouter = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login", //命名路由
    meta: {
      title: '登录',
      hidden: true
    }
  },
  {
    path: "/",
    component: () => import("@/views/home/index.vue"),
    name: "layout", //命名路由
    meta: {
      title: '',
      hidden: false
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import("@/views/home/home.vue"),
        name: "home", //命名路由
        meta: {
          title: '首页',
          hidden: false,
          icon: "House"
        }
      }
    ]
  },
  {
    path: "/screen",
    component: () => import("@/views/screen/index.vue"),
    name: "Screen", //命名路由
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: "Monitor"
    },
  },
  {
    path: "/acl",
    component: () => import("@/views/home/index.vue"),
    name: "Acl", //命名路由
    meta: {
      title: '权限管理',
      hidden: false,
      icon: "Lock"
    },
    redirect:'/acl/user',
    children: [
      {
        path: '/acl/user',
        component: () => import("@/views/acl/user/index.vue"),
        name: "Acl", //命名路由
        meta: {
          title: '用户管理',
          hidden: false,
          icon: "User"
        }
      },
      {
        path: '/acl/role',
        component: () => import("@/views/acl/role/index.vue"),
        name: "Role", //命名路由
        meta: {
          title: '角色管理',
          hidden: false,
          icon: "Coordinate"
        }
      },
      {
        path: '/acl/permission',
        component: () => import("@/views/acl/permission/index.vue"),
        name: "Permission", //命名路由
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: "Operation"
        }
      },
    ]
  },
  {
    path: '/product',
    component: () => import("@/views/home/index.vue"),
    name: "Product", //命名路由
    meta: {
      title: '商品管理',
      hidden: false,
      icon: "Goods"
    },
    redirect:'/product/attr',
    children:[
      {
        path: '/product/attr',
        component: () => import("@/views/product/attr/index.vue"),
        name: "Attr", //命名路由
        meta: {
          title: '属性管理',
          hidden: false,
          icon: "Tickets"
        }
      },
      {
        path: '/product/trademark',
        component: () => import("@/views/product/trademark/index.vue"),
        name: "Trademark", //命名路由
        meta: {
          title: '品牌管理',
          hidden: false,
          icon: "ShoppingCartFull"
        }
      },
      {
        path: '/product/spu',
        component: () => import("@/views/product/spu/index.vue"),
        name: "Spu", //命名路由
        meta: {
          title: 'SPU管理',
          hidden: false,
          icon: "Refrigerator"
        }
      },
      {
        path: '/product/sku',
        component: () => import("@/views/product/sku/index.vue"),
        name: "Sku", //命名路由
        meta: {
          title: 'SKU管理',
          hidden: false,
          icon: "Cpu"
        }
      },
    ]
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404", //命名路由
    meta: {
      title: '404',
      hidden: true
    }
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any", //命名路由
    meta: {
      title: 'any',
      hidden: true
    }
  },
];
