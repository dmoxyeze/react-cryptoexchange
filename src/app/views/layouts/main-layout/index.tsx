import React, { ReactNode } from 'react'
import NavigationBar from './navigation-bar';
import Footer from './footer';

type Props = {
    children?: ReactNode;
};

const MainLayout = ({ children }: Props) => {
    return (
        <>
            <NavigationBar />
                {children}
            <Footer />
        </>
    )
}

export default MainLayout;
