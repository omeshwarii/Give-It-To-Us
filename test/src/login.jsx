export function Login () {
    return (
        <>
        <div>
        <meta charSet="UTF-8" />
        <title>GITS - Login Page</title>
        <link rel="stylesheet" href="Login_page.css" />
        <div className="box-form">
          <div className="left">
            <div className="overlay">
              <h1>Hello.</h1>
              <p>Welcome to GiveItToUs. Your portal to give away to the poor or give us something to sell for you. Login or Signup to Begin</p>
              <nav>
                <ul>
                  <a href="/gmail"><i className="sin " aria-hidden="true" /> Login with G-Mail</a>
                  <a href="/admin"><i className="sin " aria-hidden="true" /> Admin Login </a>
                  <a href="/seller"><i className="sin" aria-hidden="true" /> Seller Login </a>
                </ul>
              </nav>
            </div>
          </div>
          <div className="right">
            <h5>Login</h5>
            <p>Don't have an account? <a href="Registration_page.html">Create Your Account</a> it takes less than a minute</p>
            <div className="inputs">
              <input type="text" placeholder="user name" />
              <br />
              <input type="password" placeholder="password" />
            </div>
            <br /><br />
            <div className="remember-me--forget-password">
              <label>
                <input type="checkbox" name="item" defaultChecked />
                <span className="text-checkbox">Remember me</span>
              </label>
              <p>forget password?</p>
            </div>
            <br />
            <button>Login</button>
          </div>
        </div>  
      </div>
      </>
      );
    }
  