import { CiSearch } from "react-icons/ci";
import UserList from "../UserList/UserList";
const Right = () => {
  return (
    <nav className="border ml-8">
      <form action="">
        <div className="flex mt-6 ">
          <div>
            <input
              className="border-2 border-black mx-4"
              type="text"
              name="name"
              id=""
              placeholder="Name"
            />
            <input
              className="border-2 border-black mx-4"
              type="date"
              name="date"
              id=""
              placeholder="Date of Birth"
            />
            <input
              className="border-2 border-black mx-4"
              type="email"
              name="email"
              id=""
              placeholder="Email"
            />
            <input
              className="border-2 border-black mx-4"
              type="text"
              name="phone"
              placeholder="Phone"
              id=""
            />
          </div>
          <CiSearch className="ml-11 text-2xl text-blue-300"></CiSearch>
        </div>
      </form>
      <UserList></UserList>
    </nav>
  );
};

export default Right;
