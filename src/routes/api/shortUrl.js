import*as r from"../../scrape/index.js";import s from"express";import e from"../../middlewares/apiKeyMiddleware.js";import t from"node-fetch";import{shortenWithIsGd as o,shortenWithVgd as n,VURL as i,shorter as a}from"../../lib/shorteners.js";const u=s.Router(),d={"isgd":o,"vgd":n,"tiny":r.shortlink,"vurl":i,"shrt":a};u.get("/:shortener",e,(async(r,s)=>{try{const{"url":e}=r.query;if(!e)return s.status(400).json({"error":"URL is required."});const t=d[r.params.shortener];if(!t)return s.status(400).json({"error":"Invalid shortener specified."});const o=await t(e);if(!o)return s.status(400).json({"error":"Invalid response."});s.json({"status":"Success","code":200,"author":author,"data":o})}catch(r){console.error(r)}}));export default u;