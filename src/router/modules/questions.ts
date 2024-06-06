export default {
  path: "/questions",
  redirect: "/questions/milk-problem",
  meta: {
    icon: "ep:edit",
    // showLink: false,
    title: "试题列表",
    rank: 3
  },
  children: [
    {
      path: "/questions/milk-problem",
      name: "MilkProblem",
      component: () => import("@/views/questions/milk-problem.vue"),
      meta: {
        title: "牛奶问题"
      }
    },
    {
      path: "/questions/pencil-game",
      name: "PencilGame",
      component: () => import("@/views/questions/pencil-game.vue"),
      meta: {
        title: "铅笔游戏"
      }
    },
  ]
} satisfies RouteConfigsTable;
