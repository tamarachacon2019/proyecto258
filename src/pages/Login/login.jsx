import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div>
      <button onClick={() => setIsRegister(false)}>Iniciar sesión</button>
      <button onClick={() => setIsRegister(true)}>Registrarse</button>
      {isRegister ? (
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <input type="password" placeholder="Repite la contraseña" />
          <button type="submit">Registrar</button>
        </form>
      ) : (
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Iniciar sesión</button>
        </form>
      )}
      <div style={{ marginTop: '30px' }}>
        <GoogleLogin
          onSuccess={credentialResponse => {
            // Manejar autenticación exitosa
          }}
          onError={() => {
            // Manejar error
          }}
        />
      </div>
    </div>
  );
};

export default Login;
