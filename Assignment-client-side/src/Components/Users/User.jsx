const User = () => {
  const handeluser =  event =>{
    event.preventDefault();
    const form =  event.target;
    const name =  form.name.value;
    const bdate = form.bdate.value;
    const email =  form.email.value;
    const phone =  form.phone.value;
    const photo =  form.photo.value;
    const newUser =  {name,bdate,email,phone,photo};
    console.log(newUser);

    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data =>console.log(data))


  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handeluser}>
            <div className="form-control">
              
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
             
              <input
                type="date"
                name="bdate"
                placeholder="Date Of irth"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
          
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
             
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control">
             
             <input
               type="text"
               name="photo"
               placeholder="Enter your photo URL"
               className="input input-bordered"
               required
             />
             
           </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
