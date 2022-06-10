// 导入request请求工具类
import {
  getBaseUrl,
  requestUtil
} from '../../utils/requestUtil.js';
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数组
    swiperList: [],
    baseUrl: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发送异步请求，获取后端数据
    // wx.request({
    //   url: 'http://localhost:8080/product/findSwiper',
    //   method:"GET",
    //   success:(result)=>{
    //     console.log(result)
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //     wx.request({
    //       url: 'url',
    //     })
    //   }
    // })

    this.getSwiperList();
  },

  async getSwiperList() {
    // requestUtil({url: '/product/findSwiper',method:"GET"})
    //   .then(result=>{
    //     const baseUrl=getBaseUrl();
    //     this.setData({
    //        swiperList:result.message,
    //        baseUrl
    //     })
    //   })

    const result = await requestUtil({
      url: '/product/findSwiper',
      method: "GET"
    });
    const baseUrl = getBaseUrl();
    this.setData({
      swiperList: result.message,
      baseUrl
    })

  }

})