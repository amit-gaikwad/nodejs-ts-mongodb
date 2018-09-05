import GalleryRepository = require("../repository/gallery.repository");
import IGallery = require("../model/interfaces/gallery.interface");

class GalleryService  { 
    private _galleryRepository: GalleryRepository;
    
    constructor () {
        this._galleryRepository = new GalleryRepository();
    }  
        
    create (item: IGallery, callback: (error: any, result: any) => void) {
        this._galleryRepository.create(item, callback);   
    }
   
    retrieve (callback: (error: any, result: any) => void) {
         this._galleryRepository.retrieve(callback);
    }
    
     update (_id: string, item: IGallery, callback: (error: any, result: any) => void) {
        /* this._studentRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);
            else 
                this._studentRepository.update(res._id, item, callback);
                
        });   */  
    }
     
    delete (_id: string, callback:(error: any, result: any) => void) {
        this._galleryRepository.delete(_id, callback);
    }
    
    findById (_id: string, callback: (error: any, result: IGallery) => void) {
        this._galleryRepository.findById(_id, callback);
    }
    
}
Object.seal(GalleryService);
export = GalleryService;