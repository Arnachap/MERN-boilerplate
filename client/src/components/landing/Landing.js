import React, { Fragment } from 'react';

const Landing = () => {
  return (
    <Fragment>
      <main>
        <section
          className='jumbotron text-center'
          style={{
            padding: '6rem auto',
            marginBottom: '0',
            backgroundColor: '#fff'
          }}
        >
          <div className='container'>
            <h1 style={{ fontWeight: '300' }}>Boilerplate</h1>

            <p className='lead text-muted'>
              A MERN boilerplate, ready to be hacked.
            </p>

            <a href='#!' className='btn btn-primary'>
              Let's hack !
            </a>
          </div>
        </section>

        <div className='py-5 bg-light'>
          <div className='container'>
            <h2 className='text-center'>Latest blog posts</h2>

            <div className='row mt-5'>
              <div className='col-md-4'>
                <div className='card mb-4 shadow-sm'>
                  <img
                    className='card-img-top'
                    src='https://picsum.photos/500'
                    alt='Lorem Piscum'
                  />

                  <div className='card-body'>
                    <h5 className='card-title'>Card title</h5>

                    <p className='card-text'>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>

                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                        >
                          View
                        </button>
                      </div>
                      <small className='text-muted'>9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='card mb-4 shadow-sm'>
                  <img
                    className='card-img-top'
                    src='https://picsum.photos/500'
                    alt='Lorem Piscum'
                  />

                  <div className='card-body'>
                    <h5 className='card-title'>Card title</h5>

                    <p className='card-text'>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>

                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                        >
                          View
                        </button>
                      </div>
                      <small className='text-muted'>9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='card mb-4 shadow-sm'>
                  <img
                    className='card-img-top'
                    src='https://picsum.photos/500'
                    alt='Lorem Piscum'
                  />

                  <div className='card-body'>
                    <h5 className='card-title'>Card title</h5>

                    <p className='card-text'>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>

                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                        >
                          View
                        </button>
                      </div>
                      <small className='text-muted'>9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Landing;
