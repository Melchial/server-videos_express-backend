import {Request, Response} from 'express';
import Video from '../models/video';
import VideoActress1 from '../models/videoActress';
import VideoActress2 from '../models/videoActress';

// Video.hasMany(VideoActress,{foreignKey: 'video_id'});
// VideoActress.belongsTo(Video);

export const getVideos = async (req: Request, res: Response) => {
    Video.hasMany(VideoActress1,{foreignKey: 'video_id'});
    VideoActress1.belongsTo(Video,{foreignKey: 'video_id'});
    const listVideos =  
        await Video.findAll({
                            limit: 20,
                            include: VideoActress1 
                        });

    res.json(listVideos);
}

export const getVideosxActress = async (req: Request, res: Response) => {
    Video.hasMany(VideoActress1,{as: 'videoActresses1' ,foreignKey: 'video_id'});
    VideoActress1.belongsTo(Video,{foreignKey: 'video_id'});

    Video.hasMany(VideoActress2,{as: 'videoActresses2' ,foreignKey: 'video_id'});
    VideoActress2.belongsTo(Video,{foreignKey: 'video_id'});

    const actress = req.params.actress;
    const listVideos =  
        await Video.findAll({
                            where : {
                                '$videoActresses2.actress_name$': `${actress}`
                            },
                            include: [{
                                model: VideoActress1,                     
                                as: 'videoActresses1'
                            },
                            {
                                model: VideoActress2,                     
                                as: 'videoActresses2'
                            }],
                           
                        });

    res.json(listVideos);
}

export const getVideo = (req: Request, res: Response) => {
    const { id } = req.params;
    
    res.json({
        msg: 'get video',
        id
    })
}

export const postVideo = (req: Request, res: Response) =>{
    const {body} = req;
    // const {id} = req.params;

    console.log(body)
    res.json({
        msg: 'post Product',     
        body
        
    })

}

export const updateVideo = (req: Request, res: Response) =>{
    const {body} = req;
    const {id} = req.params;

    console.log(body)
    res.json({
        id,
        msg: 'post Product',     
        body
  
    })

}