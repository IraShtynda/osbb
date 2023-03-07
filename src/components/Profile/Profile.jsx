import './Profile.scss';
import { Routes, Route, NavLink } from "react-router-dom";
import Indicators from './Indicators/Indicators';
import Payments from './Payments/Payments';

const Profile = () => {
    return (
        <main className='profile'>
            <div className='container'>
                <ul><li><NavLink activeclassname="active" to='/profile/indicators'>Подати показники</NavLink></li>
                    <li><NavLink activeclassName="active" to='/profile/payments'>Платіжки</NavLink></li>
                    <li><NavLink activeclassName="active" to='/profile/history'>Історія платежів</NavLink></li>
                    <li><NavLink activeclassName="active" to='/profile/personal'>Профіль</NavLink></li></ul>
                <Routes>
                    <Route path='indicators' element={<Indicators />} />
                    <Route path='payments' element={<Payments />} />
                </Routes>
            </div>
        </main>
    );
}

export default Profile;