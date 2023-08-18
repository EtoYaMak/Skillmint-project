import React from "react";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
/* import { toast } from "react-toastify"; */
import JobForm from "../components/JobForm";
const Post = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      /* navigate("/login"); */
      /* toast.error("Job Posting is for Employers only"); */
    }
  }, [user, navigate]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-fit">
      <div className="pb-1 select-none h-fit pt-10">
        {user ? (
          user.isActive ? (
            <>
              <section className="text-center h-it ">
                <h1 className="flex-wrap max-[520px]:text-3xl text-4xl font-extrabold text-[#d4d7d7] w-full">
                  Welcome{" "}
                  <span className="text-[#d0333c]/80 w-full">{user.name}</span>
                </h1>
                <p className="text-xl pt-2 pb-4 uppercase text-[#aba6a6]/80 font-semibold">
                  Use the form below to submit a job.
                </p>
              </section>

              <JobForm />
            </>
          ) : (
            <div className="text-center h-[50vh] flex justify-center items-center">
              <p className="text-2xl text-white tracking-[0.15em]">
                Your account is not activated. Please activate your account to
                post a job.
              </p>
            </div>
          )
        ) : (
          <div className="text-center h-[50vh] flex justify-center items-center">
            <p className="text-2xl text-white tracking-[0.15em]">
              Want to post a job?{" "}
              <Link
                to="/register"
                className="text-[#d0333c] hover:text-[#aba6a6] hover:border-b-2 border-[#d0333c]"
              >
                Click here to register as a job poster
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
