import { toast } from "sonner";
import { basicBtnClassName } from "../../constants";
import {
  useDeleteUserMutation,
  useDemoteUserMutation,
  usePromoteUserMutation,
} from "../../redux/features/user/userApi";
import Swal from "sweetalert2";

export type TUser = {
  name: string;
  email: string;
  role: string;
  profile_picture: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

const UserManagementTable = ({ user }: { user: TUser }) => {
  const [deleteUser] = useDeleteUserMutation();
  const [promoteUser] = usePromoteUserMutation();
  const [demoteUser] = useDemoteUserMutation();

  const handleDelete = async (email: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const deleteResult = await deleteUser(email).unwrap();

          Swal.fire({
            title: "Deleted!",
            text: `${deleteResult.message}`,
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
      toast.warning("Something went wrong..", { duration: 3000 });
    }
  };
  const handlePromote = async (email: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to promote this user",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const promoteResult = await promoteUser(email).unwrap();

          Swal.fire({
            title: "Promoted!",
            text: `${promoteResult.message}`,
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
      toast.warning("Something went wrong..", { duration: 3000 });
    }
  };
  const handleDemote = async (email: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to demote this user",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const demoteResult = await demoteUser(email).unwrap();

          Swal.fire({
            title: "Demoted!",
            text: `${demoteResult.message}`,
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
      toast.warning("Something went wrong..", { duration: 3000 });
    }
  };

  return (
    <>
      <tr className="hover">
        <td className="min-w-40">{user.name}</td>
        <td className="min-w-40">{user.email}</td>
        <td>
          {user.role === "admin" && (
            <button
              onClick={() => handleDemote(user.email)}
              className={`${basicBtnClassName} bg-sky-500 duration-300 text-white hover:bg-sky-600 
            } `}
            >
              Demote
            </button>
          )}
          {user.role === "user" && (
            <button
              onClick={() => handlePromote(user.email)}
              className={`${basicBtnClassName} bg-sky-500 duration-300 text-white hover:bg-sky-600 
            } `}
            >
              Promote
            </button>
          )}
        </td>
        <td>
          {user.role === "admin" && (
            <button
              onClick={() => handleDelete(user.email)}
              className={`${basicBtnClassName} bg-red-600 duration-300 text-white hover:bg-red-900`}
            >
              Delete
            </button>
          )}
          {user.role === "user" && (
            <button
              onClick={() => handleDelete(user.email)}
              className={`${basicBtnClassName} bg-red-600 duration-300 text-white hover:bg-red-900`}
            >
              Delete
            </button>
          )}
        </td>
      </tr>
    </>
  );
};
export default UserManagementTable;
