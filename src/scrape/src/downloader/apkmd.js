async function t(t){try{const o=await e.get(t),r=await o.data,i=a.load(r),n="https://www.apkmirror.com"+i(".downloadButton").attr("href");if(n.includes("#downloads")){const e=i('meta[property="og:url"]').attr("content")+"#downloads",o=await fetch(e),r=await o.text(),d=a.load(r),p=[];d(".table-row.headerFont").each(((t,a)=>{const e={"version":d(a).find("a.accent_color").text().trim(),"bundle":d(a).find(".apkm-badge.success").eq(0).text().trim(),"splits":d(a).find(".apkm-badge.success").eq(1).text().trim(),"apkUrl":"https://www.apkmirror.com"+d(a).find("a.accent_color").attr("href"),"downloadDate":d(a).find(".dateyear_utc").data("utcdate")};Object.values(e).some((t=>void 0!==t&&""!==t))&&p.push(e)}));const l=await fetch(p[1].apkUrl),c=await l.text(),s="https://www.apkmirror.com"+a.load(c)(".downloadButton").attr("href"),m=await fetch(s),w=await m.text(),u=a.load(w)("#filedownload"),f=`https://www.apkmirror.com/wp-content/themes/APKMirror/download.php?id=${u.find('input[name="id"]').attr("value")}&key=${u.find('input[name="key"]').attr("value")}`;return{"title":i('meta[property="og:title"]').attr("content"),"gambar":i('meta[property="og:image"]').attr("content"),"link":n,"linkdl":f,"downloadText":i(".downloadButton").text().trim(),"author":t.split("/")[4].toUpperCase(),"info":i(".infoSlide").text().trim(),"description":i("#description .notes").text().trim()}}{const e=await fetch(n),o=await e.text(),r=a.load(o)("#filedownload"),d=`https://www.apkmirror.com/wp-content/themes/APKMirror/download.php?id=${r.find('input[name="id"]').attr("value")}&key=${r.find('input[name="key"]').attr("value")}&forcebaseapk=${r.find('input[name="forcebaseapk"]').attr("value")}`;return{"title":i('meta[property="og:title"]').attr("content"),"gambar":i('meta[property="og:image"]').attr("content"),"link":n,"linkdl":d,"downloadText":i(".downloadButton").text().trim(),"author":t.split("/")[4].toUpperCase(),"info":i(".appspec-value").text().trim(),"description":i("#description .notes").text().trim(),"size":i(".appspec-row:nth-child(2) .appspec-value").text().trim(),"tanggal":i(".appspec-row:last-child .appspec-value .datetime_utc").attr("data-utcdate")}}}catch(t){console.error("Terjadi kesalahan:",t)}}import a from"cheerio";import e from"axios";export default t;