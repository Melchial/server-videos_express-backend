import {Router} from 'express';
import { getVideo, getVideos, postVideo, updateVideo,getVideosxActress } from '../controllers/video';

const router = Router ();

router.get('/', getVideos);
router.get('/:id', getVideo);
router.get('/actress/:actress', getVideosxActress);
router.post('/', postVideo);
router.put('/:id', updateVideo);

export default router;