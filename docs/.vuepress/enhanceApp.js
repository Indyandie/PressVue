import Vuex from 'vuex'

import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VueGoodTablePlugin from 'vue-good-table';
export default ({ Vue, router, siteData }) => {
    Vue.use(Vuex)
    Vue.use(VueChartkick, { adapter: Chart })
    Vue.use(VueGoodTablePlugin)
    const routesForNav = siteData.themeConfig.nav.filter(n => n.link0).map(n => (
        { path: n.link, redirect: n.link0 }
    ));
    router.addRoutes(routesForNav);
}
function processLinks() {
    const links = document.querySelector('header.navbar .links');
    if (!links) {
        setTimeout(processLinks, 200);
        return;
    }

    const anchors = Array.from(links.querySelectorAll('.nav-item a'));
    processSidebar();
    for (const anchor of anchors) {
        const href = anchor.getAttribute('href');
        if (href.includes('#toggle')) {
            anchor.classList.add('toggle');
            anchor.parentElement.classList.add('toggle-nav');
            anchor.setAttribute('href', '#');
            const anchorClone = anchor.cloneNode(true);

            anchor.parentNode.replaceChild(anchorClone, anchor);
            anchorClone.addEventListener('click', toggleClick);
        }
    }
    links.classList.add('ok')

}

function processSidebar() {
    const links = document.querySelector('.theme-container>.sidebar>.nav-links');
    if (!links) return;
    const anchors = Array.from(links.querySelectorAll('.nav-item a'));

    for (const anchor of anchors) {
        const href = anchor.getAttribute('href');
        if (href.includes('#toggle')) {
            anchor.parentElement.style.display = 'none';

        }
    }

}
function toggleClick(e) {

    e.preventDefault();
    document.documentElement.classList.toggle('sidebar-hide');
}
processLinks();