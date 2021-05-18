import React from 'react'
import "./HomePage.scss"

function HomePage() {
    return (
        <div className="homepage">

            <div className="directory-menu">


                {/* 1 */}

                <div className="menu-item">

                    <div className="content">
                        <h1 className="title">Hats</h1>
                        <span className="subtitle">Shop Now</span>

                    </div>

                </div>


{/* 2 */}

<div className="menu-item">

<div className="content">
    <h1 className="title">Suvs</h1>
    <span className="subtitle">Shop Now</span>

</div>

</div>


{/* 3 */}

<div className="menu-item">

<div className="content">
    <h1 className="title">sedan</h1>
    <span className="subtitle">Shop Now</span>

</div>

</div>

{/* 4 */}


<div className="menu-item">

<div className="content">
    <h1 className="title">jeep</h1>
    <span className="subtitle">Shop Now</span>

</div>

</div>

{/* 5 */}

<div className="menu-item">

<div className="content">
    <h1 className="title">4x4</h1>
    <span className="subtitle">Shop Now</span>

</div>

</div>


            </div>
            
        </div>
    )
}

export default HomePage
