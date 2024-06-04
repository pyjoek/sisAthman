import '../styles/contacts.css';

const Contacts = () => {
    return (
        <div className="container conts">
            <div className="social">
                <div className="col-sm-5">
                <h3>WhatsApp</h3>
                    <p><a href="https://wa.me/+255769477422">Click here to chat on WhatsApp</a></p>
                </div>
                <hr/>
                <div className="col-sm-5">
                    <h3>Email</h3>
                    <p><a href="mailto:joelnrlson@gmail.com">Send us an Email</a></p>
                </div>
                <hr/>
                <div className="col-sm-5">
                    <h3>Instagram</h3>
                    <p><a href="https://www.instagram.com/afroniatourstz?igsh=NTc4MTIwNjQ2YQ==">Visit our Instagram</a></p>
                </div>
                <hr/>
                <div className="col-sm-5">
                    <h3>Facebook</h3>
                    <p><a href="https://www.facebook.com/profile.php?id=61559525511160&mibextid=rS40aB7S9Ucbxw6v">Visit our Facebook</a></p>
                </div>
                <hr/>
                <div className="col-sm-5">
                    <h3>Twitter</h3>
                    <p><a href="https://twitter.com/anonymous">Follow us on Twitter</a></p>
                </div>
                <hr/>
                <div className="col-sm-5">
                    <h3>Location</h3>
                    <p>Arusha, Tanzania</p>
                </div>
            </div>
            <div className="email">
                <form action="#" method="post">
                    <input type="text" name="email" placeholder="Enter your email" />
                    <textarea name="information" placeholder="Your message here" >

                    </textarea>
                    <button className="btn ii btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts;