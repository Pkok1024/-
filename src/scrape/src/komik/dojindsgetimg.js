async function t(t){return new Promise(((n,r)=>{o.get(t).then((({"data":t})=>{const o=a.load(t),r=[];o("#anu > img").each((async function(t,a){r.push(o(a).attr("src"))})),n(r)})).catch(r)}))}import o from"axios";import a from"cheerio";export default t;