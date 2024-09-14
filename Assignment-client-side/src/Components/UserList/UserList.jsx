import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Fill } from "react-icons/ri";
const UserList = () => {
  return (
    <div className="overflow-x-auto mt-14">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Dath Of Birth</th>
          
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
               
              </div>
            </td>
            <td>
              Ramim
              
            </td>
            <td>Jayedjb76@gmail.com</td>
            <td>01777423222</td>
          
            <th className="flex mt-4">
              <FiEdit className="mr-3 text-2xl" ></FiEdit>
              <RiDeleteBin6Fill className="text-2xl"></RiDeleteBin6Fill>
            </th>
          </tr>
          
        </tbody>
       
      </table>
    </div>
  );
};

export default UserList;
