function Contact({img, name, phone, email}){
    return(
        <article className="contact-card">
            <img src={img} alt="contact image" />
            <h3>{name}</h3>
            <div className="contact-info">
                <img src="../images/phone.png" alt="phone icon" />
                <p>{phone}</p>
            </div>
            <div className="contact-info">
                <img src="../images/email.png" alt="email icon" />
                <p>{email}</p>
            </div>
        </article>
    )
}

export default Contact