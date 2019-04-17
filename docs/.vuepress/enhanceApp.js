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
let current_page_url = '';
function pageChanged() {
      const sidebarLinks = Array.from(document.querySelectorAll('.sidebar-links li'));
    for (const li of sidebarLinks) li.classList.remove('active');
    setTimeout( function(){ 
    const sidebarActive = document.querySelector('.sidebar-link.active');
    sidebarActive && sidebarActive.parentElement.classList.add('active');
    },300);
}
function _pageChanged() {
     const contentElement = document.querySelector('.content');
     
    if (contentElement && current_page_url != location.pathname) {
        current_page_url = location.pathname;
        pageChanged();
    }
}
setInterval(_pageChanged, 400);
processSidebarButton();