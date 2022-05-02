import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';

const frame_width = window.innerWidth;
const frame_height = window.innerHeight

//console.log(frame)

const Layout = () => (
     <div className="App">
      { frame_width > 500 ?
      <Sidebar />
         :
      <NavBar />
      }
      
      <div className="page" >
        <span className="tags top-tags">&lt;body&gt;</span>

          <Outlet />
       
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
 
)
export default Layout