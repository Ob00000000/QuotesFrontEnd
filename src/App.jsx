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
            <Route path="/user" element=<UserLayout/> >
              <Route index element=<ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute> />
              <Route path="dashboard" element=<ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute> />
              {/* <Route path="foods" element=<ProtectedRoute>
                <FoodGallery/>
              </ProtectedRoute> />
              <Route path="addfood" element=<ProtectedRoute>
                <FoodItemForm/>
              </ProtectedRoute> />
              <Route path="editfood" element=<ProtectedRoute>
                <FoodItemUpdateForm/>
              </ProtectedRoute> /> */}
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
