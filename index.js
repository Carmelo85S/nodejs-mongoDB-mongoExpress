import express from 'express'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

//conntect database
mongoose.connect('mongodb://localhost:27017/contactdatabase')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


//define schema and model
const contactSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
})

const contact = mongoose.model('Contact', contactSchema)

//Define routes

//Fetch all contacts

app.get('/contacts', async (req,res) => {
    try {
        const contacts = await contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contacts' });
    }
});

//Add user to database

app.post('/contacts', async (req, res) => {
    try {
        const newContact = contact(req.body);
        await newContact.save();
        res.json(newContact)
    } catch (error) {
        res.status(500).json({ message: 'Error adding contact' });
    }
})

//Update an existing user by its ID

app.put('/contacts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateContact = req.body;
        const updatedContact = await contact.findByIdAndUpdate(id, updateContact, { new: true });
        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(updatedContact);
    } catch (error) {
        res.status(500).json({ message: 'Error updating contact' });
    }
})

//Remove a user by its ID

app.delete('/contacts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedContact = await contact.findByIdAndDelete(id);
        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting contact' });
    }
})

app.listen(3000, () => console.log("Server running on port 3000"))