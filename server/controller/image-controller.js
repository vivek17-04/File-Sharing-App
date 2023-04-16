import File from "../models/file.js";

export const uploadImage = async (req, resp)=>{
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname
    }
    try{
      const file = await  File.create(fileObj);
      resp.status(200).json({path : `http://localhost:8000/uploads/${file._id}`})
    }catch(error){
        console.error(error.message);
        resp.status(500).json({error : error.message})
    }
}

export const downloadImg = async (req, resp)=>{
    try{
       let file =await File.findById(req.params.fileId);
       file.downloadContent++;
       await file.save();
       resp.download(file.path, file.name);
    }catch(error){
        console.error(error.message);
        return resp.status(500).json({error : error.message});
    }
}