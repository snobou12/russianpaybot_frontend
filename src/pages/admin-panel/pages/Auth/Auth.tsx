import React,{FC} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/redux';
import { login } from '../../../../redux/reducers/apReducer/ActionApCreator';
import "./Auth.scss";
const Auth:FC =()=> {
  const dispatch = useAppDispatch();
  const {admin}=useAppSelector((state)=>state.apReducer);
  const navigate=useNavigate();
  const [loginInput,setLogin]=React.useState<string>("");
  const [passwordInput,setPassword]=React.useState<string>("");

  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    dispatch(login([loginInput,passwordInput]));
  }
  React.useEffect(()=>{
    if(Object.keys(admin).length !== 0){
      navigate("/admin-panel")
    }
  },[admin])
  return (
    <div className='ap__auth'>
      <div className="ap__auth_block">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <label>Авторизация</label>
          <input type="text" className="inpt" value={loginInput} onChange={(e)=>setLogin(e.target.value)} placeholder='Login' />
          <input type="password" className="inpt" value={passwordInput} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
          <button className="btn">Вход</button>
        </form>
      </div>
    </div>
  )
}

export default Auth