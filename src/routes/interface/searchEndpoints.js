const e=(e,s)=>({"get":{"tags":["Search"],"parameters":[{"in":"query","name":e,"required":!0,"description":`query for ${s}`,"schema":{"type":"string"}}],"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SuccessResponse"}}}}}}}),s={"/search/youtube":e("q","downloaded YouTube content"),"/search/xnxx":e("q","response for Xnxx"),"/search/wikipedia":e("q","response for Wikipedia"),"/search/dvasearch":e("q","response for apk"),"/search/komikcast":e("q","response for komik"),"/search/bukalapak":e("q","response for bukalapak"),"/search/tiktoks":e("q","response for tiktoks")};export default s;