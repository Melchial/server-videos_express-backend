import { DataTypes } from 'sequelize';
import db from '../db/connections';


const File =  db.define('file', {
    file_id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    file_vid_cod: {
        type: DataTypes.STRING
    },
    file_name: {
        type: DataTypes.STRING
    },
    file_uri: {
        type: DataTypes.STRING
    },
    file_datemod: {
        type: DataTypes.DATE
    },
    file_vid_id: {
        type: DataTypes.NUMBER
    },
    file_url_thumb: {
        type: DataTypes.STRING
    }
    
},
{
    tableName: 'vid_files',
    createdAt: false,
    updatedAt: false
  });



  
export default File;