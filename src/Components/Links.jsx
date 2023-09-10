import {Link} from 'react-router-dom';
import './Links.css';

const Links = () => {
    return(
        <aside>
            <Link to="/Instagram" className='links' id="insta">
                Instagram
            </Link>
            <Link to="/Facebook" className='links' id="facebk">
                Facebook
            </Link>
            <Link to="./Twitter" className='links' id="tweet">
                Twitter
            </Link>
            <Link to="./Github" className='links' id="git">
                Github
            </Link>
        </aside>
    );
}
export default Links;