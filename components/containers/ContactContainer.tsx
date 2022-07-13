import React, {FormEvent, useState} from 'react';
import {postSubmitContact} from "services/ContactService";
import {IContact} from "components/interface/IContact";

const ContactContainer = () => {
  const [stateSubmit, setStateSubmit] = useState<boolean>(false);

  const onSubmitContact = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // @ts-ignore
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    let bodyContact: IContact = {
      email: formProps.email.toString(),
      content: formProps.content.toString(),
    }
    postSubmitContact(bodyContact).then(res => {
      if (res.status === 200) setStateSubmit(true)
    })
  }
  return (
    <React.Fragment>
      <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
        <h2 className="ltext-105 cl0 txt-center">
          Contact
        </h2>
      </section>
      {/* Content page */}
      <section className="bg0 p-t-104 p-b-116">
        <div className="container">
          <div className="flex-w flex-tr">
            <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
              {!stateSubmit && (
                <form onSubmit={onSubmitContact}>
                  <h4 className="mtext-105 cl2 txt-center p-b-30">
                    Send Us A Message
                  </h4>
                  <div className="bor8 m-b-20 how-pos4-parent">
                    <input id={"email_contact"} className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text"
                           name="email"
                           placeholder="Your Email Address"/>
                    <img className="how-pos4 pointer-none" src="images/icons/icon-email.png" alt="ICON"/>
                  </div>
                  <div className="bor8 m-b-30">
                  <textarea id={"content_contact"} className="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25"
                            name="content"
                            placeholder="How Can We Help?" defaultValue={""}/>
                  </div>
                  <button type={"submit"}
                          className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
                    Submit
                  </button>
                </form>
              )}

              {stateSubmit && (
                <h4 className="mtext-105 cl2 txt-center p-b-30">
                  Thank you for contacting PrimeData. We will get back to you soon
                </h4>
              )}
            </div>


            <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
              <div className="flex-w w-full p-b-42">
                  <span className="fs-18 cl5 txt-center size-211">
                    <span className="lnr lnr-map-marker"/>
                  </span>
                <div className="size-212 p-t-2">
                    <span className="mtext-110 cl2">
                      Address
                    </span>
                  <p className="stext-115 cl6 size-213 p-t-18">
                    27, Nguyen Cuu Van, Binh Thanh Dist., Ho Chi Minh City
                  </p>
                </div>
              </div>
              <div className="flex-w w-full p-b-42">
                  <span className="fs-18 cl5 txt-center size-211">
                    <span className="lnr lnr-phone-handset"/>
                  </span>
                <div className="size-212 p-t-2">
                    <span className="mtext-110 cl2">
                      Lets Talk
                    </span>
                  <p className="stext-115 cl1 size-213 p-t-18">
                    (+84) 8888 18688
                  </p>
                </div>
              </div>
              <div className="flex-w w-full">
                  <span className="fs-18 cl5 txt-center size-211">
                    <span className="lnr lnr-envelope"/>
                  </span>
                <div className="size-212 p-t-2">
                    <span className="mtext-110 cl2">
                      Sale Support
                    </span>
                  <p className="stext-115 cl1 size-213 p-t-18">
                    info@primedata.ai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map */}
      <div className="map">
        <div className="size-303" id="google_map" data-map-x="40.691446" data-map-y="-73.886787"
             data-pin="images/icons/pin.png" data-scrollwhell={0} data-draggable={1} data-zoom={11}/>
      </div>
    </React.Fragment>
  );
};


export default (ContactContainer);