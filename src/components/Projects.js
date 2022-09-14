// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Asset Management</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>Asset Management project is bassically based on how to manage the asset the task that are
                        require for any bussiness.
                        <br></br>
                       Technology used - ASP.NET, ABP Framework,Syncfusion,BlazorUI
                    </p>

                    <a href="https://uniswap.org/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Uniswap/v2-core" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Portfolio</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>Portfolio in which we show all the work that we done in our whole study line from
                        this we can show what achivement that we get.
                        <br></br>
                        Technology used- React,HTML,CSS,JavaScript
                    </p>

                    <a href="https://compound.finance/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/compound-finance/compound-protocol" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>UI/UX(LandingPage)</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>Landing  Page is bassically this is the first and last impression for any website and for
                        any industries because it shows the user inter face that really attractive.
                        <br></br>
                        Technology used- HTML,CSS 
                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;