Page({

  /**
   * 页面的初始数据
   */
  // true为不显示
  data: {
    actionSheetHidden:true,
    actionSheetItems:[1,2,3,4],
  },
  actionSheetChange:function(){
    this.setData({
      actionSheetHidden:true
    })
  },
  click:function(){
    this.setData({
      actionSheetHidden: false
    })
  },
  binditem:function(e){
    // 输出被选中的项目
    console.log(e.target.dataset.id);
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