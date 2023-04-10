import Contact from "../models/Contact.js";

export const addContact = async (req, res) => {
  try {
    const contact = await Contact.create({
      phone: req.body.phone,
      employeeId: req.body.emp_id,
    });
    return res.json(contact);
  } catch (error) {
    console.log(error);
  }
};
export const getContact = async (req, res) => {
  try {
    const contact = await Contact.findAll();
    return res.json(contact);
  } catch (error) {
    console.log(error);
  }
};
