import NavBar from "./NavBar";
import Footer from "./Footer";

function Contact() {
    return (
        <>
            <NavBar />
            <div className="main">
                <div className="contact">
                    <h1 className="h1">Contact us</h1>
                    <p className="p">We'd love to hear from you. Contact us via any of the options below.</p>
                    <br />
                    <h1 className="h1">Office Address</h1>
                    <p className="p">Movies Zone Pte. Ltd.</p>
                    <p className="p">Canberra, Singapore</p>
                    <p className="p">752104</p>
                    <p className="p">Phone: +65 80320207</p>
                    <br />
                    <h1 className="h1">By form</h1>
                    <form>
                        <label className="p">
                            Name:
                            <input type="text" name="name" className="search-input" required />
                        </label>
                        <br />
                        <br />
                        <label className="p">
                            Email:
                            <input type="email" name="email" className="search-input" required />
                        </label>
                        <br />
                        <br />
                        <label className="p">
                            Message:
                            <textarea name="message" className="search-input" required></textarea>
                        </label>
                        <br />
                        <br />
                        <div className="button-container">
                            <button type="submit" className="submit-button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;