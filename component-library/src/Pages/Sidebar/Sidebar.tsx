import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import '../../Static/commonStyles.scss';

const Sidebar = () => {
    const history = useNavigate();

    // Redirecting on clicking each Item
    const onClickComponent = (value: string) => {
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
                <div className="text-align-start px-3 cursor-pointer" onClick={() => onClickComponent("buttons")}>
                    Buttons
                </div>
                <div className="text-align-start px-3 cursor-pointer" onClick={() => onClickComponent("activity")}>
                    Activity
                </div>
            </div>
        </>
    )

}

export default Sidebar;