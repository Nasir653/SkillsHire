import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import { context } from "../../Context/Store";

const CreateProducts = () => {
    const { CreateProducts } = useContext(context);


    const [formData, setFormData] = useState({
        title: "",
        details: "",
        price: "",
        category: "",
        size: "",
        color: ""


    });

    const [fileData, setFileData] = useState(null)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevInput) => ({ ...prevInput, [name]: value }));
    };

    const fileUpload = new FormData()

    fileUpload.append("image", fileData);
    fileUpload.append("title", formData.title)
    fileUpload.append("details", formData.details)
    fileUpload.append("price", formData.price)
    fileUpload.append("category", formData.category)


    return (
        <>
            <ToastContainer />
            <div className="container-fluid">
                <div className="New Collections">
                    <h1>Create New Collection Products</h1>



                    <form
                        encType="multipart/form-data"
                        className="d-flex flex-column"

                    >
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Details"
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}

                        />

                        <label htmlFor="category">Select Category:</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                Choose Category
                            </option>
                            <option value="New Collection">New Collection </option>
                            <option value="Trending"> Trending</option>
                            <option value="Mens">Mens</option>
                            <option value="Womens">Womens</option>
                        </select>






                        <label htmlFor="size">Select Size:</label>
                        <select
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                Choose size
                            </option>
                            <option value="S">Small (S)</option>
                            <option value="M">Medium (M)</option>
                            <option value="L">Large (L)</option>
                            <option value="XL">Extra Large (XL)</option>
                        </select>


                        <label htmlFor="color">Select Color:</label>
                        <select
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                Choose color
                            </option>
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                            <option value="Black">Black</option>
                        </select>





                        <input type="file" name="image" onChange={(e) => { setFileData(e.target.files[0]) }} />

                        <button type="submit" onClick={(e) => { CreateProducts(e, fileUpload) }} className="btn bg-danger">
                            Create
                        </button>
                    </form>
                </div>
            </div>

        </>
    );
};



export default CreateProducts;
