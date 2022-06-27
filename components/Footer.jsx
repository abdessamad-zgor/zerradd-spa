import React from 'react'

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            &copy; 2022 Center Zerrad. Made by
            <a target="_blank" href="" title=" Digital Web Agency"
              >AsoulSolutions</a
            >
          </div>
          <div className="col-sm-6">
            <ul className="social-icons">
              <li>
                <a href="#"><i className="fa fa-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-instagram"></i></a>
              </li>

             
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer