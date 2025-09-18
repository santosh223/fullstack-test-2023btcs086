const ContactForm = require("../model/ContactFormModel");
const {sender} = require("../service/mailSender");

exports.ContactForm = async(req, res)=>{
    try {
        const {name, email, query} = req.body;

        if(!name || !email || !query){
            return res.status(400).json({
                message: "All fields are required"});
        }

       

        const newContact = new ContactForm({
            name, 
            email, 
            query
        });

        await sender(newContact);

        const savedContact = await newContact.save();

        return res.status(201).json({
            message: "Contact form submitted successfully",
            contact: savedContact
        });

    } 
    catch (error) {
        return res.status(500).json({
            message: "server error"
        });
    }
}