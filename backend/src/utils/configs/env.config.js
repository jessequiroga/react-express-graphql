const env = process.env.NODE_ENV;

const dev = {
    app: {
        port: 4000
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'social-network',
        user: 'acc'
    },
    secretKeys: {
        salt: 'test',
        jwt: 'test'
    }
};

const prod = {
    app: {

    },
    db: {

    }
};

const config = {
    dev,
    prod
};

module.exports = config[env];
