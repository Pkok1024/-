async function t(t){const a=t.toString("base64"),o=new URLSearchParams;o.set("image",a);const n=await e("https://api.taoanhdep.com/public/anime.php",{"headers":{"content-type":"application/x-www-form-urlencoded"},"body":o.toString(),"method":"POST"});return(await n.json()).img}import e from"node-fetch";export default t;