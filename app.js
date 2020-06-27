//app.js
import {login} from './utils/api/user'
App({
  onLaunch() {
    try {
      //更新版本
      const _UPM = wx.getUpdateManager()
      _UPM.onUpdateReady(async _=> {
        const confirm_res = await wx.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          cancelText:'稍后',
          confirmText:'立即更新'
        })

       confirm_res.confirm && _UPM.applyUpdate()
      })
      this.login()
    } catch (e) {
      wx.showToast({
        title: '更新失败！',
        icon: "none"
      })
      console.log('index_error', e)
    }
  },
  global: {
    userInfo: null
  },

  async login(){
    try{
      const {code} = await wx.login()
      const _auth = await login({
        code,
      })
    }catch(e){
      console.log('login error',e)
    }
  }
})