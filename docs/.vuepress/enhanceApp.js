import Vuex from 'vuex'

import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VueGoodTablePlugin from 'vue-good-table';
export default ({Vue, router, siteData }) => {
    Vue.use(Vuex)
    Vue.use(VueChartkick, {adapter: Chart})
	Vue.use(VueGoodTablePlugin)
    const routesForNav = siteData.themeConfig.nav.filter(n => n.link0).map(n => (
        { path: n.link, redirect: n.link0 }
    ));
    router.addRoutes(routesForNav);
}