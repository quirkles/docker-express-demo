import {Router} from "express";
import axios from "axios";

export function initFunctionRoutes(): Router {
    const router = Router()

    router.get('/users', async (req, res) => {
        const serviceUrl = `${process.env.serviceUrl || 'http://localhost:3000/mocks'}/users`;
        console.log('calling service urk', serviceUrl)
        const usersResponse = await axios.get(serviceUrl).catch((err) => {
            console.error(`Failed to get mock users. ${err}`)
            return { data: []}
        })
        console.log('mock response', usersResponse.data)
        res.json(usersResponse.data)
    })

    return router
}
