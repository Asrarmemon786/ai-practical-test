const Counter = require('../models/counter-info');

const getNextId = async (counterId) => {
    const nextKeyDoc = await Counter.findByIdAndUpdate({_id: counterId}, {$inc: {counter: 1}}, {new: true})
    return nextKeyDoc.counter;
}

module.exports = {getNextId}