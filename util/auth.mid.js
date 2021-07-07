//esto nos sirve para verificar y crear el jwt

const jwt = require ("jsonwebtoken")
const User = require ("../models/User")

//creamos el util
exports.createJWT = (user) =>{
   //crear token
   const token = jwt.sign({id: user._id },process.env.SECRET,{
       expiresIn:"1d"
   })

   return token
}

exports.veryToken = (req,res,next) =>{
    //destructurar de req.cookies el token 
    const {token} = re.cookies

    jwt.verify(token,process.env.SECRET, (error,decoded)=>{
    
        if(error){
            return res.status(401).json({msj:"tienes que tener una sesion", error})
        }
        //decoded = {id:"hijodkndk"}
        User.findById(decoded.id)
        .then(user => {
            req.user = user //aqui se almacena el usuario
        
            next()
        })
        
    }
    )
}


    //middelware para crear los roles

    exports.checkRole = (roles)=>{

        return (req,res,next)=>{
        //sacart al usuario del req.user
        const {role} = req.user
        if(roles.includes(role)){
            return next()
        }else{
            return res.status(403).json({msg:"no tienes permisos para realizar esta accion"})

        }
        }

    }

    exports.clearRes = (data) =>{
         //destructuramos el objeto data y retornamos un nuevo objeto solo con los datos requeridos para nuestro "desarrollador = dev"
        const {password, __v, updateAt, ...cleanedData} = data

        return cleanedData
    }