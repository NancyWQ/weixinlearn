var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:"",
    userPassword:"",
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
    
  },
  userName:function(event){
    this.setData({
      userName:event.detail.value
    })
  },
  userPassword:function(event){
    this.setData({
      userPassword: event.detail.value
    })
  },
  loginBtnClick: function () {
    // 用户名和密码验证的过程
    app.myData.userInfo = {userName: this.data.userName, userPassword: this.data.passWord }
    // 应该使用switchTab跳转，不应该使用navigateTo跳转
    wx.switchTab({
      url: "../user/user" ,
    })
  },
})