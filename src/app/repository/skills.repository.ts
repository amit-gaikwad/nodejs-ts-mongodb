import SkillsSchema = require("./../dataAccess/schemas/skills.schema");
import RepositoryBase = require("./base/RepositoryBase");
import ISkills = require("../model/interfaces/skills.interface");

class SkillsRepository  extends RepositoryBase<ISkills> {
    constructor () {
        super(SkillsSchema);
    }    
}

Object.seal(SkillsRepository);
export = SkillsRepository;