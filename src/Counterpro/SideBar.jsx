// import  { useState } from 'react';

const Sidebar = () => {
    // const [counter, setCounter] = useState(5);
    return (
      
    
                <>
                 <div className="sider_bar"></div>
                    <p>
                        <button
                            className="btn btn-primary"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseWidthExample"
                            aria-expanded="false"
                            aria-controls="collapseWidthExample"
                        >
                            Toggle width collapse
                        </button>
                    </p>
                    <div style={{ minHeight: 120 }}>
                        <div className="collapse collapse-horizontal" id="collapseWidthExample">
                            <div className="card card-body" style={{ width: 300 }}>
                                <ul>
                                    <h5>Menu</h5>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Contect</li>
                                    <li>Help</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </>


    
    );
}

export default Sidebar;