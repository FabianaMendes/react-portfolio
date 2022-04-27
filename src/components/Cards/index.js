import './style.css';

export default function Card({ position, company, time, description }) {
    return(
        <div className="card-container">
            <h3>{position}</h3>
            <h4>{company}</h4>
            <h5>{time}</h5>
            <p>{description}</p>
        </div>
    );
}