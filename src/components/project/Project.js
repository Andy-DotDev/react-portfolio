import "./style.css"

const Project = ({title, img}) => { 
    return ( 
        <li className="project">
              <a href="./project-page.html">
                <img
                  src={img}
                  alt= {title}
                  className="project__image"
                />
              </a>

              <h3 className="project__title">{title}</h3>
            </li>
     );
}
 
export default Project;