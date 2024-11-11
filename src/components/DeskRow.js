import React, { useState } from "react";
import Desk from "./Desk";
import Panel from "./Panel";

function DeskRow({ x, y, angle, deskX, deskSrc, deskPanels, width, height }) {
    const [selectedPanel, setSelectedPanel] = useState(null);

    const maxDeskX = Math.max(...deskX);
    const desks = deskX.map((deskXPos, i) => {
        const adjustedDeskXPos = maxDeskX - deskXPos + x;
        const deltaY = (adjustedDeskXPos - x) * Math.tan(angle);

        const handleClick = () => {
            setSelectedPanel(deskPanels[i]);
        };

        return (
            <Desk
                key={i}
                width={width}
                height={height}
                x={adjustedDeskXPos}
                y={y - deltaY}
                src={deskSrc[i]}
                onClick={handleClick}
            />
        );
    });

    return (
        <div style={{ position: "relative" }}>
            {desks}
            {selectedPanel && (
                <div className="panel-overlay" onClick={() => setSelectedPanel(null)}>
                    <Panel
                        header={selectedPanel.header}  // Dynamic header passed here
                        text={selectedPanel.text}      // Dynamic text passed here
                        onClose={() => setSelectedPanel(null)}
                    />
                </div>
            )}
        </div>
    );
}

export default DeskRow;
