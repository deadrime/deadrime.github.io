## Мое небольшое резюме 👋
Привет, меня зовут Женя, я Frontend разработчик (но могу и в фуллстек). 
<br><br>
Скорее всего вы нашли меня [на хабр карьере](https://moikrug.ru/deadrime)
<br><br>
У меня ~5 лет опыта работы, позиционирую себя, как middle+, есть опыт работы на позиции senior в стартапе (больше акцент на написание кода, чем на взаимодействие с людьми).
Считаю себя крепким разработчиком с интересным бэкграундом. Не думаю, что знаю все, но при помощи гугла и (куда реже) помощи коллег получалось решать практически любые задачи.
Все еще сильно нервничаю и туплю на технических собеседованиях (должно быть моральная травма после 4-х раундов в сбере), больше предпочитаю тестовые задания.

### Статус 💬
В настоящий момент не ищу работу. Но вакансию мечты конечно рассмотрю.

### Контакты 🤙

- [Telegram](https://t.me/deadrime)
- [deadrime@yandex.ru](mailto:deadrime@yandex.ru)

### Любимый стек ❤️ 
<br>

<img alt="Typescript" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="20px" /> <img alt="React" src="https://cdn.worldvectorlogo.com/logos/react-1.svg" width="20px" /> <img alt="GraphQL" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png" width="20px" />

### С чем работал
<br>

- React, Vue
- Next, Nuxt, Ruby on Rails (в связке с React)
- CSS modules, Emotion, Styled components, PostCSS, Tailwind
- Webpack, Esbuild, Vite, Turbopack
- PostgreSQL, MongoDB, Dynamodb, GraphQL
- Socket IO
- Stripe
- Google analytics, Posthog

### Опыт работы 🏭 

<details>
  <summary>Human (2022 - 2024)</summary>
  <br>
  HumanIPO - американский стартап, основная идея которого - дать возможность любому человеку выпустить свой токен (акции), провести свое IPO и раунды инвестиций. Когда я пришел, нужно было провести перезапуск. Небольшой командой мы собирали рабочие прототипы приложения, тестировали их на юзерах, показывали инвесторам, искали наиболее удачный концепт. Прошли несколько итераций, среди всех прототипов могу выделить несколько наиболее состоявшихся - 
<br><br>
<ul>
  <li>
    Приложение для запуска собственного токена. Основной функционал - маркет, где можно было трейдить и покупать токены, реквесты - возможность обменять свои токены на некую услугу и раунды - возможность осуществить сбор денег и распределить свои токены среди участников.
  </li>
  <li>
    Социальная сеть для nft artist's. Основной функционал - выпуск собственных nft, коллекции, минтинг nft как аналог репоста + стандартные социальные штуки вроде фида, чата, фолловеров. 
  </li>
  <li>
    Приложение для инвестиций, где можно создать раунды финансирования и найти инвесторов, из функционала - работа с фиат платежами (stripe), инвайты, эндорсменты, различные структуры раундов (публичные/приватные).
  </li>
  <li>
    Приложение для криптолудоманов, где можно запускать свои предикшены на любой исход.
  </li>
</ul>

 Стек:
   <br><br>
      <img alt="Nextjs" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.svg" height="20px" /> 
      <img alt="React" src="https://cdn.worldvectorlogo.com/logos/react-1.svg" height="20px" />
      <img alt="Node JS" src="https://user-images.githubusercontent.com/54556157/90980927-da4b1500-e566-11ea-98f2-6d56fff480e0.png" height="20px" /> 
      <img alt="Typescript" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" height="20px" />
  <br><br>
    Интересные задачи:
  <br><br>
  <ul>
    <li>
      Система надежных транзакций. Нам необходимо было создавать/обновлять сущности в нашей бд после успешно выполненной транзакции. При этом важно было учесть, что транзакция может не пройти (например недостаточный баланс, ограничение контракта или сеть чейна прилегла). В результате получилась довольно сложная система из 2 воркеров (tx monitor, tx finalizer) в связке удобными компонентами и хуками на фронте. 
    </li>
    <li>
      Самописный брокер сообщений на Redis Streams. Наши воркеры и приложения крутились в k8s, нужно было как-то реализовать общение между ними. В результате получился https://github.com/deadrime/redis-events-queue
    </li>
    <li>
      Воркер для создание красивых image preview для постов. Реализовал при помощи puppeter, в котором рендерил сгенерированный реактом html.
    </li>
    <li>
     Система UI компонентов с широкими возможностями по кастомизации. У нас постоянно все менялось, нужна была такая система компонетов, где можно быстро поменять цвета, размеры, сделать из светлой темы темную, задать у всех компонетов глобальный border-radius/border-width и т.д. Реализовал при помощи rem + css variables + свой ThemeProvider. Так же настроил сборку через vite и паблишинг в наш package registry.
    </li>
  </ul>

</details>

<details>
  <summary>Frogogo (2019 - 2021)</summary>
  <br>
    Frogogo - маркетплейс с прикольной системой лояльности. Удаленка, недельные спринты, утренний стендап, карточки в трелло. Стек - react, tailwind, ruby on rails. Когда я только пришел - на фронте жили своей жизнью jQuery + stimulus.
  <br>
  <br>
    Интересные задачи:
  <br><br>
  <ul>
    <li>
      Написал библиотеку для UI компонентов на React + Typescript, настроил Storybook
    </li>
    <li>
      Переписал все сложные интерфейсные моменты на React. Например - корзину, поиск, выбор пунта выдачи на карте.
    </li>
    <li>
      Настроил всю инфраструктуру фронта, вначале все было завязано на вебпак, потом перешли на esbuild
    </li>
    <li>
      Интересным опытом было настроить SSR react-а для ruby on rails (удовольствие сомнительное)
    </li>
    <li>
      Реализовал табло для пунктов выдачи (номер заказа, статус). 
    </li>
  </ul>
   Стек:
   <br><br>
      <img alt="RubyOnRails" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/2560px-Ruby_On_Rails_Logo.svg.png" height="20px" />
      <img alt="React" src="https://cdn.worldvectorlogo.com/logos/react-1.svg"  height="20px" /> 
      <img alt="EsBuild" src="https://seeklogo.com/images/E/esbuild-logo-21E74350B7-seeklogo.com.png"  height="20px" /> 
      <img alt="Webpack" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/webpack_plain_logo_icon_146297.png"  height="20px" />
      <img alt="Storybook" src="https://iconape.com/wp-content/files/qa/371510/svg/371510.svg"  height="20px" /> 
</details>

<details>
  <summary>Сбер (2020-2021)</summary>
  <br>
  Я работал в подразделении SberDevices, там мы разрабатывали пользовательский интерфейс приложений, которые запускаются на sberportal и sberbox.
  Утонул в NDA, так что без излишних подробностей.
  <br> <br>
  Работал над:
  <br>
  <ul>
    <li>
      Супер Шеф - приложка с готовыми рецептами
    </li>
    <li>
      S7 airlines - приложка для заказа билетов
    </li>
    <li>
      izi.TRAVEL - приложка для проснушивания аудиогидов
    </li>
    <li>
      Готовая еда - приложка для заказа со всяких деливери
    </li>
  </ul>

  Получил очень интересный опыт создания доступных (a11y) интерфейсов, так как любое приложение должно было поддерживать управление с пульта, при помощи сенсорного экрана и голоса.
  
   Основной стек:
   <br><br>
  <img alt="Typescript" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="20px" />
  <img alt="React" src="https://cdn.worldvectorlogo.com/logos/react-1.svg" width="20px" /> 
</details>

<details>
  <summary>ItCanFly (2019)</summary>
    <ul>
      <br>
      <li>
        Создавал графики на <b>chart.js</b>. Различная статистика, курс валют и т.п.
        <br>
        <img alt="React" src="https://cdn.worldvectorlogo.com/logos/react-1.svg" width="20px" /> 
        <img alt="Typescript" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="20px" />
      </li>
      <li>
        Учавствовал в разработке сайта для антикафе https://ziferblat.net/
         <br>
         <img alt="React" src="https://cdn.worldvectorlogo.com/logos/react-1.svg" width="20px" /> 
         <img alt="Typescript" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="20px" />
         <img alt="GraphQL" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png" width="20px" /> 
         <img alt="Emotion Js" src="https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png" width="20px" /> 
      </li>
      <li>
        Написал телеграмм бота для персонала. В боте можно выбрать рабочие смены, провести инвентаризацию.
         <br>
         <img alt="Typescript" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="20px" />
         <img alt="GraphQL" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png" width="20px" />
         <img alt="Node JS" src="https://user-images.githubusercontent.com/54556157/90980927-da4b1500-e566-11ea-98f2-6d56fff480e0.png" width="19px" /> 
      </li>
  </ul>
  
</details>

<details>
  <summary>Прочее (2018-2019)</summary>
  <br>
  Год работал в офисе, требовалось разрабатывать и поддерживать админку с различной статистикой, а так же интерфейс для операторов колл центра и корпоративный чат. Стек - vue.js, expess(позже переписал на koa), element ui. Ничего примечательного, типичное формошлепство, могу выделить пару своих заслуг - адаптацию под мобильную версию и переезд с express на koa, в процессе которого мы все отрефакторили. Еще из интересного - внедрил JWT аутентификацию, проповедовал БЭМ.
  <br>
  <br>
  <img alt="Node JS" src="https://user-images.githubusercontent.com/54556157/90980927-da4b1500-e566-11ea-98f2-6d56fff480e0.png" width="19px" /> 
  <img alt="Vue" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" width="22px" />
  <img alt="Element UI" src="https://iconape.com/wp-content/png_logo_vector/element-ui.png" width="20px" />
  <img alt="Webpack" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/webpack_plain_logo_icon_146297.png" width="20px" />
</details>


