import r from"axios";export default async function t(t,a){try{return(await r.get(t,a)).data}catch(r){throw console.error("Error fetching data:",r),r}}