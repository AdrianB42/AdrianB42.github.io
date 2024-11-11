import { Button } from "react-bootstrap";

function Desk({ width, height, x, y, src, onClick }) {
    return (
        <Button
            onClick={onClick} // Trigger click event to show panel
            style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${src})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                width: `${width}px`,
                height: `${height}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `${y}px`,
                left: `${x}px`
            }}
        ></Button>
    );
}

export default Desk;
