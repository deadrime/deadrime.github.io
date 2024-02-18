import Tag from "../Tag/Tag";

const data = [
  {
    category: 'JS Libraries & Frameworks',
    items: ["React", "Vue", "Next", "Nuxt"]
  },
  {
    category: 'UI Libraries & Frameworks',
    items: ["Ant", "MUI", "Shadcn", "Element", "UI", "самописные UI библиотеки"]
  },
  {
    category: 'State management',
    items: ["Redux", "Redux Toolkit", "Apollo", "Vuex"]
  },
  {
    category: 'Styles',
    items: ["PostCSS", "Sass", "Less", "CSS modules", "Emotion", "Styled components", "Tailwind"]
  },
  {
    category: 'Bundlers',
    items: ["Webpack", "Esbuild", "Vite", "Turbopack", "Rollup", "Gulp"]
  },
  {
    category: 'Node.js frameworks',
    items: ["Express", "Koa", "Socket.io"]
  },
  {
    category: 'Databases',
    items: ["PostgreSQL", "MongoDB", "DynamoDB", "GraphQL", "Redis"]
  },
  {
    category: 'ORMs & Query builders',
    items: ["Mongoose", "Knex", "Sequelize"]
  },
  {
    category: 'Payments',
    items: ["Stripe", "Moonpay", "Transak"]
  },
  {
    category: 'Analytics',
    items: ["Google analytics", "Posthog"]
  },
  {
    category: 'CD/CI',
    items: ["Docker", "Docker dev container", "Heroku", "GitHub Actions", "k8s"]
  },
  {
    category: 'Other',
    items: ["Webhooks", "Puppeteer", "Cheerio", "Node.js workers", "Telegram bots", "Ruby on Rails", "Python"]
  },
]

const Technologies = () => {
  return (
    <section>
      <h2 className="font-primary text-xl font-normal mt-8 md:mt-36">
        С чем работал
      </h2>
      <div className="grid gap-5 mt-11" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {data.map(item => (
          <div key={item.category} className="flex flex-col gap-2">
            <span className="text-md">
              {item.category}
            </span>
            <span className="text-body2 text-gray-500 dark:text-text/75">
              {item.items.join(', ')}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies;
