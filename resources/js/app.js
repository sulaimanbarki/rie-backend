require('./bootstrap');

window.Vue = require('vue').default;


import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' 

//GOOGLE MAPS
const {Loader, LoaderOptions} = require('google-maps');

const loader = new Loader('AIzaSyDacM2HJ9-PSl8P3bvoFQPGpsuQCaB1LJk', {
    libraries: ['geometry', 'places']
});
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import VueImg from 'v-img';
import VueCloneya from 'vue-cloneya';
import VueCookies from 'vue-cookies';



//application components 
    const Roles = () => import('./components/roles/home');
    //user mgt
    const UserCreate = () => import('./components/usermgt/create');
    const UserList = () => import('./components/usermgt/list');
    const UserEdit = () => import('./components/usermgt/edit');
    // module mgt
    const ModuleCreate = () => import('./components/modules/create');
    const ModuleList = () => import('./components/modules/list');
    const ModuleEdit = () => import('./components/modules/edit');
    // polices
    const PoliciesList = () => import('./components/policies/list');
    // Blogs
    const BlogList = () => import('./components/blogs/list');
    // jobs
    const JobsList = () => import('./components/jobs/list');
    // services
    const ServicesList = () => import('./components/services/list');
    // categories
    const CategoryList = () => import('./components/categories/list');
    //sub categories
    const SubcategoryList = () => import('./components/subcategories/list');
    //Products
    const ProductCreate = () => import('./components/products/create');
    const ProductList = () => import('./components/products/list');
    const ProductEdit = () => import('./components/products/edit');
    //sliders
    const SliderList = () => import('./components/sliders/list');
    //events
    const EventsList = () => import('./components/events/list');
    //contact information
    const ContactInformation = () => import('./components/contactinformation/list');
    // footer links
    const FooterlinkCreate = () => import('./components/footerlinks/create');
    const FooterlinkEdit = () => import('./components/footerlinks/edit');
    const FooterlinkList = () => import('./components/footerlinks/list');
    //reviews
    const ReviewsList = () => import('./components/reviews/list');
    //menus
    const Menus = () => import('./components/menus/list'); 
    //pages
    const Pages = () => import('./components/pages/list');
    const PageCreate = () => import('./components/pages/create');
    const PageEdit = () => import('./components/pages/edit');
   
//-end components


Vue.use(Vuesax, {
    // options here 
});
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('v-select', vSelect);
Vue.use(VueImg);
Vue.use(VueCloneya);
Vue.use(VueCookies);

import base from './base';
import axios from 'axios';

Vue.prototype.$base = base
Vue.prototype.$loader = loader

// Initialize Vue
const app = new Vue({
    el: '#app',
    components: {
        Roles,
        UserCreate,
        UserList,
        UserEdit,
        ModuleCreate,
        ModuleList,
        ModuleEdit,
        PoliciesList,
        BlogList,
        JobsList,
        ServicesList,
        CategoryList,
        SubcategoryList,
        ProductCreate,
        ProductList,
        ProductEdit,
        SliderList,
        EventsList,
        ContactInformation,
        FooterlinkCreate,
        FooterlinkEdit,
        FooterlinkList,
        ReviewsList,
        Menus,
        Pages,
        PageCreate,
        PageEdit
    },
    methods: {
        async setPermissions () {
            try {
                const { data } = await axios.get(`${this.$base}check-permissions`);
                this.$cookies.set('permissions', data)
            }catch (err) {
                console.log('Permssions error ', err)
            }
        }
    },
    created () {
        this.setPermissions()
    }
});

