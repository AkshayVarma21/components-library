import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Sidebar from "../Sidebar/Sidebar";
import Buttons from "../../Components/Buttons/Buttons";
import Activity from '../../Components/Activity/Activity';

const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <Sidebar />
                <div className="app-main page">
                    <Routes>
                        <Route path="/buttons" element={<Buttons />} />
                        <Route path="/activity" element={<Activity />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Home;