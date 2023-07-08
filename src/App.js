import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../src/Pages/SignUp";
import SignIn from "../src/Pages/SignIn";
import Home from "../src/Pages/Home";
import EmailConfirmation from "../src/Pages/EmailConfirmation";
import FirstModule from "../src/Modules/FirstModule";
import PageNotFound from "../src/Pages/PageNotFound"
import StudentScorePage from "./Pages/StudentScorePage";
import IndexPage from "./Pages/IndexPage";
import IntroductoryComic from "./Comics/IntroductoryComic";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path='/introductorycomic' exact element={<IntroductoryComic/>}  />
                <Route path='/sign-in' exact element={<SignIn/>}  />
                <Route path='/' exact element={<IndexPage/>}  />
                <Route path='/sign-up' element={<SignUp/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/email-confirmation' element={<EmailConfirmation/>} />
                <Route path='/module-1' element={<FirstModule/>} />
                <Route path="/studentscore" element={<StudentScorePage/>} />
                <Route element={<PageNotFound/>} />      
            </Routes>
        </div>
    );
};

export default App;