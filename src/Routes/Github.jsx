import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();

  return (
    <>
      <p className="text-center m-4 bg-orange-300 rounded-lg font-medium text-black  p-4 text-3xl">
        Github Profile
      </p>
      <div className="flex p-16 h-auto">
        <div className="relative h-[400px] w-[300px] rounded-md flex m-auto">
          <img
            src={data.avatar_url}
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-lg"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{data.name}</h1>
            <p className="mt-2 text-l text-gray-300 ">
              No. Of Public repos: {data.public_repos}{" "}
            </p>
            <a href={`${data.html_url}`} className="text-white py-3 ">
              {" "}
              View Profile{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/Rajsinh1921`);
  return response.json();
};
