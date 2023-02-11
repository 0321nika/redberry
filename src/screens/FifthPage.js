import React from 'react'
import './FifthPage.css'

const fifthPage = () => {
    var name = sessionStorage.getItem("inputValue");
    var surName = sessionStorage.getItem("inputValue1");
    var txtArea = sessionStorage.getItem("text");
    var email = sessionStorage.getItem("email");
    var img = sessionStorage.getItem("image");
    var experience = sessionStorage.getItem("experience");
    var date = sessionStorage.getItem("date");
    var dateEnd = sessionStorage.getItem("dateEnd");
    var txt = sessionStorage.getItem("txt");
    var value = sessionStorage.getItem("value");
  
  return (
    <div className='a4'>
        <div className='cv'>
          <div className='textSection'>
            <div>
            <h2>{name}</h2>
            <h2>{surName}</h2>
            <div className='contact'><img  src='./images/email.png' alt=''/>{email}</div>
            <div className='num'><img src='./images/phone.png' alt=''/>{value}</div>
            <h3 className='aboutMe'>ჩემ შესახებ</h3>
            <span className='inputText'>{txtArea}</span>
            </div>
            <div className='imgSection'>
          {img && <img src={img} alt="Uploaded" className='cvImg'/>}
        </div>
          </div>
        <div className='cv1'>
          <hr/>
          <span>გამოცდილება</span>
          <h3 className='expp'> {experience}</h3>
          <div className='date'>
            <h3>{date}</h3>
            <span>-</span>
            <h3>{dateEnd}</h3>
          </div>
          <h2 className='txt'>{txt}</h2>

        </div>
        </div>
    </div>
  )
}

export default fifthPage