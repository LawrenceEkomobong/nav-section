import { useState, useEffect, useRef } from 'react';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setFeaturesOpen(false);
                setCompanyOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={dropdownRef}>
            <div>
                <img
                    src="./images/icon-menu.svg"
                    alt="Menu" id="menu-icon"
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>

            {isOpen && (
                <>
                    <div
                        className="overlay"
                        onClick={() => { setIsOpen(false); setFeaturesOpen(false); setCompanyOpen(false); }}
                    ></div>
                    <div className="dropdown">
                       <div className="close-btn">
                           <img
                            src="./images/icon-close-menu.svg"
                            alt="Close"
                            onClick={() => setIsOpen(false)}
                            />
                        </div>
                     <div className="drop1">
                        <a href="#" id="links">features</a>
                        <img
                            src="./images/icon-arrow-down.svg"
                            alt="arrow" id="arrow1"
                            onClick={() => setFeaturesOpen(!featuresOpen)}
                        />
                        {featuresOpen && (
                            <div className="drop1-content">
                                <div className="flex1" id="flex">
                                    <img src="./images/icon-todo.svg" alt="todo" />
                                    <a href="#">Todo List</a>
                                </div>
                                <div className="flex2" id="flex">
                                    <img src="./images/icon-calendar.svg" alt="calendar" />
                                    <a href="#">Calendar</a>
                                </div>
                                <div className="flex3" id="flex">
                                    <img src="./images/icon-reminders.svg" alt="reminders" />
                                    <a href="#">Reminders</a>
                                </div>
                                <div className="flex4" id="flex">
                                    <img src="./images/icon-planning.svg" alt="planning" />
                                    <a href="#">Planning</a>
                                </div>
                            </div>
                        )}
                       </div>
                      <div className="drop2">
                         <a href="#" id="links">Company</a>
                         <img
                            src="./images/icon-arrow-down.svg"
                            alt="arrow" id="arrow2"
                            onClick={() => setCompanyOpen(!companyOpen)}
                         />
                         {companyOpen && (
                            <div className="drop2-content">
                                <a href="#">History</a>
                                <a href="#">Our Team</a>
                                <a href="#">Blog</a>
                            </div>
                           )}
                        </div>
                     <a href="#" id="links">Careers</a>
                     <a href="#" id="links">About</a>
                     <div className="btns">
                      <button id="login-btn">Login</button>
                        <button id="register-btn">Register</button>
                     </div>
                  </div>
                </>
            )}
        </div>
    );
}

export default Dropdown;
