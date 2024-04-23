import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import Member from './pages/member';
import MemberForm from './pages/member/Form.jsx';
import EditMemberForm from './pages/member/EditMemberForm.jsx';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import PaymentElection from './pages/PaymentElection';
//  import PaymentFinal from './components/Paymentfinal/PaymentFinal';
import Payment from './pages/Payment.jsx';
// import AddFamily from './pages/family/AddFamily.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, 
      {
        path: '/members',
        element: <Member/>
      },
      {
        path: '/add-member',
        element: <MemberForm />
      },
    { path:"/edit-member/:memberId",
     element: <EditMemberForm />},

   
       {
        path: '/payment',
         element: <Payment />
       },
      // {
      //   path: '/paymentElection',
      //   element: <PaymentElection />
      // },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
