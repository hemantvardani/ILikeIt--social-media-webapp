import jwt from 'jsonwebtoken';
 
//example if someone wants to like a post
// click the like button -> auth middleware(next) -> call like controller
  
const auth=async (req,res,next)=>{

    console.log("hemantxt");

    try {
        
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500 ;
        console.log("hemantt");
        let decodedData;

        if(token && isCustomAuth ){

            decodedData = jwt.verify(token,'test');
            req.userId= decodedData?.id ;
            console.log("hemant");
        }
        else
        {
            console.log('some problem');
        }

        next();
    } catch (error) {
        
        console.log(error);
    }
}

export default auth;