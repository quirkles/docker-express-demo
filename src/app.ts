import express, {Application} from "express";
import {initFunctionRoutes, initMockRoutes} from "./routes";

export function start(): Application {
    const app = express();
    const port = process.env.PORT || 3000;

    app.use('/functions', initFunctionRoutes())
    app.use('/mocks', initMockRoutes())

    app.listen(port, () => {
        console.log('App listening')
    })

    return app
}
