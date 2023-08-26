import { Button } from "../../../components/Button/Button";
import { blog } from "../static-data";

function Blog() {
  return (
    <main>
      <section className="blog container">
        <h6>{blog?.header}</h6>
        <p>{blog?.text}</p>
        <div className="blog_articles">
          {blog?.data.map((item, index) => (
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
        <h1>{blog?.main?.header}</h1>
        <div className="email_form">
          <input type="text" placeholder="Your email address" />
          <Button buttonText={blog?.main?.text}/>
        </div>
      </section>
    </main>
  );
}

export { Blog };
