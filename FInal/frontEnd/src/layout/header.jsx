import { LogOutIcon, User } from "lucide-react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/authSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log me out!",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logoutUser());
                navigate("/");
            }
        });
    };

    return (
        <header className="w-full bg-red-900 px-6 py-4 shadow-lg flex justify-between items-center text-gray-300">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <LayoutDashboard className="w-5 h-5 text-yellow-400" />
                    <div className="text-white font-bold text-lg">Disaster Dashboard</div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full">
                    <User size={25} className="text-yellow-500" />
                </div>
                <span className="text-gray-300 font-semibold">Alvino</span>
                <button onClick={handleLogout}>
                    <LogOutIcon size={24} className="text-yellow-500" />
                </button>
            </div>
        </header>
    );
}

export default Header;
