import GallarySchema = require("./../dataAccess/schemas/gallery.schema");
import RepositoryBase = require("./base/RepositoryBase");
import IGallary = require("../model/interfaces/gallery.interface");

class GallaryRepository  extends RepositoryBase<IGallary> {
    constructor () {
        super(GallarySchema);
    }    
}

Object.seal(GallaryRepository);
export = GallaryRepository;