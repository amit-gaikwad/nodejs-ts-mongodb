import INotice = require("./interfaces/notice.interface");

 class NoticeModel {
   
   _noticeModel: INotice;
   
   constructor(notice: INotice) {
       this._noticeModel = notice;
   }
    
}
Object.seal(NoticeModel);

export= NoticeModel;