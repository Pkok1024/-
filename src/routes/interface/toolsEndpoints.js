export default{"/tools/translate":{"get":{"tags":["Tools"],"parameters":[{"name":"lang","in":"query","description":"Target language code","required":!0,"schema":{"type":"string"}},{"name":"text","in":"query","description":"Text to be translated","required":!0,"schema":{"type":"string"}}],"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SuccessResponse"}}}}}}},"/tools/cuaca":{"get":{"tags":["Tools"],"parameters":[{"name":"kota","in":"query","description":"Text to be search","required":!0,"schema":{"type":"string"}}],"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SuccessResponse"}}}}}}},"/tools/saucenao":{"get":{"tags":["Tools"],"parameters":[{"name":"url","in":"query","description":"anime image URL to find the source ","required":!0,"schema":{"type":"string"}}],"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SuccessResponse"}}}}}}},"/tools/removebg":{"get":{"tags":["Tools"],"parameters":[{"name":"url","in":"query","description":"remove background","required":!0,"schema":{"type":"string"}}],"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SuccessResponse"}}}}}}},"/tools/apkmsearch":{"get":{"tags":["Tools"],"parameters":[{"name":"query","in":"query","description":"Text to be search","required":!0,"schema":{"type":"string"}}],"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SuccessResponse"}}}}}}},"/tools/sinonim":{"get":{"tags":["Tools"],"parameters":[{"name":"kata","in":"query","description":"Text to be sinonim","required":!0,"schema":{"type":"string"}}],"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SuccessResponse"}}}}}}},"/tools/githubstalk":{"get":{"tags":["Tools"],"parameters":[{"name":"username","in":"query","description":"Text to be search","required":!0,"schema":{"type":"string"}}],"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SuccessResponse"}}}}}}},"/tools/langList":{"get":{"tags":["Tools"],"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SuccessResponse"}}}}}}},"/tools/userAgents":{"get":{"tags":["Tools"],"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SuccessResponse"}}}}}}},"/tools/nekopoi-letest":{"get":{"tags":["Tools"],"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SuccessResponse"}}}}}}},"/tools/anti-porn":{"get":{"tags":["Tools"],"parameters":[{"name":"url","in":"query","required":!0,"schema":{"type":"string"},"description":"URL of the image to be checked"}],"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SuccessResponse"}}}}}}},"/tools/ssweb":{"get":{"tags":["Tools"],"parameters":[{"name":"url","in":"query","required":!0,"schema":{"type":"string"},"description":"URL of the web to be checked"}],"responses":{"200":{"content":{"image/*":{}}}}}},"/tools/styletext":{"get":{"tags":["Tools"],"parameters":[{"name":"q","in":"query","required":!0,"schema":{"type":"string"},"description":"style text"}],"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SuccessResponse"}}}}}}}};