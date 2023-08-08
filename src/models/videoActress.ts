import { DataTypes } from 'sequelize';
import db from '../db/connections';


const VideoActress =  db.define('videoActress', {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    video_cod: {
        type: DataTypes.STRING
    },
    video_id: {
        type: DataTypes.NUMBER
    },
    actress_name: {
        type: DataTypes.STRING
    }
    
},
{
    tableName: 'tb_videos_actress',
    createdAt: false,
    updatedAt: false
  });


export default VideoActress;