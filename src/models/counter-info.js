const mongoose = require('mongoose');
const counterSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    counter: {
        type: Number,
        required: true
    }
})
const Counter = mongoose.model('counters', counterSchema)

const isfirstCouter = async () => {
    const counterDoc = await Counter.find({});
    if(!counterDoc || counterDoc.length <= 0) {
        const couter = new Counter({
            _id: 'userId',
            counter: 0 
        })
        couter.save();
    }
}

isfirstCouter();

module.exports = Counter
