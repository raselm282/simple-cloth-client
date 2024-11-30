import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCloth = () => {
    const navigate = useNavigate()
const clothData = useLoaderData()
const  {_id,name,quantity,supplier,test,category,details,photo} = clothData
// console.log(clothData);
const handleUpdateCloth = (e)=>{
    e.preventDefault()
        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const test = form.test.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const newCloth = {name,quantity,supplier,test,category,details,photo}
        console.log(newCloth);
        fetch(`http://localhost:5000/cloth/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCloth)
        })
        .then(res=>res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                  title: 'Update!',
                  text: 'Your Cloth Updated Successfully',
                  icon: 'success',
                  confirmButtonText: 'Ok'
                })
                navigate('/')
              }
          
        })
}
  return (
    <div>
      <div>
        <div className="bg-[#F4F3F0] p-24">
          <h2 className="text-3xl text-center font-bold">
            Updated Cloth of {name}
          </h2>
          <form onSubmit={handleUpdateCloth} className="card-body">
            {/* coffee input name */}
            <div className="md:flex gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Cloth Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Cloth Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">
                    Available Quantity
                  </span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            {/* coffee input Supplier Test */}
            <div className="md:flex gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Supplier</span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Supplier"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Test</span>
                </label>
                <input
                  type="text"
                  name="test"
                  defaultValue={test}
                  placeholder="Test"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            coffee input Category Details
            <div className="md:flex gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Category"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Details"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            {/* coffee input Photo URL */}
            <div>
              <div className="form-control md:w-full">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value={"Update Coffee"}
                className="btn btn-warning text-2xl"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCloth;
