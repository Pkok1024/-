import{Router as s}from"express";import{serve as e,setup as o}from"swagger-ui-express";import t from"../lib/combinedJSON.js";const a=s();a.use("/docs",e,(async(s,e,a)=>{try{const n=await t();o(n,{"swaggerOptions":{"persistAuthorization":!0,"displayRequestDuration":!0,"requestSnippetsEnabled":!0,"docExpansion":"none","defaultModelsExpandDepth":5,"operationsSorter":"method","tryItOutEnabled":!0,"showCommonExtensions":!0,"filter":!0,"deepLinking":!0,"validateResponses":!0,"validateModels":!0,"displayOperationId":!0,"showExtensions":!0,"showRequestHeaders":!0,"showResponseHeaders":!0,"showFullRequestSchema":!0,"showFullResponseSchema":!0,"showResponseCodes":!0,"showExternalDocs":!0},"url":"/docs/","customCssUrl":"/assets/css/custom.css","customJs":["/assets/js/custom2.js","/assets/js/custom.js"],"customfavIcon":"/assets/img/favicon.ico","customSiteTitle":author,"explorer":!1,"deepLinking":!0})(s,e,a)}catch(s){a(s)}}));export default a;