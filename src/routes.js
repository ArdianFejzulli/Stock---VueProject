import Home from './components/Home';
import Portfolio from './components/portfolio/Portfolio';
import Stocks from './components/stocks/Stocks';
import Register from './components/registration/Register';
import Login from './components/registration/Login';

export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio},
    { path: '/stocks', component: Stocks },
    { path: '/registration', component: Register },
    { path: '/login', component: Login }
];