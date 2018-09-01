import IGallary = require("./interfaces/igallary");

 class GallaryModel {
   
   _gallaryModel: IGallary;
   
   constructor(gallary: IGallary) {
       this._gallaryModel = gallary;
   }
    
}
Object.seal(GallaryModel);

export= GallaryModel;