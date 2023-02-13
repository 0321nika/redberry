import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect} from "react";
import './ThirdPage.css'

export const ThirdPage = () => {
  var name = sessionStorage.getItem("inputValue");
  var surName = sessionStorage.getItem("inputValue1");
  var txtArea = sessionStorage.getItem("text");
  var email = sessionStorage.getItem("email");
  var img = sessionStorage.getItem("image");
  var value = sessionStorage.getItem("value");
  
  const [experience, setExperience] = useState('');

  useEffect(() => {
    const storedValue = sessionStorage.getItem("experience");
    if (storedValue) {
      setExperience(storedValue);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("experience", experience);
  }, [experience]);


  const handleChange = (event) => {
    setExperience(event.target.value);
    if (experience.length > 0){
      document.getElementById("border5").style.border = "1px solid green";
      document.getElementById("icon1green").style.display = "block";
      document.getElementById("icon1").style.display = "none";
      document.getElementById("exp").style.display = "block";
    }else if (experience.length < 2){
      document.getElementById("icon1green").style.display = "none";
      document.getElementById("icon1").style.display = "block";
      document.getElementById("border5").style.border = "1px solid red";
    }
  };



  const [employer, setEmployer] = useState('');

  useEffect(() => {
    const storedValue = sessionStorage.getItem("employer");
    if (storedValue) {
      setEmployer(storedValue);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("employer", employer);
  }, [employer]);


  const handleChange2 = (event) => {
    setEmployer(event.target.value);
    if (employer.length > 0){
      document.getElementById("border4").style.border = "1px solid green";
      document.getElementById("icon4green").style.display = "block";
      document.getElementById("icon4").style.display = "none";
    }else if (employer.length < 2){
      document.getElementById("icon4green").style.display = "none";
      document.getElementById("icon4").style.display = "block";
      document.getElementById("border4").style.border = "1px solid red";
    }
  };


  const [error, setError] = useState("");
  const [date, setDate] = useState('');

  useEffect(() => {
    const storedValue = sessionStorage.getItem("date");
    if (storedValue) {
      setDate(storedValue);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("date", date);
  }, [date]);

  function handleChange4(event) {
    setDate(event.target.value);
    setError("");
  }
  const handleBlur = (event) => {
    const enteredDate = new Date(event.target.value);
    const isValid = !isNaN(enteredDate.getTime());

    if (!isValid) {
      setError("Invalid date format");
    }
  };


  const [dateEnd, setDateEnd] = useState('');

  useEffect(() => {
    const storedValue = sessionStorage.getItem("dateEnd");
    if (storedValue) {
      setDateEnd(storedValue);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("dateEnd", dateEnd);
  }, [dateEnd]);

  function handleChange5(event) {
    setDateEnd(event.target.value);
  }
 


  const [txt, setTxt] = useState('');

  useEffect(() => {
    const storedValue = sessionStorage.getItem("txt");
    if (storedValue) {
      setTxt(storedValue);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("txt", txt);
  }, [txt]);


  function handleChange6(event) {
    setTxt(event.target.value);
    if (txt.length > 0){
      document.getElementById("border2").style.border = "1px solid green";
    }else if (employer.length < 2){
      document.getElementById("border2").style.border = "1px solid red";
    }
  }

    

  const handleButtonClick = () => {
    sessionStorage.clear();
};
const Input = () => {

  return (
    <form id="allInputs">
          <div className='oneInput2'>
              <h2 id='red'>თანამდებობა</h2>
              <div className='d-flex'>
              <input
              className='input1'
                id='border5'
                type="text"
                placeholder={'დეველოპერი,დიზაინერი ა.შ'}
                required
              />
              <img id='icon1green' src='./images/success.png' alt="success"/>
              <img id='icon1' src='./images/error.png' alt="eror"/>
              </div>
              <span>მინიმუმ 2 სიმბოლო</span>
          </div>
          <div className='oneInput2'>
              <h2 id='red4'>დამსაქმებელი</h2>
              <div className='d-flex'>
              <input
                id='border4'
                type="text"
                placeholder={'დამსაქმებელი'}
                required
              />
              <img id='icon4green' src='./images/success.png' alt="success"/>
              <img id='icon4' src='./images/error.png' alt="eror"/>
              </div>
              <span>მინიმუმ 2 სიმბოლო</span>
          </div>
          <div className='d-flex margin'>
          <div className='field'>
              <h2 id='red4'>დაწყების თარიღი</h2>
              <input
                name='startDate'
                className='input6'
                id='border5'
                type="date"
                required
              />
          </div>
          <div className='field'>
              <h2 id='red4'>დამთავრების თარიღი თარიღი</h2>
              <input
                name='endDate'
                className='input6'
                id='border4'
                type="date"
                required
              />
          </div>
          </div>
          <h2 className='aboutme'>აღწერა</h2>
          <textarea 
            className="txtArea"
            id='border2'
            placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'>
            </textarea>
          <hr/>
          </form>

  )
};

const [area1, setArea1] = useState([]);

  const onAddBtnClick1 = event => {
    setArea1(area1.concat(<Input key={area1.length} />));
  };
  return (
    <div className='container'>
      <Link to="/" onChange={handleButtonClick} className='icon'><img className='vector' src='./images/Vector.png' alt='vector'/></Link>
        <div className='form'>
        <div className='heading'>
            <h2>გამოცდილება</h2>
            <span>2/3</span>
          </div>
          
          <div>
          <form id="allInputs">
          <div className='oneInput2'>
              <h2 id='red'>თანამდებობა</h2>
              <div className='d-flex'>
              <input
              className='input1'
                id='border5'
                type="text"
                placeholder={'დეველოპერი,დიზაინერი ა.შ'}
                value = {experience}
                onChange={handleChange}
                required
              />
              <img id='icon1green' src='./images/success.png' alt="success"/>
              <img id='icon1' src='./images/error.png' alt="eror"/>
              </div>
              <span>მინიმუმ 2 სიმბოლო</span>
          </div>
          <div className='oneInput2'>
              <h2 id='red4'>დამსაქმებელი</h2>
              <div className='d-flex'>
              <input
                value={employer}
                onChange={handleChange2}
                id='border4'
                type="text"
                placeholder={'დამსაქმებელი'}
                required
              />
              <img id='icon4green' src='./images/success.png' alt="success"/>
              <img id='icon4' src='./images/error.png' alt="eror"/>
              </div>
              <span>მინიმუმ 2 სიმბოლო</span>
          </div>
          <div className='d-flex margin'>
          <div className='field'>
              <h2 id='red4'>დაწყების თარიღი</h2>
              <input
                name='startDate'
                className='input6'
                id='border5'
                value={date} 
                onChange={handleChange4}
                onBlur={handleBlur} 
                type="date"
                required
              />
               {error && <p>{error}</p>}
          </div>
          <div className='field'>
              <h2 id='red4'>დამთავრების თარიღი თარიღი</h2>
              <input
                name='endDate'
                className='input6'
                id='border4'
                type="date"
                value = {dateEnd}
                onChange={handleChange5}
                required
              />
          </div>
          </div>
          <h2 className='aboutme'>აღწერა</h2>
          <textarea 
            value = {txt}
            onChange={handleChange6} 
            className="txtArea"
            id='border2'
            placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'>
            </textarea>
          <hr/>
          </form>
    </div>
    {area1}
          <div>
          </div>
          <button className='adExperiience'  onClick={onAddBtnClick1}>მეტი გამოცდილების დამატება</button>
          <div className='d-flex'>
            <button className='primarybtn'><Link to="/SecondPage">უკან</Link></button>
            <button className='primarybtn'><Link to="/FourthPage">შემდეგი</Link></button>
          </div>
        </div>
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
          <span id='exp'>გამოცდილება</span>
          <h3 className='expp'> {experience}</h3>
          <div className='date'>
            <h3>{date}</h3>
            <span>-</span>
            <h3>{dateEnd}</h3>
          </div>
          <h2 className='txt'>{txt}</h2>

        </div>
        <div className='logostar'>
          <img src='./images/logostar.png' alt='star'/>
        </div>
        </div>
    </div>
    
  )
}

export default ThirdPage