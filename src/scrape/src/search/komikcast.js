import t from"axios";import r from"cheerio";export default async e=>{try{const i=`https://komikcast.lol/?s=${e}`,a=await t.get(i),s=r.load(a.data),o=[];return s(".list-update_items .list-update_item").each(((t,r)=>{const e=s(r).find(".title").text().trim(),i=s(r).find("a").attr("href"),a=s(r).find("img").attr("src"),c=s(r).find(".chapter").text().trim(),n=s(r).find(".chapter").attr("href"),m=s(r).find(".numscore").text().trim(),p=s(r).find(".type").text().trim();s(r).find(".type").attr("class"),o.push({"title":e,"url":i,"img":a,"lastch":n,"chapter":c,"score":m,"type":p})})),o}catch(t){return console.error("Error scraping KomikCast:",t),[]}};