import "./App.css";
import Logo from "./assets/sovereignunity.svg";

function App() {
    return (
        <>
            <div class="above-fold">
                <h1>STOP</h1>
            </div>
            <div class="below-fold">
                <div class="below-fold-text">
                    <h2>A sovereign vow to unity, harmony, and the betterment of all.</h2>
                </div>
                <footer class="site-footer">
                    <img class="site-logo" src={Logo} width="250px" />
                    <nav class="site-navigation">
                        <a href="#">About</a>
                        <a href="#">Vow</a>
                        <a href="#">Contact</a>
                    </nav>
                </footer>
            </div>
        </>
    );
}

export default App;
