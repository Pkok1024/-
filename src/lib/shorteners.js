async function t(t){try{return(await o.get(`https://vurl.com/api.php?url=${t}`)).data}catch(t){throw new Error(`HTTP error! Status: ${t.response.status}`)}}async function r(t){try{return(await o.get(`https://v.gd/create.php?format=json&url=${t}`)).data.shorturl}catch(t){throw new Error(`HTTP error! Status: ${t.response.status}`)}}async function e(t){try{const r=await o.get(`https://is.gd/create.php?format=json&url=${t}`);return console.log(r),r.data.shorturl}catch(t){console.log(t)}}function a(t){return new Promise((r=>{o.post("https://shorter.me/page/shorten",new URLSearchParams({"url":t,"alias":"","password":""}),{"headers":{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Accept":"*/*","X-Requested-With":"XMLHttpRequest","User-Agent":"Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36","Referer":"https://shorter.me/"}}).then((({"data":t})=>{r({"url":t.data})})).catch((t=>{r({"msg":t?.message||t})}))}))}import o from"axios";export{t as VURL,r as shortenWithVgd,e as shortenWithIsGd,a as shorter};