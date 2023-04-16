import express from 'express';
import { uploadImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';
import { downloadImg } from '../controller/image-controller.js';

const router = express.Router();

router.post('/upload',upload.single('file'), uploadImage);
router.get('/uploads/:fileId', downloadImg);

export default router;