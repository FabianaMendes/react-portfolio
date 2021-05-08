import './style.css';

export default function SkillBar(props) {
    return(
        <div className="skillbar-container">
            <p>{props.name}</p>
            <div className="skillbar">
                <div className="skill" id={`p`+props.size}>
                    <p>{props.size}%</p>
                </div>
            </div>
        </div>
    );
}