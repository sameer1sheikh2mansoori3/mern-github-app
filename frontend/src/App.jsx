
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import './App.css'
import Sidebar from './components/Sidebar';
import LikesPage from './pages/LikesPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';

function App() {
  
const authUser = true
  return (
    <>
     <div className='flex'>
			<div className="flex justify-start">
      <Sidebar />
      </div>
			<div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
					<Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
					<Route path='/explore' element={authUser ? <ExplorePage /> : <Navigate to={"/login"} />} />
					<Route path='/likes' element={authUser ? <LikesPage /> : <Navigate to={"/login"} />} />
				</Routes>
				<Toaster />
			</div>
		</div>
    </>
  )
}

export default App
