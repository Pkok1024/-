async function t(t){return new Promise(((r,n)=>{i.get(t).then((({"data":t})=>{const i=a.load(t),n=[];i("#chapter_list > ul > li").each((async function(t,a){const r={"title":i(a).find("> div.chright > span > a").attr("title"),"url":i(a).find("> div.chright > span > a").attr("href")};n.push(r)})),r(n)})).catch(n)}))}import i from"axios";import a from"cheerio";export default t;