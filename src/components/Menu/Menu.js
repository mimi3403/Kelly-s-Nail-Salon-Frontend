import './Menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="list-wrapper">
        <div className="list-title">
          <h2>WAXING</h2>
        </div>
        <div>
          <div className="list-container">
            <div className="list-content">
              <h5>Eyebrow</h5>
            </div>
            <span>$8</span>
          </div>
          <div className="list-container">
            <div className="list-content">
              <h5>Chin</h5>
            </div>
            <span>$8</span>
          </div>
          <div className="list-container">
            <div className="list-content">
              <h5>Lip</h5>
            </div>
            <span>$6</span>
          </div>
          <div className="list-container">
            <div className="list-content">
              <h5>Under Arm</h5>
            </div>
            <span>$11</span>
          </div>
          <div className="list-container">
            <div className="list-content">
              <h5>Back</h5>
            </div>
            <span>$25Up</span>
          </div>
          <div className="list-container">
            <div className="list-content">
              <h5>Chest</h5>
            </div>
            <span>$25</span>
          </div>
          <div className="list-title">
            <h2>NAIL CARE</h2>
          </div>
          <div>
            <div className="list-container">
              <div className="list-content">
                <h5>Polist Change</h5>
              </div>
              <span>$10</span>
            </div>
            <div className="list-container">
              <div className="list-content">
                <h5>French Manicure</h5>
              </div>
              <span>$15</span>
            </div>
            <div className="list-container">
              <div className="list-content">
                <h5>Manicure</h5>
              </div>
              <span>$10</span>
            </div>
            <div className="list-container">
              <div className="list-content">
                <h5>Color Gel</h5>
              </div>
              <span>$28</span>
            </div>
            <div className="list-container">
              <div className="list-content">
                <h5>French Color Gel</h5>
              </div>
              <span>$33</span>
            </div>
            <div className="list-title">
              <h2>Pedicure</h2>
            </div>
            <div>
              <div className="list-container">
                <div className="list-content">
                  <h5>Chest</h5>
                </div>
                <span>$35</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;