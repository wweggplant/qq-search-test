/// <reference types="../../global" />

import React from 'react';
import { getQQUsers, debounce } from '../utils';
import './style.css'
interface SearchBoxProps {
  setErrorMsg: Function;
  setData: Function;
  setFetching: Function;
}
const SearchBox: React.FC<SearchBoxProps> = ({ setErrorMsg, setData, setFetching }) => {
  // 更新列表
  const fetchQQ = debounce(async (qq: string) => {
    if (!qq) {
      setErrorMsg('');
      return
    }
    setFetching(true);
		try {
			const { code, msg, ...rest} = await getQQUsers(qq);
			if (code !== 1) {
				setErrorMsg?.(msg);
			} else {
				setData?.(rest); // update data
			}
		} catch (error) {
			setErrorMsg('请重试');
		}
    setFetching(false);
  }, 200);

  return (
    <div className="search-bar">
      <span>QQ</span>   <input placeholder='请输入QQ号码' className="search-bar-input" onInput={(e: React.ChangeEvent<HTMLInputElement>) => fetchQQ(e.target.value)} />
    </div>
  );
};

export default SearchBox;
