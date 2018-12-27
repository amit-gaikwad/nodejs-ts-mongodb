import SkillsRepository = require("../repository/skills.repository");
import ISkills = require("../model/interfaces/skills.interface");

class SkillsService  {
    private _skillsRepository: SkillsRepository;
    
    constructor () {
        this._skillsRepository = new SkillsRepository();
    }  
        
    create (item: ISkills, callback: (error: any, result: any) => void) {
        this._skillsRepository.create(item, callback);   
    }
   
    retrieve (callback: (error: any, result: any) => void) {
         this._skillsRepository.retrieve(callback);
    }
    
     update (_id: string, item: ISkills, callback: (error: any, result: any) => void) {
        /* this._studentRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);
            else 
                this._studentRepository.update(res._id, item, callback);
                
        });   */  
    }
     
    delete (_id: string, callback:(error: any, result: any) => void) {
        this._skillsRepository.delete(_id, callback);
    }
    
    findById (_id: string, callback: (error: any, result: ISkills) => void) {
        this._skillsRepository.findById(_id, callback);
    }
    
}
Object.seal(SkillsService);
export = SkillsService;