import React from 'react'
import {Link} from 'react-router-dom';
import { useState, useEffect} from 'react';
import  axios  from 'axios';
import './FourthPage.css'



function FourthPage () {

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

  const [posts,setPosts] = useState ([]);
  useEffect (() =>{
    axios.get("https://resume.redberryinternship.ge/api/degrees")
    .then(res =>{
      setPosts(res.data)
    })
  },[])
 




  const [education, setEducation] = useState('');

  useEffect(() => {
    const storedValue = sessionStorage.getItem("education");
    if (storedValue) {
      setEducation(storedValue);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("education", education);
  }, [education]);


  const handleChange = (event) => {
    setEducation(event.target.value);
    if (education.length > 0){
      document.getElementById("border").style.border = "1px solid green";
      document.getElementById("icon1green").style.display = "block";
      document.getElementById("icon").style.display = "none";
      document.getElementById("edu").style.display = "block";
    }else if (experience.length < 2){
      document.getElementById("icon1green").style.display = "none";
      document.getElementById("icon").style.display = "block";
      document.getElementById("border").style.border = "1px solid red";
    }
  };

  const handleButtonClick = () => {
    sessionStorage.clear();
};
  
  
    return (
      <div className='container'>
        <Link to="/" className='icon'  onChange={handleButtonClick}><img className='vector' src='./images/Vector.png' alt='vector'/></Link>
          <div className='form'>
          <div className='heading'>
              <h2>სასწავლებელი</h2>
              <span>3/3</span>
            </div>
            <form id="allInputs">
            <div className='oneInput2'>
                <h2 id='red'>სასწავლებელი</h2>
                <div className='d-flex'>
                <input
                className='input6'
                  value={education}
                  onChange={handleChange}
                  id='border'
                  type="text"
                  placeholder={'სასწავლებელი'}
                  required
                />
                <img id='icon1green' src='./images/success.png' alt="success"/>
                <img id='icon' src='./images/error.png' alt="eror"/>
                </div>
                <span>მინიმუმ 2 სიმბოლო</span>
            </div>
            <div className='d-flex margin'>
            <div className='field'>
                <h2 id='red4'>ხარისხი</h2>
                <select>
                  {posts.map(post => (
                      <option  key={post.id}>
                          {post.title}
                      </option>
                      ))}
                </select>
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
            <textarea name='description' className="txtArea input4" id='border2' placeholder='განათლების აღწერა '></textarea>
            <hr/>
            </form>
            <div>
            </div>
            <button className='adExperiience'>სხვა სასწავლებლის დამატება</button>
            <div className='d-flex'>
            <button className='primarybtn'><Link to="/ThirdPage">უკან</Link></button>
            <button className='primarybtn'><Link to="/FifthPage">დასრულება</Link></button>
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
          <span>გამოცდილება</span>
          <h3 className='expp'> {experience}</h3>
          <div className='date'>
            <h3>{date}</h3>
            <span>-</span>
            <h3>{dateEnd}</h3>
          </div>
          <h2 className='txt'>{txt}</h2>

        </div>
        <div className='cv2'>
          <hr/>
          <span  id='edu'>განათლება</span>
          <h3 className='edu'>{education}</h3>
          
        </div>
        </div>
      </div>
    )
  }
  
  export default FourthPage