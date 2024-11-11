const jsonServer = require('json-server')

const mediaserver =jsonServer.create()

const middleware = jsonServer.defaults()

const router = jsonServer.router('db.json')

mediaserver.use(middleware)

mediaserver.use(router)

const PORT = 3000

mediaserver.listen(PORT,()=>{
    console.log("media server started....listening on" +PORT)
})