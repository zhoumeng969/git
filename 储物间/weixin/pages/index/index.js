// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:0,
    latitude:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      success: (res) =>{
        this.setData({
          longitude:res.longitude,
          latitude:res.latitude
        })
      },
    })
    // wx.getSystemInfo({
    //   success: (res) => {
    //     controls:[{
    //       id:1,
    //       iconPath:"/imges/lo.png",
    //       position:{
    //         width:50,
    //         height:50,
    //       }
    //     }]
    //   },
    // })
      onShareAppMessage() {
        return {
          title: 'cover-view',
          path: "/imges/lo.png"
        }
      }
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
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