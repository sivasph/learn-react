import Footer from "./Footer";
import NavBar from "./NavBar";

function About() {
    return (
        <>
        <NavBar />
        <div className="main">
        <div className="about">
            <h2 className="h1">About Movies Zone</h2>
            <p className="p">Movies Zone is your go-to platform for discovering and exploring a wide range of movies. Whether you're a fan of action, drama, comedy, or any other genre, we've got something for everyone. Our mission is to provide movie enthusiasts with an easy-to-use interface to find information about their favorite films, read reviews, and stay updated on the latest releases.</p>
            <p className="p">Thank you for visiting Movies Zone. We hope you enjoy your experience!</p>
        </div>
        </div>
        <Footer />

        </>
    );
}

export default About;