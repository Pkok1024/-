import t from"axios";import a from"cheerio";export default async(e="")=>{let i="https://www.xnxx.com/hits";e&&(i+=`/${e}`);try{const e=await t.get(i),r=a.load(e.data),o=[];return r(".thumb-block").each(((t,a)=>{const e=r(a).find(".thumb-under p:nth-child(1) a").text().trim(),i=r(a).find(".metadata .right").text().trim().replace(/\d{1,3}%/,""),d=r(a).find(".metadata").text().trim().split("\n")[1],n=r(a).find(".metadata .video-hd").text().trim().split(" ")[2];o.push({"title":e,"views":i,"duration":d,"quality":n})})),o}catch(t){return console.log(t),null}};