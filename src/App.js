import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import SignIn from "./components/signIn/signIn";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";

export default function App() {
  return (
    <BrowserRouter>
      <Main Nav={<Nav/>} Footer={<Footer/>}>

        <Route path="/signIn" component={SignIn}></Route>
        <Route path="/home" component={Home}></Route>

      </Main>
    </BrowserRouter>
  );
}
