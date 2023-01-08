import React from 'react'

const Product = () => {

  const [showModal, setShowModal] = React.useState(false);

  return (
        <div className='grid grid-cols-2 items-center justify-items-center bg-slate-100'>
            <div className="ml-5">
                    <div className="">
                        <h5 className="text-center text-5xl mb-8">Chair of your choise.</h5>
                        <p className="">A Gaming Chair Is A Chair That's Customized For Playing Video Games.A Good Gaming Chair Will Ensure You Are Comfortable Enough To Avoid Fatigue, Headaches, Eye Strain, Backaches, And Spine Injury.The Gaming Chair Is A Type Of Chair Designed For The Comfort Of Gamers. They Differ From Most Office Chairs In Having A High Backrest Designed To Support The Upper Back And Shoulders. These Are Further Customizable: Armrests, Backs, Lumbar Support And Headrests Can All Be Adjusted For Comfort And Efficiency.TechLand BD One Of The Best It Product Seller Company In Bangladesh.If Anyone Wants To Best Price Gaming Chair In Bangladesh Obviously He Wanted To Come To TechLand BD.TechLand BD Provided Many Type Of Brand Gaming Chair..</p>
                    </div>
                    <button
                      className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(true)}
                    >
                      MORE INFORMATION
                    </button>
                    {showModal ? (
                      <>
                        <div
                          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              {/*header*/}
                              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                Horizon Apex-BORG Ergonomic Gaming Chair
                                </h3>
                                <button
                                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                  onClick={() => setShowModal(false)}
                                >
                                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                  </span>
                                </button>
                              </div>
                              {/*body*/}
                              <div className="relative p-6 flex-auto">
                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                  <li>Relaxing tilt mechanism with lock & tension adjuster</li>
                                  <li>Lumbar Support & Neck Support</li>
                                  <li>Adjustable 3D armrest</li>
                                  <li>Reinforced Steel Frame, 360° swivels</li>
                                  <li>Safe And Silent, Petal Design</li>
                                  <li>Weight Capacity: 140 kg</li>
                                  <h1 className='text-2xl text-blue-700'>Price: 1500$</h1>
                                </p>
                              </div>
                              {/*footer*/}
                              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal(false)}
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                      </>
                    ) : null}
            </div>
                <div className="">
                <img src="./images/chair.png" className="img-fluid" alt="..."/>
                </div>
        </div>

  )
}

export default Product