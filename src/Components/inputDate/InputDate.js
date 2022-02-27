import React from 'react'

function InputDate(params) {
    const {datareserva, handleChange, name, value} = params
    console.log(handleChange, datareserva, name, value, params);
  return (
    <>
        <input name='datareserva' onChange={handleChange} value={datareserva} type="date" id='date' className="border-b text-gray-500 border-gray-400 rounded bg-gray-200 p-4 w-full"/>
    </>
  )
}

export default InputDate;