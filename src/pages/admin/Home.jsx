import React from "react";
import Navbars from "../../components/Navbars";
import NotificationHeader from "../../components/Header/NotificationHeader";
import SupportChat from "../../components/SupportChat";
import Settings from "../../components/Settings";

function Home() {
    return (
        <>
            <main className="main" id="top">
                <Navbars />
                <div className="content">
                    <NotificationHeader />
                </div>
                {/* Render các thành phần mặc định */}
                <SupportChat />
            </main>
            <Settings />
        </>
    );
}

export default Home;
