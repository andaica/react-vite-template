import { Navigate, Route, Routes } from 'react-router-dom';
import Login from 'modules/authen/login';
import Test from 'modules/test';

const RouteList = () => (
    <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
    </Routes>
);
export default RouteList;
