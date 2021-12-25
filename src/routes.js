import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/home';
import NotesScreen from "./screens/notes/index";
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import UserEditScreen from "./screens/users/edit";

import PrivateRouter from "./components/auth/private_router";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path="/register" element={<RegisterScreen/>} />
            <Route path="/login" element={<LoginScreen/>} />
            <Route path="/notes" element={  <PrivateRouter>
                                                <NotesScreen/>
                                            </PrivateRouter> } />
            <Route path="/users/edit" element={ <PrivateRouter>
                                                    <UserEditScreen/>
                                                </PrivateRouter> } />
        </Routes>
    </BrowserRouter>
)


export default Router;