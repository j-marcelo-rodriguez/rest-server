import { response, request } from "express";

const usersGet = ( req = request, res = response ) => {

    const params = req.params;

    res.json({
        msg: 'Get API - CONTROLLER',
        params
    });

}
const usersPost = ( req, res = response ) => {

    const body = req.body;

    res.json({
        msg: 'Post API - CONTROLLER',
        body
    });

}
const usersPut = ( req, res = response ) => {

    const { id } = req.params;

    res.json({
        msg: 'Put API - CONTROLLER',
        id
    });

}
const usersDelete = ( req, res = response ) => {

    res.json({
        msg: 'Delete API - CONTROLLER'
    });

}
const usersPatch = ( req, res = response ) => {

    res.json({
        msg: 'Patch API - CONTROLLER'
    });

}

export {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch
}