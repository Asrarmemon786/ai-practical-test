const mongoose = require('mongoose');
const config = require('../config')
// to connect a database
mongoose.connect(config.db.connection, {
    useNewUrlParser: true,
        useUnifiedTopology: true
});

const User = require('../models/user');
const Counter = require('../models/counter-info');
// drop
User.collection.drop();
Counter.collection.drop();


const data  = [{
    id: 1,
    firstName: 'albert',
    lastName: 'einstein',
    email: 'ae@relativity.com'
},
{
    id: 2,
    firstName: 'marie',
    lastName: 'curie',
    email: 'mc@radiation.com'
},
{
    id: 3,
    firstName: 'issac',
    lastName: 'newton',
    email: 'in@gravity.com'
},
{
    id: 4,
    firstName: 'galileo',
    lastName: 'galilei',
    email: 'gg@astronomy.com'
}]

User.create(data).then((userinfo) => {
    Counter.create({_id: 'userId', counter: 5}).then(() => {
        console.log(`${data.length} users created`)
    })
    // await Counter.findOneAndUpdate(})
})