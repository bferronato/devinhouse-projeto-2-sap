import Home from "../pages/home";
import Processos from "../pages/processos";

const routes = [
    {
        path:"/",
        component: Home, 
        exact: true 
        
        
    },

    {
        path: "/processos",
        component: Processos,
        exact: true 
    }
]

export default routes;