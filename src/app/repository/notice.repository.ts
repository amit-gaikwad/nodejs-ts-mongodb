import NoticeSchema = require("./../dataAccess/schemas/notice.schema");
import RepositoryBase = require("./base/RepositoryBase");
import INotice = require("../model/interfaces/inotice");

class NoticeRepository  extends RepositoryBase<INotice> {
    constructor () {
        super(NoticeSchema);
    }    
}

Object.seal(NoticeRepository);
export = NoticeRepository;