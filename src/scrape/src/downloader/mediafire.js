import e from"axios";import r from"cheerio";export async function mediafire(t){try{const o=await e.get(t),a=r.load(o.data),i=a("a#downloadButton").attr("href"),l=a("a#downloadButton").text().replace("Download","").replace("(","").replace(")","").replace(/\n/g,"").trim(),n=i.split("/")[5],c=n.split(".")[1];return{"title":n,"size":l,"url":i,"mime":c}}catch(e){throw console.error("Error:",e.message),e}}export default mediafire;