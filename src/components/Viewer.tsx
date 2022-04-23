/// <reference types="../../global" />

import React from 'react';
import ErrorView from './ErrorView'
import QQViewer from './QQViewer'
import Loading from './Loading'
interface ViewerProps {
  data: QQUser;
  errorMsg: string;
  fetching: boolean;
}
const Viewer: React.FC<ViewerProps> = ({ data, errorMsg, fetching }) => 
	<div>
		{
			fetching ? 
				<Loading /> 
				:
				(
					errorMsg ? 
						<ErrorView errorMsg={errorMsg} /> 
						:
						<QQViewer data={data} />
				)
		}
	</div>

export default Viewer;
