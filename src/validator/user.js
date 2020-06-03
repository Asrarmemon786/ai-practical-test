const {  Joi, Segments } = require('celebrate');

module.exports = {
    createUser: {
        [Segments.BODY]: {
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required()
        }
    },
    getUser: {
        [Segments.PARAMS]: {
            id: Joi.string().required()
        }
    },
    deleteUser: {
        [Segments.PARAMS]: {
            id: Joi.string().required()
        }
    },
    updateUser: {
        [Segments.BODY]: {
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required()
        },
        [Segments.PARAMS]: {
            id: Joi.string().required()
        }
    },
    typeahead: {
        [Segments.PARAMS]: {
            input: Joi.string().required()
        }
    }
}
