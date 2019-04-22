const fs = require('fs'), path = require('path');
function getDocDir() {
  return [path.join(process.cwd(), 'docs'), process.cwd()].filter(fs.existsSync)[0]

}
const docPath = getDocDir();
const baseConfigFn = path.join(docPath, 'base-config-doc');

const baseConfig = require(baseConfigFn);
function getMarkdownFiles(dir) {
  const files = fs.readdirSync(dir);
  return files.filter(fn => /^\d/.test(fn)).filter(fn => fn.toLowerCase().endsWith('.md')).map(s => s.substr(0, s.length - 3)).sort();
}

function getSections() {
  const root = docPath;
  return (fs.readdirSync(root))
    .map(dir => ({ metaFn: path.join(root, dir, '_nav.json'), dir, fullDir: path.join(root, dir) }))
    .filter(({ metaFn }) => fs.existsSync(metaFn)).sort();

}
const sections = getSections();
const nav = sections.map(section => ({
  link: '/' + section.dir + '/',
  link0: ['', section.dir, getMarkdownFiles(section.fullDir)[0] + '.html'].join('/'),
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
    ['link', { rel: 'stylesheet', href: `/vazir-font/font-face.css` }],// .vuepress/public/logo.png
    ['link', { rel: 'stylesheet', href: `/material-iconfont/material-icons.css` }] // .vuepress/public/logo.png

  ],
  markdown: {
    lineNumbers:true,
    // options for markdown-it-anchor
    anchor: { permalink: true },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2, 3, 4] },
    config: md => {
      // use more markdown-it plugins!
      md.set({ html: true })
      md.use(require("markdown-it-katex"));
      md.use(require('markdown-it-task-lists'), { label: true });
      md.use(require("markdown-it-plantuml"));
      md.use(require("markdown-it-admonition"));
    }
  },
  theme: 'cool',
  themeConfig: { nav, sidebar }
} // END << module.exports
