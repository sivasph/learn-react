import { Form } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Contact(){
    return(
        <>
        <Header/>
        <div className="main">
            <h1 className="h1">Contact us</h1>
            <p className="p">We'd love to hear from you. Contact us via any of the options below.</p>
            <br/>
            <h1 className="h1">Office Address</h1>
            <p className="p">Movies Zone Pte. Ltd.</p>
            <p className="p">Canberra, Singapore</p>
            <p className="p">752104</p>
            <p className="p">Phone: +65 80320207</p>
            <br/>
            <h1 className="h1">By form</h1>
        </div>
        <Footer/>
        </>
    );
}

export default Contact;