function Contact(){
    return(
        <article className="contact-card">
            <img src="../images/cat.jpg" alt="contact image" />
            <h3>Mr. Whiskerson</h3>
            <div className="contact-info">
                <img src="../images/phone.png" alt="phone icon" />
                <p>(509) 3434-3430</p>
            </div>
            <div className="contact-info">
                <img src="../images/email.png" alt="email icon" />
                <p>whiskerson@email.com</p>
            </div>
        </article>
    )
}

export default Contact