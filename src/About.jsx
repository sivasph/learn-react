import Footer from "./Footer";
import NavBar from "./NavBar";

function About() {
    return (
        <>
            <NavBar />
            <div className="main">

                <div className="about">
                    <h2 className="h1">About Movies Zone</h2>
                    <p className="p">Welcome to Movies Zone! We are passionate about movies and dedicated to providing you with the best movie experience possible.</p>
                    <p className="p">🎬 MoviesWorld - About Us

                        Welcome to MoviesWorld – Your Ultimate Destination for Everything Cinema!

                        At MoviesWorld, we're passionate about movies. Whether you're a casual viewer, a film buff, or an aspiring critic, we've built this platform to bring you closer to the magic of cinema. From timeless classics to the latest blockbusters, indie gems to international masterpieces, MoviesWorld is your go-to hub for discovering, discussing, and celebrating films of all genres.</p>
                    <p className="p">🌟 Our Mission

                        Our mission is simple:
                        To connect movie lovers across the globe and provide a trusted space for film discovery, reviews, news, and community.

                        We aim to make MoviesWorld a platform where:

                        You can explore thousands of movie titles with detailed information.

                        You can read and write honest reviews.

                        You stay updated with the latest in the film industry.

                        You connect with other fans and share your opinions.</p>
                </div>
            </div>
            <Footer />

        </>
    );
}

export default About;