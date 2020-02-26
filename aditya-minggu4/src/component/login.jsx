import React from 'react';
import './login.css';

const LoginForm = () => {
    return (
    <div className="home">
     <div class="judul">
       <h2>Form Login</h2>
      <div class="kotak_login">
       <p><h1>Tugas Pertemuan</h1></p>
      <p><h1>Ketiga</h1></p>
         <form>
        <label>Username</label>
        <input type="text" name="username" class="form_login" placeholder="Username atau email .."/>
        <br></br>
        <label>Password</label>
		    <input type="text" name="password" class="form_login" placeholder="Password .."/>

        <input type="submit" class="tombol_login" value="LOGIN"></input>
        <br></br>
          <input type="checkbox"/>Remember Me
          <br></br>
        

		    <br/>
        <input type="submit" class="tombol_cancel" value="CANCEL"></input>
        </form>
       </div>
     </div>
</div>
        
  );
};

export default LoginForm;