import ISkills = require("./interfaces/skills.interface");

 class SkillModel {
   
   _skillModel: ISkills;
   
   constructor(skill: ISkills) {
       this._skillModel = skill;
   }
    
}
Object.seal(SkillModel);

export= SkillModel;