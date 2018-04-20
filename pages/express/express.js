Page({

  /**
   * 页面的初始数据
   */
  data: {
    express:"",
    expressInfo:'',
    expressId:"",
  },
// 向后台请求
getExpressInfo:function(company,num,cb){
  wx.request({
    // 请求的地址
    url: 'http://apis.baidu.com/kuaidicom/express_api/express_api',
    // 请求方法，默认为get
    method:"GET",
    data: {
      com:company,
      nu:num,
      muti:0,
    },
    // 密匙
    header: {
      'apikey': '6c0e60e50099158f3c8823400f7f409e' 
    },
    success: function (res) {
      // console.log(res.data)
      cb(res.data);
    },
    fail:function(res){
    console.err('error');
    }
  })
},
// 获取输入数据
input:function(e){
  this.setData({express:e.detail.value});
},
//请求
btnSearch:function(){
// console.log(this.data.express);
// 注意里外的this一致，必须要用匿名函数或是重新定义this，避免闭包的问题
  this.getExpressInfo('',this.data.express,(data)=>{
    console.log(data);
  // this.setData({expressInfo:data.data});
    this.setData({expressInfo:data.data});
  })
},
//重置的办法：给input框绑定value，清空就可以了
bangbtnReset:function(){
    this.setData({express:'',expressInfo:''});
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