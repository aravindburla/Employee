import express from "express";
import Book from "../models/Book.js";
import User from "../models/User.js";
import Contact from "../models/Contact.js";
import Employee from "../models/Employee.js";

export const addContact = async (req, res) => {
  try {
    const contact = await Contact.create({
      phone: req.body.phone,
      emp_id: req.body.emp_id,
    });
    return res.json(contact);
  } catch (error) {
    console.log(error);
  }
};

export const addEmployee = async (req, res) => {
  try {
    const emp = await Employee.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    return res.json(emp);
  } catch (error) {
    console.log(error);
  }
};

export const getContact = async (req, res) => {
  try {
    const contact = await Contact.findByPk(req.params.id, {});
    return res.json(contact);
  } catch (error) {
    console.log(error);
  }
};

export const getEmployees = async (req, res) => {
  try {
    const emp = await Employee.findAll({
      limit: req.query.limit ? req.query.limit : null,
      offset:
        req.query.page && req.query.limit
          ? (Number(req.query.page) - 1) * Number(req.query.limit)
          : 0,
      include: { model: Contact },
    });
    return res.json(emp);
  } catch (error) {
    console.log(error);
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const emp = await Employee.findOne({ where: { id: req.params.id } })

    emp.name = req.body.name ? req.body.name : emp.name;
    emp.email = req.body.email ? req.body.email : emp.email;
    emp.password = req.body.password ? req.body.password : emp.password;

    await emp.save();

    return res.json("employee is updated");
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const emp = await Employee.findByPk(req.params.id, {});
    if (emp) {
      emp.destroy();
    } else {
      res.json("respective employee is not available");
    }
    return res.json("employee is deleted");
  } catch (error) {
    console.log(error);
  }
};
