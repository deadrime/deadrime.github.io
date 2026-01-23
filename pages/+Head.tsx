// https://vike.dev/Head

const syncTheme = `
(function () {
  try {
    const savedTheme = localStorage.getItem("selectedTheme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`

export default function HeadDefault() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <link href='/apple-icon.png' rel='apple-touch-icon' type='image/png'/>
      <meta property="og:site_name" content="Трофимов Евгений - fullstack разработчик"/>
      <meta name='keywords' content='frontend, javascript, fullstack, node.js, snippets'/>
      <meta name='robots' content='index,follow'/>
      <script dangerouslySetInnerHTML={{ __html: syncTheme }}></script>
    </>
  );
}
