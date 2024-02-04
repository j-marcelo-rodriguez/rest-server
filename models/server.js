import express from "express";
import cors from "cors";

import { router } from "../routes/user.routes.js"

export class Server {

    app;
    port;
    __dirname;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usersPath = '/api/users';

        this.middlewares();

        this.routes();
    }

    middlewares() {

        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public') );

    }

    routes() {

        this.app.use( this.usersPath, router );

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`);
        });

    }

}
