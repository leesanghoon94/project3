const axios = require('axios').default

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

exports.handler = async (event) => {
  const payload = {
    MessageGroupId: "stock-arrival-group",
    MessageAttributeProductId: "e5b4bc11-faca-11ed-8f43-0e2f76dd43b0",
    MessageAttributeProductCnt: "3",
    MessageAttributeFactoryId: "FF-500293",
    MessageAttributeRequester: "asdf",
    CallbackUrl: "https://1ft5lpkkuj.execute-api.ap-northeast-2.amazonaws.com/product/donut"
  }
  
  const result = await axios.post('http://project3-factory.coz-devops.click/api/manufactures', payload)
  console.log(result)
}