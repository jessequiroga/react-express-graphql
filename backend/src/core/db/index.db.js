const mongoose = require('mongoose');
const env = require('../../utils/configs/env.config');

const connectionURL = `mongodb://${env.db.host}:${env.db.port}/${env.db.name}`;
mongoose.set('useCreateIndex', true);
mongoose.set('autoIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('connected', () => console.log(`Mongoose ${connectionURL}`));
db.on('error', err => console.error(err));
db.on('disconnected', () => console.log('mongoose is disconnected'));

process.on('SIGINT', () => {
    db.close(() => {
        console.log('mongoose connection closed trow app terminated');
        process.exit(0);
    });
});
process.on('SIGTERM', () => {
    db.close(() => {
        console.log('mongoose connection closed trow app terminated');
        process.exit(0);
    });
});
process.on('SIGUSR2', () => {
    db.close(() => {
        console.log('mongoose connection closed trow app terminated');
        process.exit(0);
    });
});

exports.dbConnection = db;
