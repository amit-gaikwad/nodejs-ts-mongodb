import INotice = require("./interfaces/inotice");

 class NoticeModel {
   
   _noticeModel: INotice;
   
   constructor(notice: INotice) {
       this._noticeModel = notice;
   }
    
}
Object.seal(NoticeModel);

export= NoticeModel;