async function a(a,r){try{return(await e.get(`https://api.waifu.pics/${a}/${r}`)).data}catch(a){throw new Error(`Gagal mengambil gambar waifu dari kategori ${r}: ${a.message}`)}}async function r(a,r){a.json({"status":"Success","code":200,"author":author,"data":r})}import t from"express";import e from"axios";const s=t.Router(),o=["waifu","neko","shinobu","megumin","bully","cuddle","cry","hug","awoo","kiss","lick","pat","smug","bonk","yeet","blush","smile","wave","highfive","handhold","nom","bite","glomp","slap","kill","kick","happy","wink","poke","dance","cringe"],i=["waifu","neko","trap","blowjob"];s.get("/nsfw",(async(t,e)=>{const{"category":s}=t.query;if(!s)return e.status(400).json({"error":"Harap berikan kategori."});try{if(!i.includes(s))return e.status(400).json({"error":"Kategori tidak valid."});const t=await a("nsfw",s);await r(e,t.url)}catch(a){console.error("Gagal mengambil gambar waifu:",a.message),e.status(500).json({"error":"Gagal mengambil gambar waifu."})}})),s.get("/sfw",(async(t,e)=>{const{"category":s}=t.query;if(!s)return e.status(400).json({"error":"Harap berikan kategori."});try{if(!o.includes(s))return e.status(400).json({"error":"Kategori tidak valid."});const t=await a("sfw",s);await r(e,t.url)}catch(a){console.error("Gagal mengambil gambar waifu:",a.message),e.status(500).json({"error":"Gagal mengambil gambar waifu."})}}));export default s;