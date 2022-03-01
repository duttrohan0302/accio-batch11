import React from "react";
import Tab from "./Tab";

function Tabs({tabNames}) {
    return (
        <div className='tabs'>
            {
                tabNames.map((tabName,index) => (
                    <Tab key={index} tabName={tabName} />
                ))
            }
            {/* {
                tabNames.map((tabName,index) => (
                    <div className="tab" key={index}>
                        <a href="">{tabName}</a>
                    </div>
                ))
            } */}
            {/* <div className='tab'>
                <a href="">Home</a>
            </div>
            <div className='tab'>
                <a href="">About</a>
            </div>
            <div className='tab'>
                <a href="">Features</a>
            </div> */}
        </div>
    )
}

export default Tabs