import React from 'react';
import './App.css';
import LoginForm from "./components/sections/LoginForm";
import { ToastContainer } from './components/Toast/ToastContainer';

function App() {
    return (
        <>
            <ToastContainer />
            <LoginForm />
        </>
    );
}

export default App;