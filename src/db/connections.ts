import {Sequelize} from 'sequelize';


const sequelize = new Sequelize ('data', 'userdba', 'Grecia*456',{
    host: '192.168.1.152',
    dialect: 'mysql',
    port: 3307
});

export default sequelize;