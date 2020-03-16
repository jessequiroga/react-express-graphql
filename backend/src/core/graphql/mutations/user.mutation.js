const { UserType } = require('../types/user.type');
const { updateUserInput } = require('../inputTypes/user.inputType');
const { UserService } = require('../../services/user.service');

exports.UserUpdate = {
    type: UserType,
    args: {
        fields: {
            name: 'fieldsToUpdate',
            type: updateUserInput
        }
    },
    resolve: async (_, { fields }, { user }) => {
        const _id = user._id;

        return UserService.findAndUpdateUser({ _id }, fields, { new: true });
    }
};
