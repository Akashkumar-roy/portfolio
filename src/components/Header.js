// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Akash Kumar</h1>
                <p>ASP.NET DEVELOPER</p>
                <button className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;