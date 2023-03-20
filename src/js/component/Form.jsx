import React from 'react'; 

const Form = () => {

    return (
        <form >
            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" id="full_name" placeholder="Full Name" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" aria-describedby="nameHelp" />
            </div>
            <div className="mb-3">
                <label className="form-label" >Phone</label>
                <input type="text" className="form-control" id="phone" placeholder="Enter Phone" aria-describedby="phonelHelp" />
            </div>
            <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="Enter address" aria-describedby="addresslHelp" />
            </div>
            <input type="submit" className="btn btn-primary" value="send" />
        </form>
    )
}; 

export default Form; 