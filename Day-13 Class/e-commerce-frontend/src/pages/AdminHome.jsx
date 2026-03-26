import React from 'react'
import AdminNav from '../components/AdminNav'
import AdminMain from '../components/AdminMain'

const AdminHome = () => {
  return (
    <div id='main-container'>
        <AdminNav/>
        <AdminMain/>
    </div>
  )
}

export default AdminHome