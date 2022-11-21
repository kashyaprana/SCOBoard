import "./navbar.scss"
import InfoIcon from '@mui/icons-material/Info';

const Navbar = () => {
  return (
    <div className = 'navbar'>
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="About">
                About
            <InfoIcon/>
            </div>
        </div>
    </div>
  )
}

export default Navbar