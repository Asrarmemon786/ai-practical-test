const app = require('./app');
const config = require('./config')

// to create a server
app.listen(config.port, ()=> {
    console.log(`Server is Running Port Number: ${config.port}`)
})