import e from"got";import t from"cheerio";export default a=>new Promise((async n=>{try{if(!a.match(/(?:https?:\/\/(web\.|www\.|m\.)?(facebook|fb)\.(com|watch)\S+)?$/)&&!a.match(/(https|http):\/\/www.instagram.com\/(p|reel|tv|stories)/gi))return n({"message":"Invalid URL"});const i=function(e){function t(e,t,a){const n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/".split("");let i=n.slice(0,t),o=n.slice(0,a),r=e.split("").reverse().reduce((function(e,a,n){if(-1!==i.indexOf(a))return e+i.indexOf(a)*Math.pow(t,n)}),0),s="";for(;r>0;)s=o[r%a]+s,r=(r-r%a)/a;return s||"0"}let[a,n,i,o,r,s]=e,p="";for(let e=0,n=a.length;e<n;e++){let n="";for(;a[e]!==i[r];)n+=a[e],e++;for(let e=0;e<i.length;e++)n=n.replace(new RegExp(i[e],"g"),e.toString());p+=String.fromCharCode(t(n,r,10)-o)}return decodeURIComponent(encodeURIComponent(p))}((await e.post("https://snapsave.app/action.php?lang=id",{"headers":{"accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","content-type":"application/x-www-form-urlencoded","origin":"https://snapsave.app","referer":"https://snapsave.app/id","user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"},"form":{"url":a}}).text()).split("decodeURIComponent(escape(r))}(")[1].split("))")[0].split(",").map((e=>e.replace(/"/g,"").trim()))).split('getElementById("download-section").innerHTML = "')[1].split('"; document.getElementById("inputData").remove(); ')[0].replace(/\\(\\)?/g,""),o=t.load(i),r=[];if(o("table.table").length||o("article.media > figure").length){const e=o("article.media > figure").find("img").attr("src");o("tbody > tr").each(((t,a)=>{const n=o(a).find("td"),i=n.eq(0).text();let s=n.eq(2).find("a").attr("href")||n.eq(2).find("button").attr("onclick");const p=/get_progressApi/gi.test(s||"");if(p){const e=/get_progressApi\('(.*?)'\)/.exec(s||"");s=e&&e[1]||s}r.push({"resolution":i,"thumbnailUrl":e,"downloadUrl":s,"shouldRender":p})}))}else o("div.download-items__thumb").each(((e,t)=>{const a=o(t).find("img").attr("src");o("div.download-items__btn").each(((e,t)=>{let n=o(t).find("a").attr("href");/https?:\/\//.test(n||"")||(n=`https://snapsave.app${n}`),r.push({"thumbnailUrl":a,"downloadUrl":n})}))}));return n(r.length?{"data":r}:{"status":!1,"message":"No data found"})}catch(e){return n({"status":!1,"message":e.message})}}));