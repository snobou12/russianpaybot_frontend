import classNames from 'classnames';
import React,{FC} from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import {FiCopy} from "react-icons/fi";
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside';
import { toast } from "react-toastify";

import "./APModalLongData.scss";


type Props ={
	showModal: boolean;
	handleChangeShowModal: (bool: boolean) => void;
    varId:string;
    modalTitle:string;
}
const APModalLongData:FC<Props>=({showModal,handleChangeShowModal,modalTitle,varId})=> {
	const modalRef = React.useRef(null);
  const handleClickCopy=()=>{
    navigator.clipboard.writeText(varId);
    toast.success("Скопировано");
  }
	useOnClickOutside(modalRef, () => handleChangeShowModal(false));
  return (
    <>
    {showModal &&
    <div className={classNames("ap__long_data-modal",{
      "ap__long_data-modal--show":showModal
      })}>
        <div ref={modalRef} className="ap__long_data-modal--block">
            <h2>{modalTitle}</h2>
            <span onClick={handleClickCopy} className='app__long_data-modal__var_id'>{varId}  <FiCopy /></span>
           
            <AiOutlineClose
							className="ap__long_data-modal--close"
							onClick={() => handleChangeShowModal(false)}
						/>
        </div>
    </div>
}
    </>
  )
}

export default APModalLongData