
import Echarts from '../views/charts/Echarts';
import Forms from '../views/forms/Forms';

import Tables from '../views/Tables';

import BasicTable from '../views/Tables/BasicTable'
import EditTable from '../views/Tables/EditTable'
let routes = [
  { 
    name:"首页",
    path: "/",
    component: require('../views/Home/index'),
    exact: true,
    
  },
  {
    path: "/forms",
    component: Forms, // 嵌套路由
    title: "表单"
  },
  {
    path: "/table",
    component: Tables,
    title: "表格",
    routes: [
      {
        path: "/table/",
        component: BasicTable,
        title: "基础表格"
      },
      {
        path: "/table/editTable/",
        component: EditTable,
        title: "可编辑表格"
      }
    ]
  }
];

export default routes;