import { DataTypes } from 'sequelize';
import db from '../db/connections';


const Video =  db.define('video', {
    vid_id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    vid_cod: {
        type: DataTypes.STRING
    },
    vid_tittle: {
        type: DataTypes.STRING
    },
    vid_thumb_url: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'tb_videos',
    createdAt: false,
    updatedAt: false
  });



  
export default Video;