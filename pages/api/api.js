Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc:null,
    scr:null,
    animation:{}
  },
  request:function(){
  wx.request({
    url: 'http://baidu.com',
    data:"",
    method:"GET",
    success:function(res){
    console.log(res.data)
    }
    // 不能用promise新特性
  })
  },
  chooseImage:function(){
    let _this=this;
    wx.chooseImage({
      success: function(res) {
        // 保存一下
        // wx.saveFile({
        //   tempFilePath: res.tempFilePaths[0],
        //   success:function(res){
        //     console.log(res.savedFilePath);
        //     _this.setData({
        //       src: res.savedFilePath
        //     })
        //   },
        //   fail:function(){
        //     console.log(1);
        //   }
        // })
        _this.setData({
          imageSrc: res.tempFilePaths[0]
        })
      },
    })
  },
  playVideo:function(){
    wx.playBackgroundAudio({
      dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      title:"许巍的歌",
      success:function(res){
      console.log(res);
      }
    })
  },
  pauseVideo:function(){
    wx.pauseBackgroundAudio();
    // 监听回调
    wx.onBackgroundAudioPause(function(){
      console.log("....paused...");
    })
  },
  getVideo:function(){
    wx.getBackgroundAudioPlayerState({
      success:function(res){
        console.log(res);
      }
    })
  },
  setInfo:function(){
    wx.setStorage({
      key: 'setValue',
      data: "{name:'ww'}",
    })
  },
  getInfo:function(){
    wx.getStorage({
      key: 'setValue',
      success: function(res) {
        console.log(res);
      },
    })
  },
  clearInfo:function(){
    wx.removeStorage({
      key: 'setValue',
      success: function(res) {
        console.log(res);
      },
    })
  },
  getLocation:function(){
    wx.getLocation({
      success: function(res) {
      console.log(res);
      // wx.openLocation({
      //   latitude: res.latitude,
      //   longitude: res.longitude,
      //   success:function(){
      //     console.log("...open...")
      //   }
      // })
      wx.chooseLocation({
        success: function(res) {
          console.log(res);
        },
      })
      },
    })
  },
  toastExampleShow:function(){
    wx.showToast({
      title: '成功',
      icon: "success"
    })
  },
  toastExampleHide:function(){
   wx.hideToast();
  },
  loadingExampleShow:function(){
    wx.showLoading({
      title: '加载中',
    })
  },
  loadingExampleHide:function(){
  wx.hideLoading()
  },
  modalExampleShow:function(){
    wx.showModal({
      title: '模态框',
      content: '你确定要提交吗？',
      success:function(res){
        console.log(res);
      }
    })
  },
  actionsheetExampleShow:function(){
    wx.showActionSheet({
      itemList: ['成都','青岛','杭州','北京'],
      success:function(res){
      console.log(res.tapIndex);
      },
      fail:function(){
        console.log("..cancel..");
      }
    })
  },
  imageSrc:function(){
    // 创建动画
    var animation=wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 1000,
      timingFunction: "ease",
      delay: 0
    })
    // 设置动画
    animation.rotate(90).step();
    // 导出
    var ease=animation.export();
    // 设置赋值
    this.setData({
      animation:ease
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
    // 获取画笔
    var ctx=wx.createCanvasContext('firstCanvas');
    // 画图
    ctx.setFillStyle('yellow');
    ctx.fillRect(10, 10, 150, 75);
    //给值
    ctx.draw();
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