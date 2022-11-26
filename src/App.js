import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import SignIn from "./components/signIn/signIn";
import Account from "./components/Account/Account";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";


export default function App() {
  return (
    <BrowserRouter>
      <Main Nav={<Nav/>} Footer={<Footer/>}>
        
        <Route path="/signIn" component={SignIn}></Route>
        <Route path="/Account" component={Account}></Route>
        <Route path="/Header" component={Header}></Route>
      </Main>
    </BrowserRouter>
  );
}
