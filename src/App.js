import lAB from "../src/components/Assets/LAB.PNG";
import background from "../src/components/Assets/background.png";
import l2 from "./components/Assets/L2.PNG";
import r2 from "./components/Assets/R2.png";
import l from "../src/components/Assets/L.PNG";
import lA from "../src/components/Assets/LA.PNG";
import lBB from "../src/components/Assets/LBB.PNG";
import lCA from "../src/components/Assets/LCA.PNG";
import lD from "../src/components/Assets/LD.PNG";
import lPPB from "../src/components/Assets/LPPB.PNG";
import r from "../src/components/Assets/R.PNG";
import rBBC from "../src/components/Assets/RBBC.PNG";
import rCA from "../src/components/Assets/RCA.PNG";
import rHCD from "../src/components/Assets/RHCD.PNG";
import rHD from "../src/components/Assets/RHD.PNG";
import rPB from "../src/components/Assets/RPB.PNG";
import rPC from "../src/components/Assets/RPC.PNG";
import rTP from "../src/components/Assets/RTP.PNG";
import './App.css';
import DeskRow from "./components/DeskRow";



function App() {
    let calculatedAngle = Math.atan(1/4)
    let leftMargin = window.innerWidth / 3;
    let unit = window.innerWidth / 20;
    return (
        <div style={{backgroundColor: "#000", width: "100vw", height: "100vh"}} >

            <div
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',           // Ensures background covers the div
                    backgroundPosition: 'center',      // Centers the background image within the div
                    backgroundRepeat: 'no-repeat',     // Prevents tiling
                    width: "90vw",
                    height: "100vh",
                    margin: "auto",                    // Centers the div both horizontally and vertically
                    position: "absolute",              // Centers using top/left/bottom/right set to 0
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }}
            ></div>

            <div style={{position: "absolute", top: "0", left: "0"}}>
                <DeskRow
                    x={leftMargin}
                    y={window.innerHeight / 2.1}
                    angle={calculatedAngle}
                    deskX={[0, unit, 3 * unit, 4 * unit]}
                    deskSrc={[l2, r2, l2, r2]}
                    width={window.innerWidth / 10}
                    height={window.innerWidth / 10}
                    deskPanels={[
                        { header: 'GUIDO', text: 'The guidance officer, pronounced "guide-oh," watched over the Apollo Primary Guidance, Navigation, and Control Systems ("PGNCS," pronounced "pings" by some torturous acronym bludgeoning) on both the Command Module and the Lunar Module, and also had responsibility for the Lunar Module\'s backup Abort Guidance System ("AGS," pronounced "aggs"). GUIDO kept tabs on things like the velocity and vector reporting done by the onboard systems, and ensured that where the spacecraft\'s computers thought they were actually reflected reality. During the landing phase of Apollo 11, a faulty checklist procedure resulted in the Lunar Module\'s PGNCS computer becoming overwhelmed with instructions and unable to do all that was being asked of it. The LM\'s master alarm sounded, and GUIDO Steve Bales and his back-room team had to decide whether or not to abort the landing. Within 30 seconds, they were able to determine the cause of the issue and that it was safe to proceed. This is yet another instance where a controller\'s intimate familiarity with spacecraft systems allowed them to quickly find the root cause of a complex issue and save a mission from a premature end.' },
                        { header: 'FDO', text: 'The Flight Dynamics Officer console, abbreviated as "FDO" and pronounced "fido", monitored the vehicle\'s trajectory at all stages of the mission. FDO is notable in that during Apollo, it was the only station other than the flight director which could directly call for a mission abort during launch, using a dedicated set of toggle switches. This heavy responsibility stemmed from FDO\'s role of watching over the vehicle\'s path; deviations from the preplanned launch trajectory could signal potentially catastrophic problems and would require swift and immediate action to make sure the crew was kept alive. Even after launch, FDO\'s role was extremely important, as the Apollo spacecraft\'s trajectory was foremost on everyone\'s mind during all phases of the mission. Going to the Moon wasn\'t simply a matter of pointing the ship at the Moon\'s current position in the sky and firing up the engines; trajectories were delicately calculated loops around the constantly shifting bodies in the heavens, and changing the vehicle\'s path by mere fractions of a degree could mean the difference between a safe splashdown or a violent, crushing death during reentry.' },
                        { header: 'RETRO', text: 'Where BOOSTER was responsible primarily for getting the spacecraft away from earth, RETRO was responsible for getting the craft back. RETRO kept a list of abort options—lists of procedures detailing what to do when things went wrong—during the return phase of the mission, and also kept track of the Apollo Service Module\'s main engine when it performed its burn to break free of lunar orbit and return to Earth.' },
                        { header: 'BOOSTER', text: 'The BOOSTER console was manned by three people during launch, and each person had primary responsibility for one of the massive Saturn V rocket\'s three stages. The BOOSTER controllers were of critical importance during the launch phase of each mission, monitoring the performance of each stage and ensuring that the complex launch vehicle functioned correctly throughout the approximately nine-minute ride to orbit, and then again during the trans-lunar injection phase, where the third stage reignited to send the Apollo spacecraft out of low Earth orbit and onto its trajectory to the Moon. After the maneuver was completed, the console was occupied by mission-specific scientific experiment personnel for the remainder of the flight.' },
                    ]}
                />

                <DeskRow
                    x={leftMargin}
                    y={window.innerHeight / 1.6}
                    angle={calculatedAngle}
                    deskX={[0, unit, 2 * unit, 3 * unit, 5 * unit, 6 * unit]}
                    deskSrc={[lBB, rCA, lCA, rBBC, lA, r2]}
                    width={window.innerWidth / 10}
                    height={window.innerWidth / 10}
                    deskPanels={[
                        { header: 'CONTROL', text: 'Just as TELMU was the LM\'s counterpart to EECOM, the CONTROL position was GNC\'s LM counterpart. CONTROL handled the hardware portions of the LM\'s guidance systems, including its landing radar, attitude thrusters, and ascent and descent rockets, while the LM\'s software and computers were under the purview of GUIDO down in the trench. (The Lunar Module and the Command Module used essentially the same computer with similar software, so one station handling both vehicles made sense on the software side of things). CONTROL is the right-most console on the second row.' },
                        { header: 'TELMU', text: 'TELMU, another tortured acronym standing for "Telemetry, Electrical, and EVA Mobility Unit," was EECOM\'s counterpart for the Lunar Module, watching over the LM\'s life-support and power systems just as EECOM did for the Command Module. The LM had no fuel cells, due to its incredibly tight weight restrictions, and so TELMU had to track the state of the LM\'s batteries during the landing phase of the mission. TELMU played a significant role in the implementation of the plan to use the Apollo 13 LM as a lifeboat, figuring out a way to solve a seemingly unsolvable chicken-and-egg problem of how to power up the LM during the mission\'s outbound coasting phase.' },
                        { header: 'GNC', text: 'Where GUIDO managed the guidance computer and software of the spacecraft, the GNC, aka the the Guidance, Navigation, and Control console was responsible for the nuts and bolts hardware side of keeping Apollo pointed in the right direction. The GNC operator monitored the state of the reaction-control systems and the Service Module\'s main engine, as well as the hardware components of the spacecraft\'s guidance systems.' },
                        { header: 'EECOM', text: 'The EECOM, or the Electrical, Environmental, and Communications controller was one of the most changed stations throughout the history of the MOCR. The "communications" part was removed from EECOM\'s purview after Apollo 10, leaving EECOM tasked with watching over the Command and Service Modules\' electrical and environmental systems. This was a very broad range of responsibility, and when the shuttle program rolled around, the EECOM desk was broken down again into two separate stations. The EECOM, of course, was Sy Liebergot\'s primary console, from which he and the other EECOM operators monitored the generation and distribution of power on the spacecraft, as well as the critical life support systems—both the power-generating fuel cells and the living, breathing crew required oxygen to function, and EECOM tracked that.' },
                        { header: 'CAPCOM', text: 'CAPCOM, or "Capsule Communicator," was the only flight controller allowed to talk directly to the spacecraft\'s crew. This was done both from a resource management perspective, so that all transmissions to and from the spacecraft could be easily tracked for transcription, and also for crew safety, to make sure that the crew received explicit instructions from a single source. Only once in Gemini or Apollo did anyone other than CAPCOM address a crew, and that was during Gemini 4 when Chris Kraft, sitting at the flight director\'s console, instructed space-walking astronaut Ed White to terminate his spacewalk and return to the capsule. Kraft\'s violation of his own system of flight controller rules was due to White skirting at the edges of the mission\'s safety and time constraints in order to exceed the amount of time Soviet cosmonaut Alexey Leonov had spent spacewalking three months earlier. The CAPCOM console was always occupied by an astronaut, in no small part to ensure that the spacecraft\'s crew always heard a friendly, well-known voice over the radio, Additionally, the astronauts brought with them a familiarity with the spacecraft\'s layout and operation and that was very useful, and it helped to have an astronaut to be able to describe things in "astronaut terms" to the crews.' },
                        { header: 'SURGEON', text: 'The SURGEON console, occupied by a medical doctor, had the responsibility of monitoring the health of the crew. His console usually displayed electrocardiogram and electropneumogram data, showing the astronauts\' heart and breathing rates, as well as the output of other sensors attached on and around the astronauts\' bodies. It\'s a well-known bit of conventional wisdom that pilots—and hence astronauts—don\'t like doctors. The reason most often given is that a pilot can come out of a doctor\'s office in one of only two conditions: fine, or grounded. The enmity between the astronaut corps and the flight surgeons tasked with keeping them healthy and alive is quite well documented in popular culture; the craziness suffered by the Mercury astronauts in 1983\'s The Right Stuff isn\'t too far from reality, and the adversarial tone remained throughout Gemini and Apollo. The tendency to hero-worship astronauts means that the folks manning the SURGEON console often got a bad public rap. It was head SURGEON (and later director of Life Sciences at JSC) Chuck Berry\'s recommendation to ground Apollo 13 crew member Ken Mattingly because he might have been exposed to the measles. This led to Jack Swigert\'s assignment to the mission very late in the training process, which greatly upset mission commander Jim Lovell. Flight surgeons, it seemed, were the causes of all sorts of problems for the crews. Sy laughed when he recalled the Apollo-era SURGEON\'s role during missions. "He would show up 20 minutes before a mission, and he knew where the camera was in that corner, and he\'d just stand up and comb his hair." He shook his head. "They were useless." He went on to relate a story that during a Gemini simulation, then-Flight Director Chris Kraft had one of the simulator technicians play a prerecorded electrocardiogram tape of a person undergoing an actual heart attack into the SURGEON console, then while it was playing queried the SURGEON desk as to the crew\'s health. "He said they were looking just fine!" snorted Sy.' }

                    ]}
                />

                <DeskRow
                    x={leftMargin + window.innerWidth / 20}
                    y={window.innerHeight / 1.35}
                    angle={calculatedAngle}
                    deskX={[0, unit, 2.75 * unit, 4.5 * unit, 5.5 * unit]}
                    deskSrc={[rTP, lCA, rHCD, r2, lPPB]}
                    width={window.innerWidth / 10}
                    height={window.innerWidth / 10}
                    deskPanels={[
                        { header: 'NETWORK', text: 'The NETWORK functioned as the interface with the global network of MSFN data collection and transmission stations which served NASA. Not all of the ground stations were wholly reliable, and NETWORK often had his hands full ensuring that Mission Control was getting the data they needed; a downed computer at a site hundreds or thousands of miles away was NETWORK\'s problem to fix, and the controller was expected to keep the rest of Mission Control apprised of when things would be online again in the event of a failure. NETWORK\'s job didn\'t end there—he also had responsibility for data transmission inside the MCC complex, and even functioned as a kind of first-line technical support for the other consoles. "If we had a problem with a display, we\'d talk to him," Sy recalled. "He had a really pressured job."' },
                        { header: 'FAO', text: 'The flight activities officer, FAO, was the timeline manager for the mission. He sat to the right of the flight director and ensured that the preplanned activities for each mission were occurring on schedule. No small amount of spacecraft systems knowledge was necessary, since FAO had to be familiar with the contents of all of the mission checklists and needed to understand the amount of time involved in each step.' },
                        { header: 'FLIGHT', text: 'The flight director, FLIGHT, was the "orchestra leader," as Sy calls it. FLIGHT had ultimate authority to do anything necessary to ensure the crew\'s safety and the mission\'s success, in that order of priority. The concept of a central unimpeachable authority presiding over the mission came directly from an incident during the Mercury program where NASA management overruled Chris Kraft on a decision; during Gemini and Apollo, the only way for NASA management to countermand a flight director\'s orders was to fire him. During launch, the flight director was one of only two consoles (the other being FDO) with the ability to directly request an abort, which would cause an "ABORT REQUEST" light to begin flashing inside the spacecraft, signaling the spacecraft commander to pull the ABORT handle. Depending on how far into the launch the ABORT came, this would cause any number of drastic actions, including the potential firing of the small Launch Escape System solid-fuel rocket attached to the Apollo capsule, which would yank the capsule off of the rocket and fling the crew roughly away to safety. Fortunately, a launch abort during Apollo was never necessary. Other than the "ABORT REQUEST" toggle, FLIGHT\'s console was passive. FLIGHT would monitor displays and communication and coordinate the actions of all of the flight directors in Mission Control and ensure the mission was proceeding according to plan. He also kept detailed documentation of the mission\'s progress in a set of logbooks. FLIGHT kept continual tabs on all of the flight controllers and the crew, and often had to be paying detailed attention to several different things at once. In times of crisis, FLIGHT would gather together the recommendations of his staff of controllers and then decide on what action to take. Another notable feature of FLIGHT\'s console is the event indicator panel above his left screen. This particular panel was hard-wired to show the status of all of the other MOCR flight controller consoles. Most famously, this was used when "going around the horn" before launch or a critical mission event, so that controllers could indicate a "go" if everything was fine or a "no-go," if they saw something anomalous. Sy explained that controllers also used their status indicator panels during a shift change, or when they had to step away from their consoles for a moment. "When we handed over... I would go amber," Sy said, punching the middle button, "and the flight director would say, \'Okay, guys give me an amber when you\'re on the console and give me a green when you\'re ready to brief on what happened the prior shift." The colored panel provided an immediately identifiable visual indication of whether or not the controllers were all at the ready. "He would know," said Sy, "that we were ready to go."' },
                        { header: 'Assistant FLIGHT', text: 'The assistant flight director is located to the left of the flight director. The assistant FLIGHT duplicated the flight director\'s duties, monitoring the mission and supplementing the flight director\'s control. "The Assistant flight Director sat here and did whatever the flight director wanted him to do," joked Sy.' },
                        { header: 'PROCEDURES', text: 'PROCEDURES, or O&P, made sure that controllers "followed all of our procedures when asking for data or communicating with people, all according to our flight control operations handbook," explained Sy. "As an EECOM," he continued, "if I needed a data printout or a voice playback recorded, I would have to fill out a particular form, putting in the GMT times—from, to—and what the subject was, and that would go through him."' },
                    ]}
                />

                <DeskRow
                    x={leftMargin + window.innerWidth / 5.5}
                    y={window.innerHeight / 1.24}
                    angle={calculatedAngle}
                    deskX={[0, unit, 2.75 * unit, 4.5 * unit]}
                    deskSrc={[rHD, lD, rBBC, rTP]}
                    width={window.innerWidth / 10}
                    height={window.innerWidth / 10}
                    deskPanels={[
                        { header: 'DOD', text: 'the DOD console was reserved for a representative from the Department of Defense, usually a general. The Department of Defense\'s presence in a civilian agency seems unusual at first glance, but the military was responsible for coordinating the recovery of the Gemini and Apollo spacecrafts after splashdown. The decommissioned console today sports a really cool red phone.' },
                        { header: 'NASA HQ', text: 'This position acted as a liaison between the Mission Control team and NASA headquarters in Washington, DC. Sy noted that the HQ representative rarely had anything to do, but that there was usually someone there, watching the console.' },
                        { header: 'DFO', text: 'This is the director of flight operations desk. This desk played host to a senior Manned Spacecraft Center director, who functioned as an interface between Mission Control and space center management. During Apollo, this seat was often manned by Chris Kraft.' },
                        { header: 'PAO', text: 'Public relations played a tremendous part in the space program, and the Public Affairs Office had its own console, PAO, at which sat a controller who functioned as the "voice" of mission control to the public. PAO provided audio narration for the mission, which would be broadcast on radio and television. PAO commentary helped the public understand what they were seeing on their screens during the televised portions of a mission, and also gave news media something on which to base their own commentary. "You see those guys quite a bit," jokes Sy, referring to the PAO desk, "Because the TV camera was up in that corner."' },
                    ]}
                />

            </div>


        </div>
    )
}

export default App;