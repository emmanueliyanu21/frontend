import { useState } from 'react';

import Button from "../../../components/Button/Index";

type blogProps = {
    header: string;
    text: string;
    data: {
        image: string;
        text: string;
        date: string;
        details: string;
        imageMain: string;
        user: string;
    }[];
    main: {
        header: string;
        text: string;
    };
}

const Blog = ({header, text, data, main}: blogProps): JSX.Element => {

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
  
    const handleEmailChange = (event: any) => {
      setEmail(event.target.value);
    };
  
    const handleValidationClick = () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValidEmail(emailPattern.test(email));
      if(isValidEmail === true){
        setEmail('')
      }
    };

  return (
    <div className='AppWrapper'>
      <section className="blog container">
        <h6>{header}</h6>
        <p>{text}</p>
        <div className="blog_articles">
          {data.map((item, index) => (
            <article key={index}>
              <img src={item?.image} alt="blog1" />
              <span>
                <p>{item?.text}</p>
                <p>{item?.date}</p>
              </span>
              <p>{item?.details}</p>
              <span>
                <img src={item?.imageMain} alt="harry" />
                <p>{item?.user}</p> 
              </span>
            </article>
          ))}
        </div>
        <Button buttonText="Load more" />
      </section>
      <section className="email container">
        <h1>{main?.header}</h1>
        <div className="email_form">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={handleEmailChange}
          />
          <button onClick={handleValidationClick}>{main?.text}</button>
          {isValidEmail ? null : <p>Please enter a valid email address.</p>}
        </div>
      </section>
    </div>
  );
}

export default Blog;
