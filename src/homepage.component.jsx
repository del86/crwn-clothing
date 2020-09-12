import React from "react";
import "./homepage.styles.scss";

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <div classdName="title">HATS</div>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <div classdName="title">JACKETS</div>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <div classdName="title">SNEAKERS</div>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <div classdName="title">WOMENS</div>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <div classdName="title">MENS</div>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>

        </div>
    </div>
);

export default HomePage;