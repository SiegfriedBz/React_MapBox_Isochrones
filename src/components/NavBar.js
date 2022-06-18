const NavBar = () => {

  return (
    <div className="navbar sticky-top navbar-expand-lg bg-light">
      <div className="d-flex justify-content-between container-fluid px-5">

        <h2 className='text-dark d-flex'><em><strong>Isooo</strong></em></h2>
        <div className="d-flex">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse d-flex navbar-collapse" id="navbarSupportedContent">


        </div>

        </div>

      </div>
    </div>
  )
}

export default NavBar
