// 定义请求根路径baseUrl
const baseUrl="http://localhost:8080";

// 同时并发请求的次数
let ajaxtTimes = 0;
/**
 * 返回请求根路径baseUrl
 */
export const getBaseUrl=()=>{
  return baseUrl;
}

/**
 * 后端请求工具类
 * @param {*} params 
 */
export const requestUtil=(params)=>{

  var start = new Date().getTime();
  ajaxtTimes++;
  wx.showLoading({
    title: '加载中...',
    mask:true

  })
  // 模拟网络延迟加载
  // while(true){
  //   if(new Date().getTime()-start>0.5*1000){
  //     break;
  //   }
  // }
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      url:baseUrl+params.url,
      success:(result)=>{
       resolve(result.data)
      },
      fail:(err)=>{
        reject(err)
       },
       complete:()=>{
         ajaxtTimes--;
         if(ajaxtTimes==0){
          wx.hideLoading(); // 关闭加载图标
         }
       }

    })
  });
}