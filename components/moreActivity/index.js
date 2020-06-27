// components/moreActivity/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
	
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		visible: false,
		buttons: [
			{
					type: 'default',
					className: '',
					text: '辅助操作',
					value: 0
			},
			{
					type: 'primary',
					className: '',
					text: '主操作',
					value: 1
			}
	]
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		handleClick(e){
			console.log('事件',e)
		},
		popup(){
			this.setData({
				visible: true
			})
		},
		closePop(){
			this.setData({
				visible: false
			})
		}
	}
})
