import e from"fs";import t from"path";import i from"ora";export default async()=>{const i=t.join(process.cwd(),"./src/routes/interface"),s=e.readdirSync(i).filter((e=>e.endsWith(".js"))),a=(await Promise.all(s.map((async e=>(async e=>(await import(e)).default)(t.join(i,e)))))).map((e=>e));return{"openapi":"3.1.0","info":{"title":".M.U.F.A.R. APIs","version":"1.2.7"},"security":[{"apiKey":[]}],"components":{"securitySchemes":{"apiKey":{"type":"apiKey","in":"query","name":"apikey"}},"schemas":{"SuccessResponse":{"type":"object","properties":{"status":{"type":"string"},"code":{"type":"integer"},"author":{"type":"string"},"data":{"type":"object"}}},"TypeEnum":{"type":"string","enum":["sfw","nsfw"]},"CategoryEnum":{"type":"string","enum":{"sfw":["waifu","neko","shinobu","megumin","bully","cuddle","cry","hug","awoo","kiss","lick","pat","smug","bonk","yeet","blush","smile","wave","highfive","handhold","nom","bite","glomp","slap","kill","kick","happy","wink","poke","dance","cringe"],"nsfw":["waifu","neko","trap","blowjob"]}}}},"paths":Object.assign({},...a)}};