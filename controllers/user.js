import express from "express";
import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res, next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPassword
        })
        return res.json(user)
    }
    catch(err){
        console.log(err)
    }
}


export const Login = async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (user) {
        const isMatched = await bcrypt.compare(req.body.password, user.password);
        if (isMatched) {
          const token = await jwt.sign({ id: user.id }, "secret", {
            expiresIn: "1d",
          });
          return res.status(200).json({ access_token: token });
        }
      } else {
        return res.status(401).json("User not found please register");
      }
    } catch (error) {
      res.status(500).json("An error occured please try again");
    }
  };


export const getUser = async(req, res)=>{
    try{
        const user = await User.findByPk(req.user.id,{})
        res.json(user)
    }
    catch(err){
        console.log(err)
    }
}

export const getAllUsers = async(req, res)=>{
    try{
        const user = await User.findAll()
        res.json(user)
    }
    catch(err){
        console.log(err)
    }
}

export const updateUser = async (req,res) => {
    try {
        const user = await User.update(req.body,{
            where: {
              id: req.params.id,
            },
        })
        return res.json(user, "book is updated")
    } catch (error) {
        console.log(error)
    }
}


export const deleteBook = async (req,res) => {
    try {
        const user = await User.findByPk(req.params.id,{})
        if(user){
            user.destroy();
        }
        else{
            res.json("respective user is not available")
        }
        return res.json(user,"user is deleted")
    } catch (error) {
        console.log(error)
    }
}