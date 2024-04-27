import React from 'react'

const Button = ({ type, content, action, disable }) => {
  return (
    <button type={type ? type : ''} disable={disable ? "true" : "false"} onClick={action ? action : action} className="btn m-2 btn-primary w-20">
        {!disable && content}
        {disable && <p className='loading loading-spinner bg-blue-600'></p>}
    </button>
  )
}

export default Button