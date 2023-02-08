import React from 'react'
import {Link} from 'react-router-dom'
import { useState} from "react";
import './ThirdPage.css'

export const ThirdPage = () => {


  const [forms, setForms] = useState([
    <form id="allInputs">
          <div className='oneInput2'>
              <h2 id='red'>თანამდებობა</h2>
              <div className='d-flex'>
              <input
              className='input6'
                name='position'
                id='border'
                type="text"
                placeholder={'დეველოპერი,დიზაინერი ა.შ'}
                required
              />
              <img id='icon1green' src='./images/success.png' alt="success"/>
              <img id='icon' src='./images/error.png' alt="eror"/>
              </div>
              <span>მინიმუმ 2 სიმბოლო</span>
          </div>
          <div className='oneInput2'>
              <h2 id='red4'>დამსაქმებელი</h2>
              <div className='d-flex'>
              <input
                name='employer'
                className='input6'
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
                id='border4'
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
          <textarea name='description' className="txtArea input4" id='border2' placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'></textarea>
          <hr/>
          </form>
  ]);


  const handleClick = () => {
    setForms([...forms, forms[0]]);
  };



  return (
    <div className='container'>
      <Link to="/" className='icon'><img className='vector' src='./images/Vector.png' alt='vector'/></Link>
        <div className='form'>
        <div className='heading'>
            <h2>პირადი ინფო</h2>
            <span>2/3</span>
          </div>
          <div>
      {forms.map((form, index) => (
        <div key={index}>{form}</div>
      ))}
      <br />
    </div>
          <div>
          </div>
          <button className='adExperiience' onClick={handleClick}>მეტი გამოცდილების დამატება</button>
          <div className='d-flex'>
            <button className='primarybtn'><Link to="/SecondPage">უკან</Link></button>
            <button className='primarybtn'>შემდეგი</button>
          </div>
        </div>
        <div className='cv'>

        </div>
    </div>
  )
}

export default ThirdPage