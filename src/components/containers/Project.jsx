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
        {/*project.images
          ? project.images.map((img, index) => <img src={img} key={index} />)
        : null*/}
        <div>
          {project.tags
            ? project.tags.map((tag, index) => <Badge pill key={index}>{tag}</Badge>)
            : null}
        </div>
      </div>
      <div className="back">
        {project.images.length > 0 ?         
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
          </Carousel> : <></>
        }

        <a href={project.link} ><button>{`☆*:.｡.Project Link for ${project.name}.｡.:*☆`}</button></a>
      </div>
      </div>
    </div>
  );
};

export default SingleProject;
