import React from "react";
import ProfileWrapper from "../profileWrapper";
import { dashboardTranslate } from "../../../translate";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

function Index() {
  const router = useRouter();

  const { checkout } = useSelector((state) => state.loginReducer);

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
 
                {checkout.map((product, index) => (
                   <Link key={index} href={`/${product.product.category.slug.replace(/#| /g, '-')}/${product.product.slug.replace(/#| /g, '-')}`}> 
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
 
        </div>
      </div>
    </ProfileWrapper>
  );
}

export default Index;
