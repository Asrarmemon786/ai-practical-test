const User = require('../models/user');
const utils = require('../utils');

// to find a all user data
const findAll = () => {
    return User.find({}).then((data) => {
        return data
    })
}

const createUser = async (userData) => {
    const id = await utils.getNextId('userId');
    userData.id = id;
    const user = new User(userData);
    const data = await user.save()
    return data;
}

const findUser = async (id) => {
    const user = await User.find({id: id});
    if(user) {
        return user
    } else {
         throw Error('User Not found');
    }
}

const deleteUser = async (id) => {
    const user = await User.deleteOne({id: id});
    if(user) {
        return user
    } else {
         throw Error('User Not found');
    }
}


const updateUser = async (id, userData) => {
    const updatedUser = await User.findOneAndUpdate({id: id}, {$set: userData})
    return updatedUser;
}

const typeahead = async (input) => {
    const users = await User.find({
        $or: [
            {firstName: new RegExp(input, 'i')},
            {lastName: new RegExp(input, 'i')},
            {email: new RegExp(input, 'i')},
        ]
    })
    return users
}

module.exports = { findAll, createUser, findUser, deleteUser, updateUser, typeahead }