import Form from "../components/Form"
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen w-full bg-amber-100 flex items-center justify-center">
    <div className="absolute right-5 top-5 text-white bg-amber-500 p-2 rounded-full cursor-pointer transition-all hover:bg-amber-600">
        <Link to="/rdv"><FaCalendar /></Link>
    </div>
    <Form />
    </div>
  )
}
