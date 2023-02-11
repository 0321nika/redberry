import React from 'react'
import { Link } from 'react-router-dom'
import './SecondPage.css'
import { useState, useEffect } from "react";

export const SecondPage = () => {
  //local storage input1
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    const storedValue = sessionStorage.getItem("inputValue");
    if (storedValue) {
      setInputValue(storedValue);
    }
  }, []);
  useEffect(() => {
    sessionStorage.setItem("inputValue", inputValue);
  }, [inputValue]);
  const handleInputChange = event => {
    const { value } = event.target;
    setInputValue(value);
    const georgianLettersRegEx = /[\u10A0-\u10FF]/;
    if (value.match(georgianLettersRegEx) && value.length > 1) {
      document.getElementById("border").style.border = "1px solid green";
      document.getElementById("red").style.color = "black";
      document.getElementById("icon").style.display = "none";
      document.getElementById("icon1green").style.display = "block";
    } else {
      document.getElementById("border").style.border = "1px solid red";
      document.getElementById("red").style.color = "red";
      document.getElementById("icon").style.display = "block";
      document.getElementById("icon1green").style.display = "none";
      
    }
  };


  //localstorage input2
  const [inputValue1, setInputValue1] = useState('');

  useEffect(() => {
    const storedValue = sessionStorage.getItem("inputValue1");
    if (storedValue) {
      setInputValue1(storedValue);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("inputValue1", inputValue1);
  }, [inputValue1]);

  const handleInputChange1 = event => {
    const { value } = event.target;
    setInputValue1(value);

    const georgianLettersRegEx = /[\u10A0-\u10FF]/;
    if (value.match(georgianLettersRegEx) && value.length > 1) {
      document.getElementById("border1").style.border = "1px solid green";
      document.getElementById("red1").style.color = "black";
      document.getElementById("icon1").style.display = "none";
      document.getElementById("icon2green").style.display = "block";
    } else {
      document.getElementById("border1").style.border = "1px solid red";
      document.getElementById("red1").style.color = "red";
      document.getElementById("icon1").style.display = "block";
      document.getElementById("icon2green").style.display = "none";
    }
  };



  const [text, setText] = useState('');

  useEffect(() => {
    const storedValue = sessionStorage.getItem("text");
    if (storedValue) {
      setText(storedValue);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("text", text);
  }, [text]);


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

  useEffect(() => {
    const storedValue = sessionStorage.getItem("email");
    if (storedValue) {
      setEmail(storedValue);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("email", email);
  }, [email]);


  const handleChange1 = (event) => {
    setEmail(event.target.value);
    if (event.target.value.endsWith('@redberry.ge')) {
      document.getElementById("border3").style.border = "1px solid green";
      document.getElementById("red3").style.color = "black";
      document.getElementById("icon3").style.display = "none";
      document.getElementById("icon3green").style.display = "block";
      return false
    }else if(email.length > -1){
      document.getElementById("email").style.display = "block";
      document.getElementById("icon3green").style.display = "none";
    }else {
      document.getElementById("border3").style.border = "1px solid red";
      document.getElementById("red3").style.color = "red";
      document.getElementById("icon3").style.display = "block";
      document.getElementById("icon3green").style.display = "none";
    }
  };

  const [image, setImage] = useState("");


  useEffect(() => {
    const storedValue = sessionStorage.getItem("image");
    if (storedValue) {
      setImage(storedValue);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("image", image);
  }, [image]);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const [value, setValue] = useState('');

  useEffect(() => {
    const storedValue = sessionStorage.getItem("value");
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("value", value);
  }, [value]);


  const handleChange3 = (event) => {

    const { value } = event.target;
    setValue(value);

    if (!/^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/.test(value)) {
      document.getElementById("border4").style.border = "1px solid red";
      document.getElementById("red4").style.color = "red";
      document.getElementById("icon4").style.display = "block";
      document.getElementById("icon4green").style.display = "none";
    }
     else {
      document.getElementById("border4").style.border = "1px solid green";
      document.getElementById("red4").style.color = "black";
      document.getElementById("icon4").style.display = "none";
      document.getElementById("icon4green").style.display = "block";
    }

    if (value.length > 0 ){
      document.getElementById("num").style.display = "block";
    }else{
      document.getElementById("num").style.display = "num";
    }

  };
    const handleButtonClick = () => {
      sessionStorage.clear();
  };



  return (
    <div className='container'>
      <Link to="/" className='icon' onClick={handleButtonClick}><img className='vector' src='./images/Vector.png' alt='vector'/></Link>
        <form className='form'>
          <div className='heading'>
            <h2>პირადი ინფო</h2>
            <span>1/3</span>
          </div>
          <div className='body'>
            <div className='oneInput'>
              <h2 id='red'>სახელი</h2>
              <div className='d-flex'>
                <input
                  id='border'
                  type="text"
                  placeholder={'ანზორ'}
                  onChange={handleInputChange} 
                  value={inputValue}
                  required
                />
                <img id='icon1green' src='./images/success.png' alt="success"/>
                <img id='icon' src='./images/error.png' alt="eror"/>
              </div>
              <span>მინიმუმ 2 ასო,ქართული ასოები</span>
            </div>
            <div className='oneInput'>
              <h2 id='red1'>გვარი</h2>
              <div className='d-flex'>
                <input
                 className='input2'
                  id='border1'
                  type="text"
                  value={inputValue1}
                  onChange={handleInputChange1}
                  placeholder={'მუმლაძე'}
                  required
                />
                <img id='icon2green' src='./images/success.png' alt="success"/>
                <img id='icon1' src='./images/error.png' alt="eror"/>
              </div>
              <span>მინიმუმ 2 ასო,ქართული ასოები</span>
            </div>
          </div>
          <h2 className='title'>პირადი ფოტოს ატვირთვა</h2>
          <input className='input3' id='file' type="file" onChange={handleImageChange} required></input>
          <label className='file' htmlFor="file" required>ატვირთვა</label>
          <h2 className='aboutme'>ჩემ შესახებ (არასავალდებულო)</h2>
          <textarea  value={text}
                onChange={handleChange} className="txtArea input4" id='border2' placeholder='ზოგადი ინფო შენს შესახებ'></textarea>
          <div className='oneInput1'>
              <h2 id='red3'>ელ.ფოსტა</h2>
              <div className='d-flex'>
                <input
                className='input5'
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
              <h2 id='red4'>მობილურის ნომერი</h2>
              <div className='d-flex'>
              <input
              className='input6'
                id='border4'
                type="text"
                placeholder={'+995 551 12 34 56'}
                value={value}
                onChange={handleChange3}
                required
              />
              <img id='icon4green' src='./images/success.png' alt="success"/>
              <img id='icon4' src='./images/error.png' alt="eror"/>
              </div>
              <span>უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს</span>
            </div>
            <div className='btn_link'>
            <button type='submit' className='primarybtn'>
                <Link to="/ThirdPage">შემდეგი</Link>
            </button>
            </div>
        </form>
        <div className='cv'>
          <div className='textSection'>
            <div>
            <h2>{inputValue}</h2>
            <h2>{inputValue1}</h2>
            <div className='contact'><img id='email' src='./images/email.png' alt=''/>{email}</div>
            <div className='num'><img id='num' src='./images/phone.png' alt=''/>{value}</div>
            <h3 className='aboutMe' id='d-block'>ჩემ შესახებ</h3>
            <span className='inputText'>{text}</span>
            </div>
            <div className='imgSection'>
          {image && <img src={image} alt="Uploaded" className='cvImg'/>}
          </div>
          </div>
        </div>
      </div> 
  )
}
