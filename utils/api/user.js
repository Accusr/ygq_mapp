import {request} from '../request'
export function login(){
	return request('user/wxLogin')
}