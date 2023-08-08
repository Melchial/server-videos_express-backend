import {Request, Response} from 'express';
import VideoActress from '../models/videoActress';
import {Op} from 'sequelize'

export const getVideoActress = async (req: Request, res: Response) => {
    
    const find = req.query.find;
    const listVideoActress =  
        await VideoActress.findAll({
                            where: {
                                video_cod: `${find}`
                            }
                        });
    //console.log(listFiles);
    res.json(listVideoActress); //http://192.168.1.151:8003/discoct2
}

export const getVideosActress = async (req: Request, res: Response) => {

    const listVideoActress =  
        await VideoActress.findAll({
                           
                        limit: 20
                        });
    //console.log(listFiles);
    res.json(listVideoActress); //http://192.168.1.151:8003/discoct2
}
