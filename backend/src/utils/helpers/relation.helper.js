const mongoose = require('mongoose');
const { Schema } = mongoose;

exports.relation = (ref, opts) => ({
    type: Schema.Types.ObjectId,
    ref,
    ...opts,
});
