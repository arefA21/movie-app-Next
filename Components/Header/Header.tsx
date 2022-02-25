import { useState } from "react";
import { IMovie } from "../../interfaces/IMovie";

interface IProps {
  movies: {
    Search: IMovie[];
  };
}
const Header = ({ moviesTitle, setMoviesTitle, search }: any) => {
  return (
    <div className="navbar  shadow-lg bg-neutral text-neutral-content rounded-box h-24">
      <div className="flex-none hidden lg:flex"></div>
      <div className="flex-1 hidden px-2 mx-2 lg:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="55px"
          height="55px"
        >
          <path
            fill="#F44336"
            d="M5 18c.7 0 1.3 0 2 0 0 4.1 0 8.1 0 12.2-.8.1-1.6.2-2.3.3-1-2.5-2.7-6.8-2.7-6.8S2 28 2 30.8c.4 0-.2 0-2 .3 0-4.3 0-8.7 0-13 .8 0 2 0 2 0l3 7.3C5 25.4 5 20.8 5 18zM14.7 20c0-.6 0-1.4 0-2-1.9 0-3.8 0-5.7 0 0 4 0 8 0 12 1.9-.2 3.8-.4 5.7-.6 0-.6 0-1.4 0-2-1.2.1-2.4.1-3.7.4 0-1.1 0-1.7 0-2.8.9 0 2.1 0 3 0 0-.6 0-1.4 0-2-.9 0-2.1 0-3 0 0-1.1 0-1.9 0-3C11.6 20.1 14.2 20.1 14.7 20zM16 20c.1 0 1.9 0 2 0 0 3.2 0 6 0 9.2.7 0 1.3 0 2-.1 0-3.2 0-5.9 0-9.1.7 0 1.3 0 2 0 0-.6 0-1.4 0-2-2.1 0-3.9 0-6 0C16 18.6 16 19.4 16 20zM28.6 18c-1.9 0-3.7 0-5.6 0 0 3.8 0 7.2 0 11 .2 0 .4 0 .6 0 .4 0 .9 0 1.4 0 0-1.6 0-2.4 0-4 .1 0 2.4 0 2.7 0 0-.6 0-1.4 0-2-.3 0-2.6 0-2.7 0 0-1 0-2 0-3 .2 0 3.1 0 3.6 0C28.6 19.5 28.6 18.6 28.6 18zM32 27.5c0-3.3 0-6.2 0-9.5-.7 0-1.3 0-2 0 0 3.8 0 7.4 0 11.2 1.8.1 3.6.2 5.4.4 0-.6 0-1.3 0-1.9C34.3 27.6 33.1 27.5 32 27.5zM37 29.7c.7.1 1.3.1 2 .2 0-4 0-7.9 0-11.9-.7 0-1.3 0-2 0C37 22 37 25.8 37 29.7zM45.4 24.2c.9-2 1.7-4 2.6-6.1-.7 0-1.5 0-2.2 0-.5 1.3-.9 2.2-1.4 3.4-.5-1.3-.8-2.2-1.3-3.4-.7 0-1.5 0-2.2 0 .8 2 1.5 4 2.4 6.1-.9 2-1.7 4-2.6 6 .7.1 1.4.2 2.1.3.5-1.3 1-2.2 1.5-3.5.5 1.4 1 2.4 1.5 3.8.7.1 1.6.2 2.3.3C47.1 28.7 46.2 26.3 45.4 24.2z"
          />
        </svg>
      </div>
      <div className="flex-1 lg:flex-none">
        <div className="form-control">
          <input
            value={moviesTitle}
            onChange={(e) => setMoviesTitle(e.target.value)}
            type="text"
            placeholder="Search"
            className="input input-ghost focus:ring focus:ring-violet-300"
          />
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={()=>search()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-none"></div>
    </div>
  );
};

export default Header;
