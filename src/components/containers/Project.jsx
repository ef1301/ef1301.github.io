import Carousel from "react-bootstrap/Carousel";
import Badge from 'react-bootstrap/Badge'

const SingleProject = (props) => {
  const project = props.proj;
  return (
    <section className="project-card">
      <h2>
        {project.name} - #{project.type}
      </h2>
      <div className="details">
        {project.description} <br/>
        <a href={project.link} >{`	☆*:.｡.Project Link for ${project.name}.｡.:*☆`}</a>
        <div>
          {project.tags
            ? project.tags.map((tag, index) => <Badge pill variant="dark" key={index}>{tag}</Badge>)
            : null}
        </div>
        <Carousel>
          {project.images
          ? project.images.map((img, index) => 
          <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={img}
            alt={`${project.name} slide${index}`}
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
