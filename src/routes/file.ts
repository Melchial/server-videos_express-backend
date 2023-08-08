import {Router} from 'express';
import { getFileSearch, getFiles,getFileSearchMulti,getFilesxVideoCod } from '../controllers/file';

const router = Router ();

router.get('/', getFiles);
router.get('/:video_cod', getFilesxVideoCod);
router.get('/search/:find', getFileSearch);

router.get('/search/', getFileSearchMulti);
// router.get('/:id', getVideo);
// router.post('/', postVideo);
// router.put('/:id', updateVideo);

export default router;