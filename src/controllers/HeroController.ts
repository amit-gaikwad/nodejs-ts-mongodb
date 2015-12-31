import express = require('express');
import HeroBusiness = require('./../app/business/HeroBusiness');
import IBaseController = require('./interfaces/base/IBaseController');
import IHeroModel = require('./../app/model/interfaces/IHeroModel');



class HeroController implements IBaseController <HeroBusiness> {
    
    create(req: express.Request, res: express.Response): void {
            try {
                                   
                var hero: IHeroModel = <IHeroModel>req.body;
                var heroBusiness = new HeroBusiness();
                heroBusiness.create(hero, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send({"success": "success"});
                });
            }
            catch (e)  {
                console.log(e);
            }
    }
    update(req: express.Request, res: express.Response): void {
        try {
             var hero: IHeroModel = <IHeroModel>req.body;
             var _id: string = req.body.id;
             var heroBusiness = new HeroBusiness();
                heroBusiness.update(_id, hero, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send({"success": "success"});
                });   
            }
            catch (e)  {
                console.log(e);
            }
    }
    delete(req: express.Request, res: express.Response): void {
        try {
                
             var _id: string = req.body.id;
             var heroBusiness = new HeroBusiness();
                heroBusiness.delete(_id, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send({"success": "success"});
                });   
            }
            catch (e)  {
                console.log(e);
            }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
                
             var heroBusiness = new HeroBusiness();
                heroBusiness.retrieve((error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send(result);
                });   
            }
            catch (e)  {
                console.log(e);
            }
    }
    findById(req: express.Request, res: express.Response): void {
        try {
             
             var _id: string = req.body.id;
             var heroBusiness = new HeroBusiness();
                heroBusiness.findById(_id, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send({"success": "success"});
                });   
            }
            catch (e)  {
                console.log(e);
            }
    }
    findOne(req: express.Request, res: express.Response): void {
        try {
             var name: string = req.body;
             var heroBusiness = new HeroBusiness();
                heroBusiness.findOne({'name': name}, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send(result);
                });  
            }
            catch (e)  {
                console.log(e);
            }
    }
        
}
export = HeroController;    