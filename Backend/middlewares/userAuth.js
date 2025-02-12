 //Backend\middlewares\userAuth.js
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';
import companyModel from '../models/companyModel.js';


export const verify = async (req, res , next) => {     
    try {

        let token = req.header('authorization').split(' ')[1];
        
        
        if(token === null){         
            return res.status(401).json({message : 'Unauthorized!, not token found'});
        } 

        token = token.replaceAll('"', '');

        const decoded = jwt.verify(token , process.env.JWT_SECRET);

        const userId = decoded.userId;

        let user;
        user = await userModel.findById(userId);

        if(!user){
            let company = await companyModel.findById(userId);

            if(!company){
                return res.status(401).json({ message: 'Unauthorized - User not found' });
            }

            if(company.isBlocked){
                return res.status(401).json({ message: 'Account is blocked' });
            }
            user = company;
        }

        if(user.isBlocked){
            return res.status(401).json({ message: 'Account is blocked' });
        }

        req.user = user;
        next();

    } catch (error) {
        console.log(error);
        
    }
}