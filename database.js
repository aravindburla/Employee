import { Sequelize } from 'sequelize';

// Sequlize connection setup
export const sequelize = new Sequelize(
    "one",
    "postgres",
    "root",
    {
        host: "localhost",
        dialect: "postgres",
        port: 5432,
        native: false,
        pool: {
            max: 5,
            acquire: 10000,
            idle: 29000,
            evict: 30000,
        },
        logging: false
    }
);

export const databaseLoader = async () => {

    sequelize.sync({force:false})
        .then(async () => {

            console.log("Database Connected");

        }).catch((err) => {

            console.log("An Error Occured: ", String(err));
        });
};


