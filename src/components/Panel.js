import './Panel.css';

function Panel({ header, text, onClose }) {
    return (
        <div className="panel" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={onClose}>✖</button>
            <header>{header}</header>
            <p>{text}</p>
        </div>
    );
}

export default Panel;
