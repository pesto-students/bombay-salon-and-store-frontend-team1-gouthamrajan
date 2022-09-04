import { Dialog, DialogContent } from '@mui/material'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import SignInOutContainer from '../../SignInOutContainer/SignInOutContainer'
import Header from '../Header/Header'

const Layout = () => {

    const [showAuth, setShowAuth] = useState(false)

    return (
        <>
            <Header
                showAuth={showAuth}
                setShowAuth={setShowAuth}
            />

            <Dialog
                open={showAuth}
                onClose={() => {
                    setShowAuth(false)
                }}
            >
                <DialogContent>
                <SignInOutContainer />
                </DialogContent>
            </Dialog>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout