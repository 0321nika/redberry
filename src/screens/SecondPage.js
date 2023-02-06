import React from 'react'
import { Link } from 'react-router-dom'
import './SecondPage.css'
import { useState } from "react";

export const SecondPage = () => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    const { value } = event.target;
    setInputValue(value);

    // Check if input contains Georgian letters and input length is greater than 2
    const georgianLettersRegEx = /[\u10A0-\u10FF]/;
    if (value.match(georgianLettersRegEx) && value.length > 1) {
      document.getElementById("border").style.border = "1px solid green";
      document.getElementById("red").style.color = "black";
      document.getElementById("icon").style.display = "none";
    } else {
      document.getElementById("border").style.border = "1px solid red";
      document.getElementById("red").style.color = "red";
      document.getElementById("icon").style.display = "block";
    }
  };
  const [inputValue1, setInputValue1] = useState('');

  const handleInputChange1 = event => {
    const { value } = event.target;
    setInputValue1(value);

    // Check if input contains Georgian letters and input length is greater than 2
    const georgianLettersRegEx = /[\u10A0-\u10FF]/;
    if (value.match(georgianLettersRegEx) && value.length > 1) {
      document.getElementById("border1").style.border = "1px solid green";
      document.getElementById("red1").style.color = "black";
      document.getElementById("icon1").style.display = "none";
    } else {
      document.getElementById("border1").style.border = "1px solid red";
      document.getElementById("red1").style.color = "red";
      document.getElementById("icon1").style.display = "block";
    }
  };


  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
    if (text.length >= 0){
      document.getElementById("border2").style.border = "1px solid green";
      document.getElementById("d-block").style.display = "block";
    }else if (text.length < 0){
      document.getElementById("d-block").style.display = "none";
    }
  };



  const [email, setEmail] = useState('');
  const handleChange1 = (event) => {
    setEmail(event.target.value);
    if (event.target.value.endsWith('@redberry.ge')) {
      document.getElementById("border3").style.border = "1px solid green";
      document.getElementById("red3").style.color = "black";
      document.getElementById("icon3").style.display = "none";
      document.getElementById("icon3green").style.display = "block";
    }else if(email.length > 0){
      document.getElementById("email").style.display = "block";
      document.getElementById("icon3green").style.display = "none";
    }else {
      document.getElementById("border3").style.border = "1px solid red";
      document.getElementById("red3").style.color = "red";
      document.getElementById("icon3").style.display = "block";
      document.getElementById("icon3green").style.display = "none";
    }
  };



  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className='container'>
      <Link to="/" className='icon'><img className='vector' src='./images/Vector.png' alt='vector'/></Link>
        <form className='form'>
          <div className='heading'>
            <h2>პირადი ინფო</h2>
            <span>1/3</span>
          </div>
          <div className='body'>
            <div className='oneInput'>
              <h2 id='red'>სახელი</h2>
              <div>
                <input
                  id='border'
                  type="text"
                  placeholder={'ანზორ'}
                  onChange={handleInputChange} 
                  value={inputValue}
                  required
                />
                <img id='icon' src='./images/error.png' alt="eror"/>
              </div>
              <span>მინიმუმ 2 ასო,ქართული ასოები</span>
            </div>
            <div className='oneInput'>
              <h2 id='red1'>გვარი</h2>
              <div>
                <input
                  id='border1'
                  type="text"
                  value={inputValue1}
                  onChange={handleInputChange1}
                  placeholder={'მუმლაძე'}
                  required
                />
                <img id='icon1' src='./images/error.png' alt="eror"/>
              </div>
              <span>მინიმუმ 2 ასო,ქართული ასოები</span>
            </div>
          </div>
          <h2 className='title'>პირადი ფოტოს ატვირთვა</h2>
          <input id='file' type="file" onChange={handleImageChange}></input>
          <label className='file' htmlFor="file" required>ატვირთვა</label>
          <h2 className='aboutme'>ჩემ შესახებ (არასავალდებულო)</h2>
          <textarea value={text}
                onChange={handleChange} className="txtArea" id='border2' placeholder='ზოგადი ინფო შენს შესახებ'></textarea>
          <label htmlFor="txtArea"></label>
          <div className='oneInput1'>
              <h2 id='red3'>ელ.ფოსტა</h2>
              <div className='d-flex'>
                <input
                  id='border3'
                  type="email"
                  value={email}
                  onChange={handleChange1}
                  placeholder={'anzorr666@redberry.ge'}
                  required
                />
                <img id='icon3green' src='./images/success.png' alt="success"/>
                <img id='icon3' src='./images/error.png' alt="eror"/>
              </div>
              <span>უნდა მთავრდებოდეს @redberry.ge-თი</span>
            </div>
            <div className='oneInput2'>
              <h2>მობილურის ნომერი</h2>
              <input
                id='red4'
                type="number"
                placeholder={'+995 551 12 34 56'}
                required
              />
              <span>უნდა აკმაყოფილებდეს ქართული მონილური ნომრის ფორმატს</span>
            </div>
            <div className='btn_link'>
            <button type='submit' className='primarybtn' to="./ThirdPage">შემდეგი</button>
            </div>
        </form>
        <div className='cv'>
          <div className='textSection'>
            <div>
            <h2>{inputValue}</h2>
            <h2>{inputValue1}</h2>
            </div>
            <div className='contact'><img id='email' src='./images/email.png' alt=''/>{email}</div>
            <h3 className='aboutMe' id='d-block'>ჩემ შესახებ</h3>
            <span className='inputText'>{text}</span>
          </div>
          <div className='imgSection'>
          {image && <img src={image} alt="Uploaded" className='cvImg'/>}
          </div>
        </div>
      </div> 
  )
}
