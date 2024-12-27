// import UserContextProvider from "../../context/UserContextProvider";
import Login from "../Login/Login";
// import Profile from "../Login/Profile";


function Home() {
  return (
    <div className='flex-grow'>
      {/* <UserContextProvider> */}
        <Login />
        {/* <Profile /> */}
      {/* </UserContextProvider> */}
    </div>
  );
}

export default Home;
