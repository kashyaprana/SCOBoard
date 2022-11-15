import "./widget.scss";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';

const Widget = () => {

    return (
        <div className="widget">
            <div className = "left">
                <span className = "title">USERS</span>
                <span className = "counter">850</span>
                <span className = "link">Seel all users</span>
            </div>
        
        <div className = "right">
            <div className="percentage negative">
               
                <ArrowDropUpIcon/>
                95%
                </div>
            <PersonIcon className = "icon"/>
        </div>
        
        </div>

    )
}

export default Widget