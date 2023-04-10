import express from "express";
import Book from "../models/Book.js";
import User from "../models/User.js";

export const addBook = async (req,res) => {
    try {
        const book = await Book.create({
            title: req.body.title,
            userId: req.user.id
        })
        return res.json(book)
    } catch (error) {
        console.log(error)
    }
}


export const getBook = async (req,res) => {
    try {
        const book = await Book.findByPk(req.params.id,{})
        return res.json(book)
    } catch (error) {
        console.log(error)
    }
}


export const getBookByAuthors = async (req,res) => {
    try {
        const book = await Book.findAll({
            include : {model : User}
        })
        return res.json(book)
    } catch (error) {
        console.log(error)
    }
}

export const getBookByIdAndAuthors = async (req,res) => {
    try {
        const book = await Book.findByPk(req.params.id,{
            include : {model : User}
        })
        if(req.user.id !== book.userId){
            return res.json("You cannot access this book")
        }
        return res.json(book)
    } catch (error) {
        console.log(error)
    }
}

export const getBookByIdAndAuthorsOfMe = async (req,res) => {
    try {
        const book = await Book.findAll({
            where: {userId: req.user.id},
            include : [{model : User, required: true}]
        })
        return res.json(book)
    } catch (error) {
        console.log(error)
    }
}


export const updateBook = async (req,res) => {
    try {
        const book = await Book.update(req.body.title,{
            where: {
              id: req.params.id,
            },
        })
        return res.json(book, "book is updated")
    } catch (error) {
        console.log(error)
    }
}


export const deleteBook = async (req,res) => {
    try {
        const book = await Book.findByPk(req.params.id,{})
        if(book){
            book.destroy();
        }
        else{
            res.json("respective book is not available")
        }
        return res.json(book,"book is deleted")
    } catch (error) {
        console.log(error)
    }
}

export const incrementLike = async (req,res) => {
    try {
        const book = await Book.findByPk(req.params.id,{})
        if(req.user.id !== book.userId){
            return res.json("You cannot access this book")
        }
        book.toJSON()
        book.like = book.like + 1;
        book.save()

        return res.json(book)
    } catch (error) {
        console.log(error)
    }
}

export const decrementLike = async (req,res) => {
    try {
        const book = await Book.findByPk(req.params.id,{})
        if(req.user.id !== book.userId){
            return res.json("You cannot access this book")
        }
        book.toJSON()
        book.dislike = book.dislike + 1;
        book.save()

        return res.json(book)
    } catch (error) {
        console.log(error)
    }
}
