import Tag from "../Tag/Tag";

const data = [
  {
    category: 'JS Libraries & Frameworks',
    items: ["React", "Vue", "Next", "Nuxt"]
  },
  {
    category: 'UI Libraries & Frameworks',
    items: ["Chakra UI", "Ant", "MUI", "Shadcn", "Element UI", "самописные UI библиотеки"]
  },
  {
    category: 'State management',
    items: ["Redux", "Redux Toolkit", "Apollo", "Vuex"]
  },
  {
    category: 'Styles',
    items: ["PostCSS", "Tailwind", "CSS modules", "Sass", "Less", "Emotion", "Styled components"]
  },
  {
    category: 'Bundlers',
    items: ["Vite", "Webpack", "Turbopack", "Rollup", "Esbuild", "Gulp"]
  },
  {
    category: 'Node.js frameworks',
    items: ["Nest.js", "Express", "Koa", "Socket.io"]
  },
  {
    category: 'Databases',
    items: ["PostgreSQL", "MongoDB", "DynamoDB", "GraphQL", "Redis"]
  },
  {
    category: 'ORMs & Query builders',
    items: ["TypeORM", "Prisma", "Mongoose", "Knex", "Sequelize"]
  },
  {
    category: 'Payments',
    items: ["Stripe", "Moonpay", "Transak"]
  },
  {
    category: 'Analytics',
    items: ["Posthog", "Google analytics"]
  },
  {
    category: 'CD/CI',
    items: ["Docker", "Docker dev container", "Heroku", "GitHub Actions", "k8s"]
  },
  {
    category: 'Testing',
    items: ["Vitest", "React Testing Library", "Jest", "Mocha", "Cypress"],
  },
  {
    category: 'Other',
    items: ["Webhooks", "Puppeteer", "Cheerio", "Node.js workers", "Telegram bots", "Ruby on Rails", "Python"]
  },
];

const Technologies = () => {
  return (
    <section className="md:mt-40" id="technologies">
      <h2 className="font-primary text-xl font-normal">
        С чем работал
      </h2>
      <div className="grid gap-5 gap-x-6 mt-11" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {data.map(item => (
          <div key={item.category} className="flex flex-col gap-2">
            <span className="text-md">
              {item.category}
            </span>
            <span className="text-body2 text-gray-500 dark:text-text/75 text-balance">
              {item.items.join(', ')}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
