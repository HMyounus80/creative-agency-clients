import React, { useState } from 'react';
import Sidebar from '../../CustomerOrder/Sidebar/Sidebar';


const AddService = () => {
    const [serviceInfo, setServiceInfo] = useState({})
    const [file, setFile] = useState(null)
    
    const handleBlur = e => {
        const newService = {...serviceInfo};
        newService[e.target.name] = e.target.value;
        setServiceInfo(newService)

    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

   
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', serviceInfo.tile);
        formData.append('description', serviceInfo.description);

        fetch('http://localhost:5000/adminAddService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="container-fluid row">
        <div className="col-md-3">
            <Sidebar></Sidebar>
        </div>
             
            <div className="col-md-8 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add Service</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Service Title</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload Icon</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Icon" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;