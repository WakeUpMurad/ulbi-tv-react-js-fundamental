import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {routes} from "../router";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";
import Home from "../pages/Home";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ?
            <Routes>
                <Route element={<Home/>} path='/home' exact='true' />
                <Route element={<About/>} path='/about' exact='true' />
                <Route element={<Posts/>} path='/posts' exact='true' />
                <Route element={<PostIdPage/>} path='/posts/:id' exact='true' />
                <Route element={<Navigate to="/home" replace />} path='*'/>
            </Routes>
            :
        <Routes>
            <Route element={<Login/>} path='/login' exact='true' />
            <Route element={<Navigate to="/login" replace />} path='*' />
        </Routes>
    )
}

export default AppRouter;