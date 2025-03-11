const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");
const Contact = require("../models/Contact");

exports.submitContact = async (req, res) => {
  try {
    const { name, number, email, message } = req.body;

    // Save to MongoDB
    const newContact = new Contact({ name, number, email, message });
    await newContact.save();

    // Save to JSON file
    const contactsPath = path.join(__dirname, "../data/contacts.json");
    let contacts = [];
    if (fs.existsSync(contactsPath)) {
      contacts = JSON.parse(fs.readFileSync(contactsPath));
    }
    contacts.push({ name, number, email, message, date: new Date() });
    fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));

    // Save to Excel
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(contacts);
    xlsx.utils.book_append_sheet(workbook, worksheet, "Contacts");
    xlsx.writeFile(workbook, path.join(__dirname, "../data/contacts.xlsx"));

    res.status(201).json({ message: "Contact information saved" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save contact information" });
  }
};
