import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLocation } from "react-router-dom";
import { useRouter } from "next/router";
import {AiOutlineRight} from "react-icons/ai"
function ProfileWrapper({ children }) {
  const router = useRouter();

  const [route, setRoute] = useState("dashboard");
  console.log(router, "rtrtrtrtr");

  useEffect(() => {
    if (router.asPath == "/profile/dashboard") {
      setRoute("dashboard");
    } else if (router.asPath == "/profile/edit") {
      setRoute("edit");
    }
    else if (router.asPath == "/profile/orderhistory") {
      setRoute("orderhistory");
    }
    else if (router.asPath == "/profile/password") {
      setRoute("password");
    }
  }, []);

  return (
    <div className="site__body">
      <div className="page-header">
        <div className="page-header__container container">
          <div className="page-header__breadcrumb">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a className="pointer">Home</a>
                  <AiOutlineRight className="profileWrapperIcon"/>
                </li>
                <li className="breadcrumb-item">
                  <a className="pointer" >profile</a>
             
                  <AiOutlineRight className="profileWrapperIcon"/>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {" "}
                  {route}{" "}
                </li>
              </ol>
            </nav>
          </div>
          <div className="page-header__title">
            <h1>My Account</h1>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3 d-flex">
              <div className="account-nav flex-grow-1">
                <h4 className="account-nav__title">Navigation</h4>
                <ul>
                  <li className={route=="dashboard"?"account-nav__item account-nav__item--active":"account-nav__item"}>
                    <Link href="/profile/dashboard">Dashboard</Link>
                  </li>
                  <li className={route=="edit"?"account-nav__item account-nav__item--active":"account-nav__item"}>
                    <Link href="/profile/edit">Edit Profile</Link>
                  </li>
                  <li className={route=="orderhistory"?"account-nav__item account-nav__item--active":"account-nav__item"}>
                    <Link href="/profile/orderhistory">Order History</Link>
                  </li>

                  <li className={route=="password"?"account-nav__item account-nav__item--active":"account-nav__item"}>
                    <Link href="/profile/password">Password</Link>
                  </li>
                  <li className="account-nav__item">
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-9 mt-4 mt-lg-0">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileWrapper;
