// pages/testIndex/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
    'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    fine:[{
      url:"../../images/img1.png",
      title:"这是商品标题"
    },
      {
        url: "../../images/img1.png",
        title: "这是商品标题"
      }, {
        url: "../../images/img1.png",
        title: "这是商品标题"
      }, {
        url: "../../images/img1.png",
        title: "这是商品标题"
      }],
      hot:[
        {
          url:"../../images/img2.png",
          avatar:"../../images/avatar.png",
          title:"这是评测的标题",
          passage:"这是评测的内容",
        },
        {
          url: "../../images/img2.png",
          avatar: "../../images/avatar.png",
          title: "这是评测的标题",
          passage: "这是评测的内容",
        },
        {
          url: "../../images/img2.png",
          avatar: "../../images/avatar.png",
          title: "这是评测的标题",
          passage: "这是评测的内容",
        }, {
          url: "../../images/img2.png",
          avatar: "../../images/avatar.png",
          title: "这是评测的标题",
          passage: "这是评测的内容",
        }
      ]
  },
// 跳转到详情页面
  jumpToDetail:function(){
    wx.navigateTo({
      url: '../notFound/notFound',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})