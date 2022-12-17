import React,{FC} from 'react'
import "./Searcher.scss";

type Props={
    value:string;
    onChangeValue:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}
const Searcher:FC<Props>=({value,onChangeValue})=> {
  return (
    <div className='ap__users_searcher'>
        <span>Поиск пользователей</span>
        <input type="text" className='inpt' placeholder='Пользователь' value={value} onChange={(e)=>onChangeValue(e)} /> 
        
    </div>
  )
}

export default Searcher