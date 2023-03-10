import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='flex justify-center bg-teal-200'>
        <div className='mr-5 text-2xl'>
        <NavLink
            to="/"
            style={({ isActive, isPending }) => {
                return {
                color: isActive ? "red" : "inherit",
                };
            }}
            className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
            }} 
            >
            Home
        </NavLink>
        </div>
        <div className='mr-5 text-2xl'>
        <NavLink
            to="/AllReview"
            style={({ isActive, isPending }) => {
                return {
                color: isActive ? "red" : "inherit",
                };
            }}
            className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
            }}
            >
            AllReview
        </NavLink>
        </div>
        <div className='mr-5 text-2xl'>
        <NavLink
        to="/Dashboard"
            style={({ isActive, isPending }) => {
                return {
                color: isActive ? "red" : "inherit",
                };
            }}
            className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
            }}
            >
            Dashboard
        </NavLink>
        </div>
        <div className='mr-5 text-2xl'>
        <NavLink
            to="/Blogs"
            style={({ isActive, isPending }) => {
                return {
                color: isActive ? "red" : "inherit",
                };
            }}
            className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
            }}
            >
            Blogs
        </NavLink>
        </div>
        <div className='text-2xl'>
        <NavLink
            to="/About"
            style={({ isActive, isPending }) => {
                return {
                color: isActive ? "red" : "inherit",
                };
            }}
            className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
            }}
            >
            About
        </NavLink>
        </div>
    </div>
  )
}

export default Header