import './header.css';
import logout from './image/logout.png';
import logo from './/image/tasks-logo.png'

function Header() {
    return (
      <div>
      <div className="header">
      <span className=''> <img src={logo} alt="logo" width="80" height="80"/></span>
         <span className='logo'>Daily Task <br/>Manager</span>
         <span className='logout'> <img src={logout} alt="logout button" width="50" height="50"/></span>
         <span className='username'>Hi,username !!</span>
      </div>
      </div>
    );
  }
  export default Header
  