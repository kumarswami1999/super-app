import React, {useState} from 'react';
import bgImage from "../../assets/image 13.png";
import styles from "../registration/Registration.module.css"

const Registration = () => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [consent, setConsent] = useState(false);

const handleSubmit = () => {
  if(!name || !username || !email || !mobile) {
  return alert("Please fill all the fields");
  }
  console.log({name, username, email, mobile, consent});
}

  return (
    <div className={styles.page}>
      <div  className={styles.left}>
        <div className={styles.leftHeader}>
          <h1 className={styles.h1}>
          Discover new things on <br></br> SuperApp
          </h1>
        </div>
        <div>
          <img src={bgImage} className={styles.bgImage} alt='Registration'/>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightHeader}>
          <h2>Super App</h2>
          <h4>Create your new account</h4>
        </div>
        <div className={styles.form}>
          <div className="form-group">
            <input 
            type='text' 
            placeholder='Name' 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            /><br></br>
            <input 
            type='text' 
            placeholder='Username' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            /><br></br>
            <input 
            type='email' 
            placeholder='Email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            /><br></br>
            <input 
            type='tel' 
            placeholder='Mobile' 
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)}
            /><br></br>
            <div>
              <input 
              type='checkbox' 
              value={consent} 
              onChange={(e) => setConsent(e.target.checked)}
            />
              <label htmlFor="" >Share my registration data with superapp</label>
            </div>
            <button onClick={handleSubmit}>SIGN UP</button>
          </div> 
        </div>
        <div className={styles.footer}>
          <p>
            By clicking to signup. You agree to Superapp{" "}
            <span>terms and conditions of Use</span>
          </p>
          <p>
            To learn more about how superapp collects, uses, shares and protects your personal data 
            please head superapp{" "}<span>privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};


export default Registration;