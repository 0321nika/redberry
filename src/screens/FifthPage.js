import React from 'react'
import './FifthPage.css'
import {Link} from 'react-router-dom';


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
    var education = sessionStorage.getItem("education")
    var DateEnd = sessionStorage.getItem ("DateEnd")
    var description = sessionStorage.getItem ("description")

    const handleButtonClick = () => {
      sessionStorage.clear();
  };

  
  return (
    <div className='container'>
      <Link to="/" className='icon' onChange={handleButtonClick}><img className='vector' src='./images/Vector.png' alt='vector'/></Link>
       <div className='a4'>
        <div className='last'>
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
          <h2 className='txtt'>{txt}</h2>
        </div>
        <div className='cv2'>
          <hr/>
          <span>განათლება</span>
          <h3 className='edu'>{education}</h3>
          <h3 className='dateEnd'>{DateEnd}</h3>
          <h3 className='desc'>{description}</h3>
          
          
        </div>
        <div className='logostar'>
          <img src='./images/logostar.png' alt='star'/>
        </div>
        </div>
    </div>

    </div>
   
  )
}

export default fifthPage