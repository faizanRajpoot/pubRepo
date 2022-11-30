import { BrowserRouter, Route, useParams } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import SignIn from "./components/signIn/signIn";
import Register from "./components/Register/Register";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Account from "./components/Account/Account";
import CartPopUp from "./components/cartPopUp/cartPopUp";
import MenCollection from "./components/collection/men collection/menCollection";
import addToCart from "./components/addToCart/addToCart";

export default function App() {

  return (
    <BrowserRouter>
      <Main Nav={<Nav/>} Footer={<Footer/>}>
        
        <Route path="/signIn" component={SignIn}></Route>
        <Route path="/Register" component={Register}></Route>
        <Route path="/Account" component={Account}></Route>
        <Route path="/Header" component={Header}></Route>
        <Route path="/CartPopUp" component={CartPopUp}></Route>
        <Route path="/MenCollection" component={MenCollection}></Route>
        <Route path="/entry/:id" component={CartPopUp}></Route>
        <Route path="/Cart" component={addToCart}></Route>
      </Main>
    </BrowserRouter>
  );
}
