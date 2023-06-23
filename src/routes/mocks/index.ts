import {Router} from "express";

export function initMockRoutes(): Router {
    const router = Router()

    router.get('/users', (req, res) => {
        console.log('called users in mocks')
        return res.json({
            users: [
                {id: 1, name: 'chris'},
                {id: 2, name: 'derek'},
                {id: 3, name: 'taylor'},
                {id: 4, name: 'alex'},
            ]
        })
    })

    return router
}
