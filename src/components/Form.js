import React from 'react'

const Form = ({
  user1Input,
  setUser1Input,
  user2Input,
  setUser2Input,
  handleIsochroneSearch,
}) => {
  return (
    <div className='row'>
      <div className='col-md-6'>
        <form onSubmit={handleIsochroneSearch} className="my-3">
          <div className="d-flex flex-column align-item-center ">
            <input
              id="address1"
              type="text"
              className='form-control w-25'
              placeholder='Enter a location'
              value={user1Input.address1}
              onChange={(e) => setUser1Input({...user1Input, [e.target.id]: e.target.value})}
              />

            <div className="bg-white form-control w-25">
              <h6>Travel mode</h6>
              <div className="d-flex">
                <input className="form-check-input" type="radio" name="profile1" id="walking1"
                  onChange={(e) => setUser1Input({...user1Input, [e.target.name]: e.target.id})}
                  />
                <label className="form-check-label mx-1" htmlFor="walking1">
                  Walking
                </label>
              </div>

              <div className="d-flex">
                <input className="form-check-input" type="radio" name="profile1" id="cycling1"
                  onChange={(e) => setUser1Input({...user1Input, [e.target.name]: e.target.id})}
                />
                <label className="form-check-label mx-1" htmlFor="cycling1">
                  Cycling
                </label>
              </div>
              <div className="d-flex">
                <input className="form-check-input" type="radio" name="profile1" id="driving1"
                  onChange={(e) => setUser1Input({...user1Input, [e.target.name]: e.target.id})}
                />
                <label className="form-check-label mx-1" htmlFor="driving1">
                  Driving
                </label>
              </div>
            </div>

            <div className="bg-white form-control w-25">
              <h6>Maximum duration</h6>
              <div className="d-flex">
                <input className="form-check-input" type="radio" name="duration1" id="101"
                  onChange={(e) => setUser1Input({...user1Input, [e.target.name]: e.target.id})}
                  />
                <label className="form-check-label mx-1" htmlFor="101">
                  10min
                </label>
              </div>
              <div className="d-flex">
                <input className="form-check-input" type="radio" name="duration1" id="201"
                  onChange={(e) => setUser1Input({...user1Input, [e.target.name]: e.target.id})}
                />
                <label className="form-check-label mx-1" htmlFor="201">
                  20min
                </label>
              </div>
              <div className="d-flex">
                <input className="form-check-input" type="radio" name="duration1" id="301"
                  onChange={(e) => setUser1Input({...user1Input, [e.target.name]: e.target.id})}
                />
                <label className="form-check-label mx-1" htmlFor="301">
                  30min
                </label>
              </div>
              <div className="d-flex">
                <input className="form-check-input" type="radio" name="duration1" id="601"
                  onChange={(e) => setUser1Input({...user1Input, [e.target.name]: e.target.id})}
                />
                <label className="form-check-label mx-1" htmlFor="601">
                  60min
                </label>
              </div>
            </div>



            <div className="d-flex flex-column align-item-center ">
            <input
              id="address2"
              type="text"
              className='form-control w-25'
              placeholder='Enter a location'
              defaultValue={user2Input.address2}
              onChange={(e) => setUser2Input({...user2Input, [e.target.id]: e.target.value})}
              />

            <div className="bg-white form-control w-25">
              <h6>Travel mode</h6>
              <div className="d-flex">
                <input className="form-check-input" type="radio" name="profile2" id="walking2"
                  onChange={(e) => setUser2Input({...user2Input, [e.target.name]: e.target.id})}
                  />
                <label className="form-check-label mx-1" htmlFor="walking2">
                  Walking
                </label>
              </div>

              <div className="d-flex">
                <input className="form-check-input" type="radio" name="profile2" id="cycling2"
                  onChange={(e) => setUser2Input({...user2Input, [e.target.name]: e.target.id})}
                  />
                <label className="form-check-label mx-1" htmlFor="cycling2">
                  Cycling
                </label>
              </div>
              <div className="d-flex">
                <input className="form-check-input" type="radio" name="profile2" id="driving2"
                  onChange={(e) => setUser2Input({...user2Input, [e.target.name]: e.target.id})}
                  />
                <label className="form-check-label mx-1" htmlFor="driving2">
                  Driving
                </label>
              </div>
            </div>

            <div className="bg-white form-control w-25">
              <h6>Maximum duration</h6>
              <div className="d-flex">
                <input className="form-check-input" type="radio" name="duration2" id="102"
                  onChange={(e) => setUser2Input({...user2Input, [e.target.name]: e.target.id})}
                  />
                <label className="form-check-label mx-1" htmlFor="102">
                  10min
                </label>
              </div>
              <div className="d-flex">
                <input className="form-check-input" type="radio" name="duration2" id="202"
                  onChange={(e) => setUser2Input({...user2Input, [e.target.name]: e.target.id})}
                  />
                <label className="form-check-label mx-1" htmlFor="202">
                  20min
                </label>
              </div>
              <div className="d-flex">
                <input className="form-check-input" type="radio" name="duration2" id="302"
                  onChange={(e) => setUser2Input({...user2Input, [e.target.name]: e.target.id})}
                  />
                <label className="form-check-label mx-1" htmlFor="302">
                  30min
                </label>
              </div>
              <div className="d-flex">
                <input className="form-check-input" type="radio" name="duration2" id="602"
                  onChange={(e) => setUser2Input({...user2Input, [e.target.name]: e.target.id})}
                  />
                <label className="form-check-label mx-1" htmlFor="602">
                  60min
                </label>
              </div>
            </div>
            </div>

            <button type="submit" className='btn btn-primary fw-bold my-1 w-25'>Search</button>

          </div>

        </form>
      </div>

    </div>
  )
}

export default Form
