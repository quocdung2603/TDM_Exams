import App from "../App"
import Home from "../pages/Home"

const createRoute = (path, component) => ({path, component})

const routes = [
    createRoute('/', <Home />),
]

export default routes