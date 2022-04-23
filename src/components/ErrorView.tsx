import React from 'react';
import './style.css'
interface ErrorViewProps{
    errorMsg: string;
}
const ErrorView: React.FC<ErrorViewProps> = ({ errorMsg }) => <div className='error-view'>{ errorMsg }</div>;

export default ErrorView;