export default {
  path: "/exam",
  redirect: "/exam/control",
  meta: {
    icon: "ep:setting",
    // showLink: false,
    title: "考试管理",
    rank: 1
  },
  children: [
    {
      path: "/exam/control-cabin",
      name: "ControlCabin",
      component: () => import("@/views/exam/control-cabin.vue"),
      meta: {
        title: "控制仓"
      }
    },
    {
      path: "/exam/notification",
      name: "Notification",
      component: () => import("@/views/exam/notification.vue"),
      meta: {
        title: "消息通知"
      }
    },
  ]
} satisfies RouteConfigsTable;
