import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import '../../Static/css/commonStyles.scss';
import classNames from 'classnames';

const Sidebar = () => {
    const history = useNavigate();
    const [activeComponent, setActiveComponent] = useState<string>(window.location.pathname.split("/")[1]);

    // Redirecting on clicking each Item
    const onClickComponent = (value: string) => {
        setActiveComponent(value);
        history(`/${value}`);
    }
    return (
        <>
            <header className="px-3 py-3">
                <div className="d-flex">
                    <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" className='cursor-pointer'>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className="px-2">
                        Components library
                    </div>
                </div>
            </header>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Select Components</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className={classNames("text-align-start px-3 py-2 cursor-pointer", { "selected-component": activeComponent === "buttons" || activeComponent === "" })} onClick={() => onClickComponent("buttons")}>
                    <li>Buttons</li>
                </div>
                <div className={classNames("text-align-start px-3 py-2 cursor-pointer", { "selected-component": activeComponent === "activity" || activeComponent === "" })} onClick={() => onClickComponent("activity")}>
                    <li>Activity</li>
                </div>
                <div className={classNames("text-align-start px-3 py-2 cursor-pointer", { "selected-component": activeComponent === "converter" || activeComponent === "" })} onClick={() => onClickComponent("converter")}>
                    <li>Unit Converter</li>
                </div>
                <div className={classNames("text-align-start px-3 py-2 cursor-pointer", { "selected-component": activeComponent === "inputs" || activeComponent === "" })} onClick={() => onClickComponent("inputs")}>
                    <li>Input Elements</li>
                </div>
            </div>
        </>
    )

}

export default Sidebar;