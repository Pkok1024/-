async function t(t){try{const e=await i.get(`https://id.m.wikipedia.org/wiki/${t}`),a=s.load(e.data),r=a("#firstHeading").text().trim(),n=a("#mw-content-text").find("div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img").attr("src")||"//i.postimg.cc/Z5b1WDwD/1675949861324.jpg",o=[];a("#mw-content-text > div.mw-parser-output").each((function(t,i){const s=a(i).find("p").text().trim();o.push(s)}));const u=o.map((t=>({"judul":r,"thumb":"https:"+n,"isi":t})));return{"status":e.status,"result":u}}catch(t){return{"status":t.response.status,"Pesan":t.message}}}import i from"axios";import s from"cheerio";export default t;