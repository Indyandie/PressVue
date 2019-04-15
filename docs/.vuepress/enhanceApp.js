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
var simulateClick = function (elem) {

    // Create our event (with options)
    var evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    // If cancelled, don't dispatch our event
    return !elem.dispatchEvent(evt);
};
function processSidebarButton() {
    const sidebarButton = document.querySelector('.sidebar-button');
    if (sidebarButton) {
        sidebarButton.addEventListener('click', () => document.documentElement.classList.toggle('is-sidebar-open'));
        document.body.clientWidth > 959 && simulateClick(sidebarButton);
    }
    else
        setTimeout(processSidebarButton, 200);
}

processSidebarButton();