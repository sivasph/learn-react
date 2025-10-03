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
                        <table>
                            <tbody>
                                <tr>
                                    <td className="p">
                                        <label htmlFor="name">Name:</label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="search-input"
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p">
                                        <label htmlFor="email">Email:</label>
                                    </td>
                                    <td>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="search-input"
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p" style={{ verticalAlign: "top" }}>
                                        <label htmlFor="message">Message:</label>
                                    </td>
                                    <td>
                                        <textarea
                                            name="message"
                                            id="message"
                                            className="search-input"
                                            required
                                            rows="5"
                                            cols="30"
                                        ></textarea>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="2" style={{ textAlign: "center", paddingTop: "1rem" }}>
                                        <button type="submit" className="submit-button">Submit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;