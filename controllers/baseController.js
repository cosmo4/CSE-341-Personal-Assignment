const baseController = {}
const { query } = require('express');
const mongodb = require('../db/connect');
const contacts = require('../routes/contacts');
const ObjectId = require('mongodb').ObjectId;

baseController.getData = async function(req, res) {
    const result = await mongodb.getDb().db().collection('people').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        console.log(lists)
        res.status(200).json(lists);
    });
}

baseController.getOneContact = async function(req, res) {
    try {
        const userId = new ObjectId(req.params.id);
        const result = await mongodb.getDb().db().collection('people').findOne({ _id: userId });
        
        if (!result) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (error) {
        console.error('Error occurred while fetching contact:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = baseController