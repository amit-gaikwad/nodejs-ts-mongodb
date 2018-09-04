

import NoticeRepository = require("../repository/notice.repository");
import INotice = require("../model/interfaces/inotice");

class NoticeService  {
    private _noticeRepository: NoticeRepository;
    
    constructor () {
        this._noticeRepository = new NoticeRepository();
    }  
        
    create (item: INotice, callback: (error: any, result: any) => void) {
        this._noticeRepository.create(item, callback);   
    }
   
    retrieve (callback: (error: any, result: any) => void) {
         this._noticeRepository.retrieve(callback);
    }
    
     update (_id: string, item: INotice, callback: (error: any, result: any) => void) {
        /* this._studentRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);
            else 
                this._studentRepository.update(res._id, item, callback);
                
        });   */  
    }
     
    delete (_id: string, callback:(error: any, result: any) => void) {
        this._noticeRepository.delete(_id, callback);
    }
    
    findById (_id: string, callback: (error: any, result: INotice) => void) {
        this._noticeRepository.findById(_id, callback);
    }
    
}
Object.seal(NoticeService);
export = NoticeService;