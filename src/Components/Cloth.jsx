import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cloth = ({ cloth,setCloths,cloths }) => {
  console.log(cloth);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cloth/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            
            if (data.deletedCount > 0) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                const remaining = cloths.filter(f => f._id !== _id)
                setCloths(remaining)
            }
            
          });
      }
    });
  };
  return (
    <div className="hero bg-base-200 min-h-screen flex">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={cloth.photo}
          className="max-w-sm rounded-lg shadow-2xl w-[200px]"
        />
        <div>
          <h1 className="text-xl font-bold">{cloth.name}</h1>
          <p className="py-6">{cloth.details}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
      <div className="flex flex-col">
        <button className="btn">View</button>
        <br />
        <button className="btn bg-black text-white">
          <Link to={`updateCloth/${cloth._id}`}>Edit</Link>
        </button>
        <br />
        <button
          onClick={() => handleDelete(cloth._id)}
          className="btn  bg-red-500 font-bold text-white hover:text-black"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Cloth;
