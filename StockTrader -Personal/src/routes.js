import Home from './components/Home';
import Portfolio from './components/portfolio/Portfolio';
import Stocks from './components/stocks/Stocks';
import Signin from './components/registration/Signin';
import Login from './components/registration/Login';

export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio},
    { path: '/stocks', component: Stocks },
    { path: '/signin', component: Signin },
    { path: '/login', component: Login }
];