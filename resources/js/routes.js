import Dashboard from './pages/Dashboard';
import Sites from './pages/Sites';

export default {
    mode: 'history',

    routes: [
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'dashboard',
        },
        {
            path: '/sites',
            component: Sites,
            name: 'sites',
        }
    ]
};