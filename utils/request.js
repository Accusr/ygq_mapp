const code = {

}

const option = {
	url : 'http://yueqiu.utools.club/'
}

export async function request(url,...arg){

		option.url += url
		option.header = {
			Authorization:'6666'
		}
		try{
			const res = await wx.request(Object.assign(option, ...arg))
			console.log('返回请求测试',res,Object.assign(option, ...arg))

			return 'steing'
		}catch(e){
			return 'error666'
			console.error('request error')
		}
}