import Carousel from "react-bootstrap/Carousel";

const SingleProject = (props) => {
  const project = props.proj;
  return (
    <section className="project-card">
      <h2>
        {project.name} - #{project.type}
      </h2>
      <div className="details">
        {project.description}
        <a href={project.link}>Link</a>
        <ul>
          {project.tags
            ? project.tags.map((tag, index) => <li key={index}>{tag}</li>)
            : null}
        </ul>
        <Carousel>
          {project.images
          ? project.images.map((img, index) => 
          <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={img}
            alt="First slide"
          />
        </Carousel.Item>)
          : null}
        </Carousel>
        {/*project.images
          ? project.images.map((img, index) => <img src={img} key={index} />)
        : null*/}
      </div>
    </section>
  );
};

export default SingleProject;
