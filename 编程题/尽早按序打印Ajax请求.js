/**
 * 接受一个URL数组做参数，并行请求，尽可能块的按照顺序打印内容
 */

 function readUrls(urls){
   const textPromises = urls.map(url=>{
     return fetch(url).then(response=>
       response.text());
   });
   textPromises.reduce(
     function(chain,textPromise){
       return chain.then(()=>textPromise)
          .then(text=>console.log(text));
     },Promise.resolve)
 }