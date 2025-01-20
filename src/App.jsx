import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

function App() {

  const [copySuccess, setCopySuccess] = useState('');
  const [copyEmailButtonDisabled, setCopyEmailButtonDisabled] = useState(false);

  const handleCopyClick = () => {
    const email = 'mihai.hanga@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setCopySuccess('Email copied to clipboard!');
      setCopyEmailButtonDisabled(true);

      setTimeout(() => {
        setCopySuccess('');
        setCopyEmailButtonDisabled(false);
      }, 2000);
    }).catch(() => {
      setCopySuccess('Failed to copy email!');
    });
  };

  return (
    <div className="position-relative d-flex flex-column min-vh-100 overflow-hidden">

      {/* Background video */}
      <video
        className="position-absolute top-0 start-0 w-100 h-100"
        autoPlay
        muted
        loop
        style={{ objectFit: 'cover', zIndex: -1 }}
      >
        <source src="/assets/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="position-relative w-100 h-100 d-flex flex-column justify-content-start">
        <div className="container-fluid text-black text-center flex-grow-1">

          {/* First row with two Columns */}
          <div className="row g-5 mt-0.5">
            {/* First Column: Profile pic, short intro and about me - Adjust to 50% width on large screens, full width on smaller screens */}
            <div className="col-lg-6 col-12 mb-4 text-center">
              <div className="d-flex flex-column flex-lg-row align-items-center border-0 p-4 border rounded">

                {/* Profile Pic */}
                <div className="mb-4 mb-lg-0 order-0 order-lg-0 w-100 text-center">
                  <img
                    src="/assets/images/image1.png"
                    alt="Description"
                    className="img-fluid me-3"
                    style={{ maxWidth: '300px', maxHeight: '350px' }}
                  />
                </div>

                {/* Short Description */}
                <div className="text-lg-start text-center order-1 order-lg-1 w-100">
                  <h2 className="fw-bold fs-3">Hello, I'm Mihai</h2>
                  <hr></hr>
                  <p className="lead">I have created this portfolio because I want to:</p>
                  <p><i className="bi bi-arrow-right-circle me-2"></i>Develop my web3 coding skills</p>
                  <p><i className="bi bi-arrow-right-circle me-2"></i>Connect with like minded people in the web3 space</p>
                  {/*<p><i className="bi bi-arrow-right-circle me-2"></i>Find blockchain developer opportunities where I can learn from experienced professionals</p>*/}
                </div>
              </div>

              {/* About Me */}
              <div className="accordion mt-0.5" id="aboutMe">
                <div className="accordion-item mx-3" style={{ fontSize: '0.9rem', backgroundColor: 'transparent', borderColor: '#6c757d' }}>
                  <h2 className="accordion-header">
                    <button className="accordion-button py-2 collapsed" style={{ backgroundColor: 'transparent', boxShadow: 'none', outline: 'none' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      About Me
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#aboutMe">
                    <div className="accordion-body text-start py-1 border-0">
                      My interest in blockchain started a few years ago, but then it evolved into something more when I
                      injured my knee and was restrained to bed for several weeks. So, I began reading some books and then I've got
                      even more interested and I wanted to learn how to write smart contracts and deploy them. Because I have studied
                      some coding in high school/univeristy and had some basic programming background, I started a couple of online
                      courses. After that I started developing my onw little projects(that you can see here) to better understand and
                      deepen this technology.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Column: Projects and Skills - Adjust to 50% width on large screens, full width on smaller screens */}
            <div className="col-lg-6 col-12 mb-4 text-center">
              <div className="border-0 p-4 pb-1 border rounded bg-bs-secondary bg-opacity-50">
                <h2>PROJECTS</h2>
              </div>
              <div className="row row-cols-1 row-cols-md-2 m-3">
                <div className="col mb-2">
                  <div className="card bg-transparent border-dark p-1">
                    <div className="card-body">
                      <h5 className="card-title">Password Shielded Transfer</h5>
                      <p className="card-text"></p>
                      <div className="d-flex justify-content-center align-items-center">
                        {/*<a
                          className="btn btn-dark fs-6 me-3 shadow"
                          onClick={() => {
                            window.open("https://cretetoken.netlify.app/", "_blank", "noopener,noreferrer");
                          }}
                        >
                          App
                        </a>*/}
                        <i
                          className="bi bi-github fs-3"
                          style={{ cursor: 'pointer', transition: 'color 0.3s', color: '#332D2D' }}
                          onClick={() => {
                            window.open("https://github.com/MihaiHng/Password-Shielded-Transfer", "_blank", "noopener,noreferrer");
                          }}
                          onMouseOver={(e) => e.currentTarget.style.color = '#605a59'}
                          onMouseOut={(e) => e.currentTarget.style.color = '#332D2D'}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mb-2">
                  <div className="card bg-transparent border-dark p-1">
                    <div className="card-body">
                      <h5 className="card-title">ERC20 Token and Faucet</h5>
                      <p className="card-text"></p>
                      <div className="d-flex justify-content-center align-items-center">
                        <a
                          className="btn btn-dark fs-6 me-3 shadow"
                          onClick={() => {
                            window.open("https://cretetoken.netlify.app/", "_blank", "noopener,noreferrer");
                          }}
                        >
                          App
                        </a>
                        <i
                          className="bi bi-github fs-3"
                          style={{ cursor: 'pointer', transition: 'color 0.3s', color: '#332D2D' }}
                          onClick={() => {
                            window.open("https://github.com/MihaiHng/CreteToken", "_blank", "noopener,noreferrer");
                          }}
                          onMouseOver={(e) => e.currentTarget.style.color = '#605a59'}
                          onMouseOut={(e) => e.currentTarget.style.color = '#332D2D'}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mb-2">
                  <div className="card bg-transparent border-dark p-1">
                    <div className="card-body">
                      <h5 className="card-title">NFT Minting Website</h5>
                      <p className="card-text"></p>
                      <div className="d-flex justify-content-center align-items-center">
                        <a
                          className="btn btn-dark fs-6 me-3 shadow"
                          onClick={() => {
                            window.open("https://greekgodsnft.netlify.app/", "_blank", "noopener,noreferrer");
                          }}
                        >
                          App
                        </a>
                        <i
                          className="bi bi-github fs-3"
                          style={{ cursor: 'pointer', transition: 'color 0.3s', color: '#332D2D' }}
                          onClick={() => {
                            window.open("https://github.com/MihaiHng/GreekGodsNFT", "_blank", "noopener,noreferrer");
                          }}
                          onMouseOver={(e) => e.currentTarget.style.color = '#605a59'}
                          onMouseOut={(e) => e.currentTarget.style.color = '#332D2D'}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <text className="fs-3">Work in progress...</text>
              </div>
              <div className="card bg-transparent border-dark mx-5">
                <div className="card-header">
                  Used technologies
                </div>
                <div className="card-body d-flex justify-content-start align-items-start flex-wrap gap-3">
                  <button type="button" className="btn rounded-pill btn-secondary shadow">Solidity</button>
                  <button type="button" className="btn rounded-pill btn-secondary shadow">Foundry</button>
                  <button type="button" className="btn rounded-pill btn-secondary shadow">Hardhat</button>
                  <button type="button" className="btn rounded-pill btn-secondary shadow">OpenZeppelin</button>
                  <button type="button" className="btn rounded-pill btn-secondary shadow">Ethers/web3</button>
                  <button type="button" className="btn rounded-pill btn-secondary shadow">React</button>
                  <button type="button" className="btn rounded-pill btn-secondary shadow">Vite</button>
                  <button type="button" className="btn rounded-pill btn-secondary shadow">Bootstrap</button>
                  <button type="button" className="btn rounded-pill btn-secondary shadow">web3modal</button>
                  <button type="button" className="btn rounded-pill btn-secondary shadow">VS Code</button>
                  <button type="button" className="btn rounded-pill btn-secondary shadow">Node.js</button>
                </div>
              </div>

            </div>
          </div>

          {/* Second row: Contact Info */}
          <div className="row w-100 mb-3 mt-auto">
            <div className="d-flex justify-content-center align-items-center position-relative">
              <span className="fs-3 me-3">Contact:</span>

              {/* Linkedin */}
              <i
                className="bi bi-linkedin fs-3 me-4"
                style={{ cursor: 'pointer', transition: 'color 0.3s', color: '#0077b5' }}
                onClick={() => {
                  window.open("https://www.linkedin.com/in/mihai-hanga-03712749/", "_blank", "noopener,noreferrer");
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#005582'}
                onMouseOut={(e) => e.currentTarget.style.color = '#0077b5'}
              ></i>

              <i
                className="bi bi-github fs-3 me-4"
                style={{ cursor: 'pointer', transition: 'color 0.3s', color: '#332D2D' }}
                onClick={() => {
                  window.open("https://github.com/MihaiHng", "_blank", "noopener,noreferrer");
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#605a59'}
                onMouseOut={(e) => e.currentTarget.style.color = '#332D2D'}
              ></i>



              {/* Email Copy Button */}
              <i
                className={"bi bi-envelope-at-fill fs-2 me-4 ${copyEmailButtonDisabled ? 'disabled-icon' : ''}"}
                style={{ cursor: copyEmailButtonDisabled ? 'not-allowed' : 'pointer', transition: 'color 0.3s', color: '#ff0000' }}
                disabled={copyEmailButtonDisabled}
                onClick={!copyEmailButtonDisabled ? handleCopyClick : null}
                onMouseOver={(e) => e.currentTarget.style.color = '#1a1a1a'}
                onMouseOut={(e) => e.currentTarget.style.color = '#cc0000'}
              ></i>
              {/* Feedback Bubble */}
              {copySuccess && (
                <div
                  className="text-bubble position-absolute"
                  style={{
                    top: '-40px',
                    left: '51.3%',
                    transform: 'translateX(-10%)',
                    backgroundColor: '#9FA6B2',
                    color: '#fff',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    whiteSpace: 'nowrap',
                    fontSize: '14px',
                    zIndex: 1,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {copySuccess}
                  {/* Arrow */}
                  <div
                    className="bubble-arrow"
                    style={{
                      position: 'absolute',
                      bottom: '-5px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '0',
                      height: '0',
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: '6px solid #9FA6B2'
                    }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
