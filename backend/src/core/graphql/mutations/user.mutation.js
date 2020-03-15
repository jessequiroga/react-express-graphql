const { UserType } = require('../types/user.type');
const { userInputType } = require('../inputTypes/user.inputType');

exports.UserUpdate = {
    type: UserType,
    name: 'userMutation',
    args: {
        fields: {
            name: 'fieldsToUpdate',
            type: userInputType,
        }
    },
    resolve: (_, re, res) => {
        console.log(re, res)
    }
};
