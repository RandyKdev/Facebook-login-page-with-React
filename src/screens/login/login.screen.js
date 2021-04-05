import './login.screen.css';

function LoginScreen() {
    return (
        <div id="full-screen">
            <div id="enclosing-components">
                <div id="company-headline">
                    <div id="company-name">facebook</div>
                    <div id="company-login-slogan">Connect with friends and the world around you on Facebook.</div>
                </div>
                <div id="login-container">
                    <div id="form-container">
                       <div className="input-field-container">
                            <input type="email" placeholder="Email or Phone Number" />
                       </div>
                       <div className="input-field-container">
                            <input type="password" placeholder="Password" />
                       </div>
                       <div className="btn link" id="login-btn">
                           Log In
                       </div>
                       <div className="link" id="forgot-password">
                           Forgot Password?
                       </div>
                       <hr />
                       <div id="create-btn-container">
                            <div className="btn link" id="create-btn">
                                Create New Account
                            </div>
                       </div>
                     </div>
                     <div id="create-a-page-section">
                         <span className="link" id="create-a-page-link">Create a Page</span>
                         <span> for a celebrity, band or business.</span>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;