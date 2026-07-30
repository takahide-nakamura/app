import type { Policy } from "./policy";

export const policies: Policy[] = [
  

  {
     id: "care-certification",
     title: "要介護認定の迅速化",
     category: "医療・介護",
     summary:
       "必要な人が必要な介護サービスを早く利用できる仕組みを目指します。",
     tags: [
      "介護",
      "要介護認定",
      "高齢者",
      "行政"
     ],
     href: "/policy/care-certification",
     status: "published"
  },

  {
     id: "dementia-support",
     title: "認知症になっても安心して暮らせるまちづくり",
     category: "医療・介護",
     summary:
        "認知症になっても安心して暮らせる地域づくりと、相談・医療・介護・行政の連携強化を目指します。",
     tags: [
      "認知症",
      "地域包括ケア",
      "医療連携",
      "介護予防"
     ],
     href: "/policy/dementia-support",
     status: "published"
  },

  {
     id: "childcare",
     title: "👶 子育て",
     category: "子育て",
     summary:
       "安心して子育てができ、子どもたちが健やかに成長できる環境づくりを目指します。",
     tags: [
       "子育て",
       "教育"
       ],
       href: "",
       status: "planned"
  },

  {
     id: "disaster",
     title: "防災・安全",
     category: "防災",
     summary:
       "災害や犯罪などに備え、誰もが安心して暮らせる地域を目指します。",
     tags: [
       "防災",
       "防犯",
       "交通安全"
       ],
       href: "",
       status: "planned"
  },

  {
     id: "town-development",
     title: "まちづくり・交通",
     category: "暮らし",
     summary:
       "公共交通や道路、公園など暮らしやすいまちづくりを進めます。",
     tags: [
       "交通",
       "道路",
       "公園"
      ],
     href: "",
     status: "planned"
  },

  {
     id: "community",
     title: "地域・くらし",
     category: "暮らし",
     summary:
       "地域コミュニティや生活環境を充実させ、暮らしやすい高槻を目指します。",
     tags: [
       "地域",
       "生活",
       "コミュニティ"
       ],
       href: "",
       status: "planned"
  },

  {
     id: "national-health-insurance",
     title: "国民健康保険",
     category: "医療・介護",
     summary:
       "国民健康保険制度を分かりやすく利用しやすい制度へ改善することを目指します。",
     tags: [
       "国民健康保険",
       "医療",
       "保険料",
       "制度"
       ],
       href: "/policy/national-health-insurance",
       status: "published"
  },

  {
       id: "garbage",
       title: "ごみ問題",
       category: "暮らし",
       summary:
         "ごみの分別や収集など、市民が快適に暮らせる生活環境を目指します。",
       tags: [
         "ごみ",
         "生活環境",
         "リサイクル",
         "地域"
        ],
       href: "/policy/garbage",
       status: "published"
  },

  {
     id: "noise",
     title: "騒音対策",
     summary: "深夜の騒音や暴走行為など、市民が安心して暮らせる生活環境づくりを目指します。",
     category: "暮らし",
     href: "/policy/noise",
     status: "published",
     tags: ["生活環境", "防犯", "地域"]
  }, 

];