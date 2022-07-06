import React from 'react'

export default function Personal_Information() {
  return (
    <div className='Personal_Information_main_div'>
        <form>
            <label>First Name</label><input type="text" id="f_name" /><br />
            <label>Last Name</label><input type="text" id="l_name" /><br />
            <label>Mobile No</label><input type="number" id="m_number" /><br />
            <label>Land No</label><input type="number" id="L_number" /><br />
            <lable>Gender</lable>
            <select>
                <option value="male">Male</option>
                <option value="Female">Female</option>
            </select>
            <button>submit</button>
        </form>
    </div>
  )
}
