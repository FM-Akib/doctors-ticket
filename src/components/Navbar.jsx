import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { useContext } from 'react';
import { AuthContext } from '../Authentication/Authprovider';


const Navbar = () => {

	const {user,logOut}=useContext(AuthContext);


    return (
    <>

<div className="navbar bg-gray-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
	<li><Link to="/addDoctors">Add+</Link></li>
        <li>
		<a>Appoinment</a>
          <ul className="p-2">
            <li><a>Online</a></li>
            <li><Link to="/appointment">Offline</Link></li>
          </ul>
        </li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <Link to="/" className="btn hover:bg-slate-50 btn-ghost text-xl">
		<img className="h-full" src={logo} alt="" />
	</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
	<li><Link to="/addDoctors">Add+</Link></li>
      <li>
        <details>
          <summary>Appoinment</summary>
          <ul className="p-2">
		<li><a>Online</a></li>
        <li><Link to="/appointment">Offline</Link></li>
          </ul>
        </details>
      </li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
	{
  user ? <div className="flex items-center">
			<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-1">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
        </div>
              
			<Link to="/">
			<button onClick={logOut} type="button" className="hidden px-6 py-2 font-semibold rounded lg:block bg-amber-600 text-gray-50">Log out</button>
			</Link>
			
			</div>:<>
			
			<Link to="/login">
			<button type="button" className="hidden px-6 py-2 font-semibold rounded lg:block bg-amber-600 text-gray-50">Log in</button>
			</Link>
			</>
		}	
  </div>
</div>


    {/* <header className="p-4 bg-gray-100 text-gray-800">
	<div className="container flex justify-between h-16 mx-auto">
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-amber-600 border-amber-600">Appoinment</a>
			</li>
			<li className="flex">
				<Link to="/addDoctors" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Add+</Link>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
			</li>
		</ul>
		<Link to="/" aria-label="Back to homepage" className="flex items-center ">
			<img className="h-full" src={logo}/>
		</Link>
		<div className="flex items-center md:space-x-4">
			<div className="relative">
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
						<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-800">
							<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
						</svg>
					</button>
				</span>
				<input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50" />
			</div>

        <div>
		{
			user ? <div className="flex items-center">
			<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-1">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
        </div>
              
			<Link to="/">
			<button onClick={logOut} type="button" className="hidden px-6 py-2 font-semibold rounded lg:block bg-amber-600 text-gray-50">Log out</button>
			</Link>
			
			</div>:<>
			
			<Link to="/login">
			<button type="button" className="hidden px-6 py-2 font-semibold rounded lg:block bg-amber-600 text-gray-50">Log in</button>
			</Link>
			</>
		}	
		</div>    
        
              
			





		</div>
		<button title="Open menu" type="button" className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
    </header> */}
            
        </>
    );
};

export default Navbar;