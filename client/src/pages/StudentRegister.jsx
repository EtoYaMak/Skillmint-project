import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Sregister, Sreset } from "../features/students/studentSlice";
import Spinner from "../components/Spinner";

function StudentRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { student, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.students
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || student) {
      navigate("/");
    }

    dispatch(Sreset());
  }, [student, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const studentData = {
        name,
        email,
        password,
      };

      dispatch(Sregister(studentData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="min-h-screen max-h-fit h-full w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-evenly items-center mt-10 gap-4  mx-auto max-w-[960px]">
          {/* Navigate through forms*/}
          <div
            className="max-w-1/4 w-3/4 md:w-1/2 h-[40vh] justify-center rounded-3xl
            ctext-2xl font-inter px-4 py-14 flex flex-col select-none"
          >
            <p className="leading-tight tracking-wide bg-transparent">
              Register to Start Posting Jobs
            </p>
            <Link
              to="/register"
              className="text-3xl font-inter font-bold text-[#d4d7d7] mb-10 bg-transparent hover:text-[#d0333c]"
            >
              Employer Register
            </Link>
            <p className="text-right tracking-wide bg-transparent">
              Login to Start Posting Jobs
            </p>
            <Link
              to="/login"
              className="text-3xl font-inter text-right font-bold text-[#d4d7d7] bg-transparent hover:text-[#d0333c]"
            >
              Employer Login
            </Link>
          </div>

          <section className="my-10  rounded-md p-2">
            <p className="text-3xl flex gap-2 font-Inter font-light m-2 p-2 text-white bg-transparent">
              <FaUser className="bg-inherit" />
              Job Seeker Register
            </p>
            <form onSubmit={onSubmit} className="bg-transparent">
              <div className="form-group pb-2 grid bg-inherit">
                <label className="text-white text-2xl font-Inter p-2 bg-inherit">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control input bg-white/5 text-xl text-white "
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Enter your name"
                  onChange={onChange}
                />
              </div>

              <div className="form-group pb-2 grid bg-inherit">
                <label className="text-white text-2xl font-Inter p-2 bg-inherit">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control input bg-white/5 text-xl text-white"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={onChange}
                />
              </div>

              <div className="form-group pb-2 grid bg-inherit">
                <label className="text-white text-2xl font-Inter p-2 bg-inherit">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control input bg-white/5 text-xl text-white"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter password"
                  onChange={onChange}
                />
              </div>

              <div className="form-group pb-2 grid bg-inherit">
                <label className="text-white text-2xl font-Inter p-2 bg-inherit">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="input bg-white/5 text-xl text-white"
                  id="password2"
                  name="password2"
                  value={password2}
                  placeholder="Confirm password"
                  onChange={onChange}
                />
              </div>
              <div className="form-group w-max mx-auto bg-inherit my-2">
                <button
                  type="submit"
                  className="btn btn-outline text-[#000]/80 border-white/10 bg-white/80 hover:bg-[#d0333c] hover:border-[#d4d7d7] hover:text-[#d4d7d7]
                  flex mx-auto text-xl font-Inter tracking-widest w-[10em]"
                >
                  Register
                </button>
              </div>
              <div className="flex flex-col justify-center items-center bg-inherit">
                <span className="mt-2 text-xl font-boldgap-2 bg-transparent text-white font-Inter pb-2">
                  Already have an account?
                </span>
                <Link to="/loginS" className="my-2">
                  <button
                    className="btn btn-outline text-[#fff]/80 border-[#d0333c]/10 hover:bg-[#fff]/90 hover:border-[#d0333c] hover:text-[#d0333c]
               flex mx-auto text-xl font-Inter tracking-widest w-[10em]"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default StudentRegister;
