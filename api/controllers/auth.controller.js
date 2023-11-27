import bcryptjs from 'bcryptjs'
import User from '../models/User.model.js'

export const signup = async (req, res) => {
    const {username, email, password} = req.body
    const hashedPassword = bcryptjs.hashSync(password, 10) // 10 is salt number;salt is just what is going to combine with our password and make it encrypted
    const newUser = new User({username, email, password: hashedPassword})
      try {
        await newUser.save() 
        res.status(201).json('user created succesfully')
      } catch(error) {
        res.status(500).json(error.message);
      }
}