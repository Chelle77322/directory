const next = require('next');
const express = require('express');
const PORT = process.env.PORT || 9099;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const server = express();
const Routes = require ('./Routes');

app.prepare().then(()=> {
    Routes(server,app);
    server.get('*', (request, result)=> {
        app.remder(request, result, '/');
    });
    server.listen(PORT, (error)=>{
        if(error)throw error;
        console.log('[i]Next.js server is ready on port', PORT);
    });
}).catch((ex) =>{
    console.error(ex.stack);
    process.exit(1);
});
module.exports = app;