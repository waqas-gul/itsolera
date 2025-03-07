const Registration = require('../models/Registration');

exports.createRegistration = async (req, res) => {
    try {
        const newRegistration = await Registration.create(req.body);
        res.status(201).json(newRegistration);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.find();
        res.json(registrations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRegistration = async (req, res) => {
    try {
        const registration = await Registration.findById(req.params.id);
        if (!registration) return res.status(404).json({ message: 'Registration not found' });
        res.json(registration);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateRegistration = async (req, res) => {
    try {
        const updatedRegistration = await Registration.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedRegistration);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteRegistration = async (req, res) => {
    try {
        await Registration.findByIdAndDelete(req.params.id);
        res.json({ message: 'Registration deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};