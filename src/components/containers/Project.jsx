import Carousel from "react-bootstrap/Carousel";
import Badge from 'react-bootstrap/Badge'

const SingleProject = (props) => {
  const project = props.proj;
  return (
    <div className="project-card" >
      <div className="project-card-inner">
      <div className="front">
      <h2>
        {project.name} - #{project.type}
      </h2>
        {project.description} <br/>
        {project.images
          ? <img src={project.images[0]} alt={project.name} />
        : null}
        <div className="tags">
          {project.tags
            ? project.tags.map((tag, index) => <Badge pill key={index}>{tag}</Badge>)
            : null}
        </div>
      </div>
      <div className="back">
        {project.images.length > 1 ?         
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
          </Carousel> : (project.images.length === 1 ? <img src={project.images[0]} alt={project.name}></img> : null)}
        

        {project.link ? <a href={project.link} ><button>{`☆*:.｡.Project Link for ${project.name}.｡.:*☆`}</button></a> : null}
      </div>
      </div>
    </div>
  );
};

export default SingleProject;
