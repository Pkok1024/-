import r from"express";import s from"fs";import{join as t}from"path";import e from"axios";import o from"../../middlewares/apiKeyMiddleware.js";import*as a from"../../scrape/index.js";const i=r.Router();i.get("/:fetishburg",o,(async(r,s)=>{try{const{"fetishburg":t}=r.params,e=await a.fetishburg(t);s.json({"status":"success","code":200,"data":e})}catch(r){console.error("Error in handling '/:fetishburg' endpoint:",r),s.status(500).json({"status":"Error","code":500,"message":"Internal Server Error"})}}));export default i;