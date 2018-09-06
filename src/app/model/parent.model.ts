import IParent = require("./interfaces/parent.interface");

 class ParentModel {
   
   _parentModel: IParent;
   
   constructor(parent: IParent) {
       this._parentModel = parent;
   }
    
}
Object.seal(ParentModel);

export= ParentModel;