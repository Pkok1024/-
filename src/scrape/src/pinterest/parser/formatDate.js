export default function e(e,t){const g=e=>e<10?"0"+e:e.toString(),r=e.getFullYear(),a=g(e.getMonth()+1),c=g(e.getDate()),l=g(e.getHours()),n=g(e.getMinutes()),o=g(e.getSeconds());return t.replace(/yyyy/g,r).replace(/MM/g,a).replace(/dd/g,c).replace(/HH/g,l).replace(/mm/g,n).replace(/ss/g,o)}