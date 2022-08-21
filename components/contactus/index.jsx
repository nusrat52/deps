import React, { useState, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import * as Agent from "../../api/agent";
import Swal from "sweetalert2";
import { postQuestions } from "../../translate";
import { useRouter } from "next/router";
function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [adress, setAdress] = useState({});
  const router = useRouter();

  useEffect(() => {
    const getUserAdress = async () => {
      const adresses = await Agent.general.getAdress();
      setAdress(adresses.results[0]);
    };
    getUserAdress();
  }, []);

  const submitEvent = async (e) => {
    e.preventDefault();

    const postResponse = await Agent.general.askQuestions({
      name,
      email,
      phone: subject,
      message: message,
      source: "contact",
    });

    if (postResponse) {
      Swal.fire({
        title: "Conguratilations!",
        text: "Your question was asked successfully!",
        icon: "success",
        confirmButtonText: "Exit",
      }).then(() => {
        setName("");
        setMessage("");
        setSubject("");
        setEmail("");
      });
    }
  };

  return (
    <>
      <div className="block-map block">
        <div className="block-map__body">
          <iframe src={adress.coordinates} width="640" height="480"></iframe>
        </div>
      </div>
      <div>
        <div className="page-header">
          <div className="page-header__container container">
            <div className="page-header__breadcrumb">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a className="pointer">
                      {postQuestions["home"][router.locale]}
                    </a>
                    <AiOutlineRight className="profileWrapperIcon" />
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {" "}
                    {postQuestions["contactUs"][router.locale]}{" "}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="container">
            <div className="card mb-0">
              <div className="card-body contact-us">
                <div className="contact-us__container">
                  <div className="row">
                    <div className="col-12 col-lg-6 pb-4 pb-lg-0">
                      <h4 className="contact-us__header card-title">
                        {postQuestions["adress"][router.locale]}
                      </h4>
                      <div className="contact-us__address">
                        <p>
                          {" "}
                          {adress.address} <br />
                          Email: {adress.email_address} <br />
                          {postQuestions["number"][router.locale]}:{" "}
                          {adress.number1}{" "}
                        </p>
                        <p>
                          <strong>Opening Hours</strong>
                          <br />
                          {adress.openTimes}
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <h4 className="contact-us__header card-title">
                        {" "}
                        {postQuestions["leaveMessage"][router.locale]}{" "}
                      </h4>

                      <form onSubmit={submitEvent}>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="form-name">
                              {postQuestions["name"][router.locale]}
                            </label>
                            <input
                              name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                              type="text"
                              id="form-name"
                              className="form-control"
                              placeholder={postQuestions["name"][router.locale]}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="form-email">
                              {postQuestions["email"][router.locale]}
                            </label>
                            <input
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              type="email"
                              id="form-email"
                              className="form-control"
                              placeholder={
                                postQuestions["email"][router.locale]
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="form-subject">
                            {postQuestions["number"][router.locale]}
                          </label>
                          <input
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            name="subject"
                            required
                            type="text"
                            id="form-subject"
                            className="form-control"
                            placeholder="Subject"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="form-message">
                            {postQuestions["message"][router.locale]}
                          </label>
                          <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            name="message"
                            id="form-message"
                            className="form-control"
                            rows={4}
                            defaultValue={""}
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          {" "}
                          {postQuestions["sendMessage"][router.locale]}{" "}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
