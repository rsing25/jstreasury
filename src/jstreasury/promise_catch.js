export const fetchSamsProductDetailsHandler = (opts) => {
    const {productId,lastOrderedDate,quantity,clubNbr} = opts;
    console.log("clubNbr--"+clubNbr);
    console.log("productId--"+productId);
    console.log("lastOrderedDate--"+lastOrderedDate);
    console.log("quantity--"+quantity);
    const fetchUrl = "https://www.samsclub.com/soa/services/v1/catalog/product/"+productId+"?response_group=LARGE&clubId="+clubNbr+"&ghjghj=ghjhj";
    return fetchJSON(fetchUrl, {
      method: "GET",
      headers: {
        "cache-control" : "no-cache",
        "WM_CONSUMER.ID" : "6a9fa980-1ad4-4ce0-89f0-79490bbc7625",
        "WM_QOS.CORRELATION_ID" : "4333",
        "WM_SVC.ENV" : "prod",
        "WM_SVC.NAME" : "sams-api",
        "WM_SVC.VERSION" : "1.0.0",
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      credentials: "include"
    }).then((data) => {
      console.log("***data.payload***"+JSON.stringify(data.payload));
      data.payload.lastOrderedDate = lastOrderedDate;
      data.payload.quantity = quantity;
      return data.payload;
    }).catch((err) => {
      let retArr = [];
      retArr.push({});
      console.log("***err***"+JSON.stringify(err));

      // err.message
      
      console.log("***err.message***"+JSON.stringify(err.message));
      return {"productId": productId , "lastOrderedDate":lastOrderedDate , "quantity":quantity};
    });;
  };