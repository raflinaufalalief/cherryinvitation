import React from "react";

const Payment = () => {
  return (
    <section className="py-8 bg-secondary">
      <div className="container mx-auto">
        <div className="lg:grid lg:grid-cols-3 lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center">
          <div>
            <h1 className="py-8 text-3xl text-center text-white lg:leading-[35px] font-medium">
              Tentang Kami
            </h1>
            <p className="text-white ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              repellendus eius voluptates excepturi laboriosam porro omnis dicta
              totam nostrum non cumque tempore, a explicabo, quos ratione,
              commodi est soluta nemo?
            </p>
          </div>
          {/*  */}
          <div className="justify-self-center">
            <h1 className="py-8 text-3xl text-center text-white lg:leading-[35px] font-medium">
              Pembayaran
            </h1>
            <div>
              <div className="flex space-x-7 ">
                <img
                  src="https://cherryshopcom.netlify.app/assets/BCA-6881a9a4.png"
                  alt=""
                  width={100}
                  className="p-4 border rounded-md bg-100"
                />
                <img
                  src="https://cherryshopcom.netlify.app/assets/BNI-15049466.png"
                  alt=""
                  width={100}
                  className="p-4 border rounded-md bg-100"
                />

                <img
                  src="https://cherryshopcom.netlify.app/assets/GOPAY-ead97464.png"
                  alt=""
                  width={100}
                  className="p-4 border rounded-md bg-100"
                />
              </div>
              <div className="flex mt-5 space-x-7 ">
                <img
                  src="https://cherryshopcom.netlify.app/assets/indomaret-logo-9481ac47.png"
                  alt=""
                  width={100}
                  className="p-4 border rounded-md bg-100"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/2560px-BANK_BRI_logo.svg.png"
                  alt=""
                  width={100}
                  className="p-4 border rounded-md bg-100"
                />
                <img
                  src="https://cherryshopcom.netlify.app/assets/atm-bersama-0f2c50e9.jpg"
                  alt=""
                  width={100}
                  className="p-4 border rounded-md bg-100"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="py-8 text-3xl text-center text-white lg:leading-[35px] font-medium">
              Kontak kami
            </h1>
            <p className="text-white ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              repellendus eius voluptates excepturi laboriosam porro omnis dicta
              totam nostrum non cumque tempore, a explicabo, quos ratione,
              commodi est soluta nemo?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
