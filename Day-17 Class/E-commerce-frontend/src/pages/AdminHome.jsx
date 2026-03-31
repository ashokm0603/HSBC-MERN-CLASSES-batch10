import React from 'react'
import AdminNav from '../components/AdminNav'
import AdminMain from '../components/AdminMain'
import ChatBot from '../ChatBot'

const AdminHome = () => {
  return (
    <div className="admin-home-layout">
        <AdminNav/>
        <AdminMain/>
        <ChatBot/>
    </div>
  )
}

export default AdminHome