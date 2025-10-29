function Contact(props){
    return(
        <article className="contact-card">
            <img src={props.img} alt="contact image" />
            <h3>{props.name}</h3>
            <div className="contact-info">
                <img src="../images/phone.png" alt="phone icon" />
                <p>{props.phone}</p>
            </div>
            <div className="contact-info">
                <img src="../images/email.png" alt="email icon" />
                <p>{props.email}</p>
            </div>
        </article>
    )
}

export default Contact