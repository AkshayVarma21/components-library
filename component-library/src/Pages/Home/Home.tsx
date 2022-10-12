import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <Sidebar />
                <div className="app-main page">
                    <Routes>
                        {/* <Route path="/buttons" element={<Buttons />} /> */}
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Home;