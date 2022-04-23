/// <reference types="../global" />
import axios from 'axios';

const qqInfoApi = 'https://api.uomg.com/api/qq.info'; // api: https://api.uomg.com/doc-qq.info.html

interface response extends QQUser {
	code: number;
	msg: string;
}
export async function getQQUsers(qq: string): Promise<response>  {
	// TODO status
	const { data } =  await axios.get(`${qqInfoApi}?qq=${qq}`, { timeout: 2000 });
	return data;
}

export function debounce(fn: Function, wait: number) {
	let timer: NodeJS.Timeout;
	return function (this: any, ...args: any[]) {
		clearTimeout(timer);
		const context = this;
		timer = setTimeout(() => {
				fn.apply(context, args);
		}, wait);
	}
}