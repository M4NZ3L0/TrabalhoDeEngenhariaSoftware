import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import "cookie-parser";
dotenv.config();

export const CheckIsAuth = (req, res, next) => {
    
    const accessToken = req.cookie["access-token"];

    if (!accessToken)
    {
        return res.status(401).send("we don't hve a token");
    }

    try
    {
        const validtoken = jwt.verify(accessToken, process.env.SECRET);

        if (validtoken)
        {
            req.authenticated = true;
            return next();
        }
        else
        {
        return res.status(401).send("we need a valid token");
            
            }

    }
    catch (e)
    {
        return res.status(400).json({ error: err });
    }
}

export const CheckIsProf = (req, res, next) =>
{
    
}

export const CheckIsAdm = (req, res, next) =>
{

}