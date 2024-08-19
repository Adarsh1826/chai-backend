import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_APIKEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localfilepath)=>{
    try {
        if(!localfilepath) {
            return null
        }
        // upload the file 
       const response = await cloudinary.uploader.upload(localfilepath,{
            resource_type:"auto"
        })
        // file has been uploaded succesfully
        console.log("File Uploaded successfully on cloudinary",response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localfilepath) // remove the locally saved temp file
        return null
    }
}

export {uploadOnCloudinary}