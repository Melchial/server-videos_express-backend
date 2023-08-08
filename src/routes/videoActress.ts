import {Router} from 'express';
import { getVideoActress, getVideosActress} from '../controllers/videoActress';

const router = Router ();

router.get('/search/', getVideoActress);
router.get('/', getVideosActress);
// router.get('/search/:find', getFileSearch);

// router.get('/search/', getFileSearchMulti);
// router.get('/:id', getVideo);
// router.post('/', postVideo);
// router.put('/:id', updateVideo);

export default router;