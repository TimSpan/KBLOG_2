import { getPosts, getPostLength } from "./theme/serverUtils";

async function config() {
  return {
    lang: "en-US",
    title: "KevinBlog",
    description: "Home of Kevin",
    base:'/KBLOG_2/',
    head: [
      [
        "link",
        {
          rel: "icon",
          // type: 'image/png',
          type: "image/png",
          href: "/haimianbaobao.png",
        },
      ],
      [
        "meta",
        {
          name: "author",
          content: "Kevin",
        },
      ],
      [
        "meta",
        {
          property: "og:title",
          content: "Home",
        },
      ],
      [
        "meta",
        {
          property: "og:description",
          content: "Home of Kevin",
        },
      ],
    ],
    themeConfig: {
      // repo: "clark-cui/homeSite",
      logo: "/haimianbaobao.png",
      docsDir: "/",
      // docsBranch: "master",
      // lastUpdated: false,
      posts: await getPosts(),
      pageSize: 5, //几个为一页
      postLength: await getPostLength(), //博客有几篇

            // algolia: {
            //   apiKey: "90a0bae6ff7307fb76896cbe2f975b0c",
            //   indexName: "clark-cui-docs",
            // },

      nav: [
        {
          text: "🏡Home",
          link: "/",
        },
        {
          text: "🔖Tags",
          link: "/tags",
        },
        {
          text: "📃Archives",
          link: "/archives",
        },
        {
          text: "面试官问系列",
          link: "https://vue3js.cn/interview/",
        },
        {
          text: "语雀前端面试题总结",
          link: "https://www.yuque.com/cuggz/interview/gme0bw",
        },
        {
          text: "前端知识库",
          link: "https://www.html5iq.com/index.html",
        },
      ],

      // sidebar: {
      //   "./posts/": false,
      //   "/": false,
      // },
      sidebar: false,
    },
  };
}
export default config();
