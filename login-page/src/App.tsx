import { useState } from 'react'
import './App.css'

function App() {
  const [userType, setUserType] = useState<'Student' | 'University'>('Student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', { userType, email, password })
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="app-title">Kallisto</h1>
        <p className="subtitle">Sign in to your account</p>
        
        <div className="user-type-selector">
          <button
            className={`selector-option ${userType === 'Student' ? 'active' : ''}`}
            onClick={() => setUserType('Student')}
          >
            Student
          </button>
          <button
            className={`selector-option ${userType === 'University' ? 'active' : ''}`}
            onClick={() => setUserType('University')}
          >
            University
          </button>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="........"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>

        <p className="sign-up-link">
          Don't have an account? <a href="#" className="sign-up-text">Sign up</a>
        </p>

        <div className="divider"></div>

        <p className="terms-text">
          By clicking "Sign In", you agree to our terms of service.
        </p>
      </div>

      <button className="help-icon" aria-label="Help">
        ?
      </button>
    </div>
  )
}

export default App
