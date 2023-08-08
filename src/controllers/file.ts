import {Request, Response} from 'express';
import File from '../models/file';
import {Op} from 'sequelize'

export const getFilesxVideoCod = async (req: Request, res: Response) => {
    const video_cod = req.params.video_cod ;
    const listFiles =  
        await File.findAll({
                                where: {
                                    file_vid_cod: video_cod
                            }
                        });
    //console.log(listFiles);
    res.json(listFiles); //http://192.168.1.151:8003/discoct2
}

export const getFiles = async (req: Request, res: Response) => {
    const listFiles =  
        await File.findAll({
                            limit: 20
                        });
    //console.log(listFiles);
    res.json(listFiles); //http://192.168.1.151:8003/discoct2
}

export const getFileSearch = async (req: Request, res: Response) => {
    const find = req.params.find ;
    const find1 = req.params.find1 ;
    const find2 = req.params.find2 ;
    console.log(find);
    const listFiles =  
        await File.findAll({
                            where: {
                                 file_vid_cod: {
                                    [Op.like]: `%${find}%`
                                }
                            }
                        }); 
    //console.log(listFiles);
    res.json(listFiles); //http://192.168.1.151:8003/discoct2
}

export const getFileSearchMulti = async (req: Request, res: Response) => {
    const find1 = req.query.find1 ;
    const find2 = req.query.find2 ;
    const listFiles =  
        await File.findAll({
                            where: {
                                [Op.and]: [
                                    {file_vid_cod: {
                                            [Op.like]: `%${find1}%`
                                        }
                                        },
                                    {   
                                        file_vid_cod: {
                                        [Op.like]: `%${find2}%`
                                        }
                                    }
                                ]
                                 
                            }
                        }); 
    //console.log(listFiles);
    res.json(listFiles); //http://192.168.1.151:8003/discoct2
}