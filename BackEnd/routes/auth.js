const express = require( 'express' );
const User = require( "../models/User" );
const router = express.Router();


//Create a User using: POST "/api/auth/" . Does not require Auth
router.post( '/', ( req, res ) => {
    // res.json( []);
    console.log( req.body );
    const user = User( req.body );
    user.save()
    res.send( req.body );
} )
module.exports=router