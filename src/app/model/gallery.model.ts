import IGallery = require("./interfaces/gallery.interface");

 class GalleryModel {
   
   _galleryModel: IGallery;
   
   constructor(gallery: IGallery) {
       this._galleryModel = gallery;
   }
    
}
Object.seal(GalleryModel);
export= GalleryModel;