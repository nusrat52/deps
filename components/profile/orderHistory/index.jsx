import React from 'react'
import ProfileWrapper from '../profileWrapper'
function Index() {
    return (
      <ProfileWrapper>
              <div className="card">
    <div className="card-header">
      <h5>Order History</h5>
    </div>
    <div className="card-divider" />
    <div className="card-table">
      <div className="table-responsive-sm">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="account-order-details.html">#8132</a>
              </td>
              <td>02 April, 2019</td>
              <td>Pending</td>
              <td>$2,719.00 for 5 item(s)</td>
            </tr>
            <tr>
              <td>
                <a href="account-order-details.html">#7592</a>
              </td>
              <td>28 March, 2019</td>
              <td>Pending</td>
              <td>$374.00 for 3 item(s)</td>
            </tr>
            <tr>
              <td>
                <a href="account-order-details.html">#7192</a>
              </td>
              <td>15 March, 2019</td>
              <td>Shipped</td>
              <td>$791.00 for 4 item(s)</td>
            </tr>
            <tr>
              <td>
                <a href="account-order-details.html">#6321</a>
              </td>
              <td>28 February, 2019</td>
              <td>Completed</td>
              <td>$57.00 for 1 item(s)</td>
            </tr>
            <tr>
              <td>
                <a href="account-order-details.html">#6001</a>
              </td>
              <td>21 February, 2019</td>
              <td>Completed</td>
              <td>$252.00 for 2 item(s)</td>
            </tr>
            <tr>
              <td>
                <a href="account-order-details.html">#4120</a>
              </td>
              <td>11 December, 2018</td>
              <td>Completed</td>
              <td>$3,978.00 for 7 item(s)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="card-divider" />
    <div className="card-footer">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link page-link--with-arrow" href="#" aria-label="Previous">
            <svg className="page-link__arrow page-link__arrow--left" aria-hidden="true" width="8px" height="13px">
              <use xlinkHref="images/sprite.svg#arrow-rounded-left-8x13" />
            </svg>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">1</a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">2 <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">3</a>
        </li>
        <li className="page-item">
          <a className="page-link page-link--with-arrow" href="#" aria-label="Next">
            <svg className="page-link__arrow page-link__arrow--right" aria-hidden="true" width="8px" height="13px">
              <use xlinkHref="images/sprite.svg#arrow-rounded-right-8x13" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
      </ProfileWrapper>
   )
}

export default Index