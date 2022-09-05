import Sequelize from 'sequelize';

export const sequelize = new Sequelize (
    'projectdb',
    'postgres',
    'nacho1234',
    {
     host: 'localhost',
     dialect: 'postgres',
});
