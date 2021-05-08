import './style.css';

export default function Card(props) {
    return(
        <div className="card-container">
            <h3>{props.position}</h3>
            <h4>{props.company}</h4>
            <h5>{props.time}</h5>
            <p>{props.description}</p>
        </div>
    );
}