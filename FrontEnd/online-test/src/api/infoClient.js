/**
 * 短信模块
 */
const ZhenzismsClient = require('./zhenzisms');
let client = new ZhenzismsClient('sms_developer.zhenzikj.com', '100880', 'c20ca481-2a39-4863-94d3-0fc00d395e79');
export const infoSend = (phoneNumber) => {
    let randomNum = ('000000' + Math.floor(Math.random() * 999999)).slice(-4);
    message: "验证码为: " + randomNum;
    let params = {
        message: "验证码为: " + randomNum,
        "number": phoneNumber
    };
    // client.send(params).then(res =>{
    //   console.log(res)
    // });
    return randomNum
}
