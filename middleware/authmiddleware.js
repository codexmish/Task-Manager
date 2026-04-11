const jwt = require("jsonwebtoken")



const authmiddleware = (req, res, next)=>{
    const {accessToken} = req.cookies
    try {
        const decoded = jwt.verify(accessToken, process.env.JWT_SEC)
        if(decoded){
            next()
        }else{
            res.status(401).send({success: false, message: "Unauthorized request"})
        }
        
    } catch (error) {
        res.status(401).send({success: false, message: "Unauthorized request"})
        
    }

}


module.exports = {authmiddleware}