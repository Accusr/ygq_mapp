const app = getApp()

Page({
  data: {
   mapOption:{
     longitude:120.56432,
     latitude:30.56432
   },
   markers:[{
     id:1,
     latitude: 30.63170,
     longitude: 120.56432,
     iconPath:'../../static/img/test_avatar.jpeg',
     width: '80rpx',
     height: '80rpx',
     label:{
       content:'我的活动...'
     }
   },{
     id:1,
     latitude: 30.63179,
     longitude: 120.56439,
     iconPath:'../../static/img/test_avatar.jpeg',
     width: '80rpx',
     height: '80rpx',
     label:{
      content:'我的活动...'
    }
   }
   ]
  },
  async onLoad(){
    this.poptip = this.selectComponent('.poptip')
    try{
      const _location = await wx.getLocation({
        
      })
      this.setData({
        mapOption:{
          longitude: _location.longitude,
          latitude: _location.latitude
        }
      })
      console.log('info', _location, this.data.mapOption)
    }catch(e){
      const setting = await wx.getSetting()
      setting.authSetting['scope.userLocation'] === false && wx.showModal({
        content:'请在右上角设置里打开位置信息',
        showCancel: false,
        confirmText:'我知道了'
      })
      console.error('load err',setting)
    }
    console.log('ceshiiiii')
  },
  async onShow(){
    this.poptip.error('授权失败！！！')
  },
  async locationMe(){
    const _location = await wx.getLocation({
        
    })
    this.setData({
      mapOption:{
        longitude: _location.longitude,
        latitude: _location.latitude
      }
    })
  },
  more(){
    const _more = this.selectComponent(".more-activity")
    _more.popup()
  },
  toProfile(){
    wx.navigateTo({
      url: '/pages/profile/index',
    })
  }

  
  
})
