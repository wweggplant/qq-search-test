/// <reference types="../../global" />
import React from 'react';
import './style.css'
const DEFAULT_AVATAR = 'https://q2.qlogo.cn/headimg_dl?spec=100&dst_uin=1231341311';
interface ViewProps {
  data: QQUser;
}
const Viewer: React.FC<ViewProps> = ({ data }) => 
	data?.qq ? 
		<div className="qq-view">
			<img className="user-avatar" src={data?.qlogo || DEFAULT_AVATAR} alt="头像" />
			<div className="user-info">
				<div className='user-name'>{data?.name}</div>
				<div className='user-qq-number'>{data?.qq}</div>
			</div>
		</div> 
		: 
		null;

export default Viewer;
