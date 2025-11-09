import { Route, Routes } from "react-router"
import Login from './Components/Login';
import Register from './Components/Register';
import Logout from './Components/Logout';
import UserLayout from './Components/UserLayout';
import ProtectedRoute from './Components/ProtectedRoute';
import AuthProvider from "./Provider/AuthProvider";
import Dashboard from './Components/Dashboard';
import UpdateProfile from './Components/UpdateProfile';
import NotFound from './Components/NotFound';
import MyQuotes from "./Components/MyQuotes";
import FavPage from "./Components/favpage";







function App() {

  return <div>
      <AuthProvider>
          <div className="d-flex justify-content-center">
          </div>
          <Routes>
            <Route index element=<Login/> />
            <Route path="/login" element=<Login/> />
            <Route path="/register" element=<Register/> />
            <Route path="/logout" element=<Logout/> />
            <Route path="/favpage" element=<FavPage/> />
            <Route path="/user" element=<UserLayout/> >
              <Route index element=<ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute> />
              <Route path="dashboard" element=<ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute> />
              <Route path="myquote" element=<ProtectedRoute>
                <UpdateProfile/>
              </ProtectedRoute> />
               <Route path="profile" element=<ProtectedRoute>
                <UpdateProfile/>
              </ProtectedRoute> />


            </Route>
            <Route path="*" element=<NotFound/> />
          </Routes>
      </AuthProvider>
    </div>
}

export default App
