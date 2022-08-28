import React from "react";
import ProfileWrapper from "../profileWrapper";
import { dashboardTranslate } from "../../../translate";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

function Index() {
  const router = useRouter();

  const { checkout } = useSelector((state) => state.loginReducer);

  console.log(checkout, "checkout555");
  return (
    <ProfileWrapper>
      <div className="card">
        <div className="card-header">
          <h5>{dashboardTranslate["orderHistory"][router.locale]}</h5>
        </div>
        <div className="card-divider" />
        <div className="card-table">
          <div className="table-responsive-sm">
            <table>
              <thead>
                <tr>
                  <th>{{en:"Title", ru:"заглавие", az:"ad"}[router.locale]}</th>
                  <th>{dashboardTranslate["date"][router.locale]}</th>
                  <th>Status</th>
                  <th>
                    {dashboardTranslate["orderHistory"][router.locale]}total
                  </th>
                </tr>
              </thead>
              <tbody>
                
                {checkout.map((product) => (
                   <Link href={`/${product.product.category.slug.replace(/#| /g, '-')}/${product.product.slug.replace(/#| /g, '-')}-${product.product.uniq_id}`}> 
                  <tr>
                    <td>
                      <a >
                        {product.product[`name_${router.locale}`]}
                      </a>
                    </td>
                    <td> {new Date(Date.parse(product.createdAt)).toDateString()} </td>
                    <td>Pending</td>
                    <td>
                      {product.product.price*product.productCount} azn for {product.productCount}{" "}
                      item(s)
                    </td>
                  </tr>
                  </Link>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-divider" />
        <div className="card-footer">
          {/* <ul className="pagination justify-content-center">
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
      </ul> */}
        </div>
      </div>
    </ProfileWrapper>
  );
}

export default Index;
