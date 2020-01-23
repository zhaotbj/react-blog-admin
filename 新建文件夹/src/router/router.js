let routes =[
  {
    icon: 'pie-chart',
    path: "/",
    exact: true,
    title: "首页"
  },
  {
    icon: 'desktop',
    path: "/articles",
    title: "文章管理"
  },
  {
    icon: 'user',
    path: "/users",
    title: "用户管理",
    routes: [
      {
        icon: 'user',
        path: "/users/list",
        title: "用户列表"
      }
    ]
  }
];

export default routes;