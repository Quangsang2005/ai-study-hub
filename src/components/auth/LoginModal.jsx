import { useState } from "react"
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleLogin = () => {
    if(!email.includes('@')){
      setEmailError('Email is not valid (missing @)')
      return;
    }
    setEmailError('');
    alert(`Log in with email: ${email}`)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">AI Study Hub</h1>
        <Input
          label="Email"
          type="email"
          placeholder="student@fpt.edu.vn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          errorMessage={emailError}
          required
        />
          <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button variant="primary" onClick={handleLogin} className="w-full mt-4">
          Login
        </Button>
         <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account yet? <a href="#" className="text-blue-600">register</a>
        </p>
      </div>
    </div>  
  );
};
export default LoginPage;