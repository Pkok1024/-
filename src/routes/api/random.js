import r from"express";import e from"fs";import s from"axios";import{join as t}from"path";import a from"../../middlewares/apiKeyMiddleware.js";import{pickRandom as o}from"../../lib/function.js";const n=r.Router();n.get("/:country",a,(async(r,a)=>{try{const{"country":n}=r.params,i=t("src/scrape/data/asupan/image",`${n}.json`);if(!e.existsSync(i))return a.status(404).json({"status":"Not Found","message":"File not found"});const m=e.readFileSync(i,"utf-8"),p=JSON.parse(m);if(!Array.isArray(p)||0===p.length)return a.status(500).json({"status":"Internal Server Error","message":"Invalid data format"});const u=o(p),c=await s.get(u,{"responseType":"stream"});a.setHeader("Content-Type","image/jpeg"),c.data.pipe(a)}catch(r){console.error("Error:",r.message),a.status(500).json({"status":"Internal Server Error","message":r.message})}}));export default n;