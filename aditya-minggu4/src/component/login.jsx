import React from 'react';
import './login.css';

const LoginForm = () => {
    return (
     <div class="kotak_login">
     <div class="judul">

       <p class="tulisan_login">Tugas Pertemuan Ketiga</p>

       <div>
         <form>
        <label>Username</label>
        <input type="text" name="username" class="form_login" placeholder="Username atau email .."/>
        <label>Password</label>
		    <input type="text" name="password" class="form_login" placeholder="Password .."/>

        <input type="submit" class="tombol_login" value="LOGIN"></input>

        <input type="checkbox"/>Remember Me

		    <br/>
        <input type="submit" class="tombol_cancel" value="CANCEL"></input>
        </form>
       </div>
     </div>
       

        
     </div>
  );
};

export default LoginForm;