const fs = require('fs'), path = require('path');
const baseConfig = {
  base: '/',
  title: "مستندات سیستم",
  description: "یک مثال مناسب از  VuePress برای فارسی زبانان",
};
function getMarkdownFiles(dir) {
  const files = fs.readdirSync(dir);
  return files.filter(fn => /^\d/.test(fn)).filter(fn => fn.toLowerCase().endsWith('.md')).map(s =>  s.substr(0, s.length - 3)).sort();
}

function getSections() {
  const root = path.join(__dirname, '..');
  return (fs.readdirSync(root))
    .map(dir => ({ metaFn: path.join(root, dir, '_nav.json'), dir, fullDir: path.join(root, dir) }))
    .filter(({ metaFn }) => fs.existsSync(metaFn));

}
const sections = getSections();
const nav = sections.map(section => ({
  link: ['',section.dir, getMarkdownFiles(section.fullDir)[0]].join('/'),
  ...require(section.metaFn),
}));
const sidebar = Object.assign({},
  ...sections.map(sec => ({
    [sec.dir == '.' ? '/' : `/${sec.dir}/`]:
      getMarkdownFiles(sec.fullDir)
  }))
);
// .vuepress/config.js
module.exports = {
  ...baseConfig,
  // HTML <head>
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'stylesheet', href: `/vazir-font/font-face.css` }] // .vuepress/public/logo.png
  ],
  themeConfig: { nav, sidebar } 
} // END << module.exports
