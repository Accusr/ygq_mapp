// components/poptip/index.js
Component({
	properties:{
		top:{
			type: String,
			value: '100rpx'
		}
	},
	data: {
		msg:''
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		error(msg){
			this.setData({msg})

		},

		close(){
			this.setData({
				msg: ''
			})
		}
	}
})
