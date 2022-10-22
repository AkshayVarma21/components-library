import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Sidebar from "../Sidebar/Sidebar";
import Buttons from "../../Components/Buttons/Buttons";
import Activity from '../../Components/Activity/Activity';
import Converter from '../../Components/Converter/Converter';
import Inputs from '../../Components/Inputs/Inputs';

const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <Sidebar />
                <div className="app-main page">
                    <Routes>
                        <Route path="/buttons" element={<Buttons />} />
                        <Route path="/activity" element={<Activity />} />
                        <Route path="/converter" element={<Converter />} />
                        <Route path="/inputs" element={<Inputs />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Home;