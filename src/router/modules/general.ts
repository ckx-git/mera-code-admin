export default {
  path: "/general",
  redirect: "/general/exam-results",
  meta: {
    icon: "ep:menu",
    // showLink: false,
    title: "综合信息",
    rank: 2
  },
  children: [
    {
      path: "/general/exam-results",
      name: "ExamResults",
      component: () => import("@/views/general/exam-results.vue"),
      meta: {
        title: "考试成绩"
      }
    },
    {
      path: "/general/general-data",
      name: "GeneralData",
      component: () => import("@/views/general/general-data.vue"),
      meta: {
        title: "综合数据"
      }
    },
    {
      path: "/general/exam-results/:id",
      name: "ExamResult",
      component: () => import("@/views/general/exam-result.vue"),
      meta: {
        title: "单题成绩",
        showLink: false,
      }
    },
    {
      path: "/general/exam-result/detail/:id",
      name: "ExamResultDetail",
      component: () => import("@/views/general/exam-result-detail.vue"),
      meta: {
        title: "单题详情",
        showLink: false,
      }
    },
  ]
} satisfies RouteConfigsTable;
