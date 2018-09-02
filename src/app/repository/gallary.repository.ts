import GallarySchema = require("./../dataAccess/schemas/gallary.schema");
import RepositoryBase = require("./base/RepositoryBase");
import IGallary = require("../model/interfaces/igallary");

class GallaryRepository  extends RepositoryBase<IGallary> {
    constructor () {
        super(GallarySchema);
    }    
}

Object.seal(GallaryRepository);
export = GallaryRepository;