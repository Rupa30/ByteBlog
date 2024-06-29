import React, {useState} from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
  ]


  return (
    // <header className='py-3 shadow'>
    //   <Container>
    //     <nav className='flex'>
    //       <div className='mr-4'>
    //         <Link to='/'>
    //           <Logo width='50px'   />
    //         </Link>
    //       </div>
    //       <ul className='flex ml-auto'>
    //         {navItems.map((item) => 
    //         item.active ? (
    //           <li key={item.name}>
    //             <button
    //             onClick={() => navigate(item.slug)}
    //             className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    //             >{item.name}</button>
    //           </li>
    //         ) : null
    //         )}
    //         {authStatus && (
    //           <li>
    //             <LogoutBtn />
    //           </li>
    //         )}
    //       </ul>
    //     </nav>
    //     </Container>
    // </header>

    <header className="py-3 shadow">
      <Container>
        <nav className="flex items-center justify-between">
          {!menuOpen && (
            <div className="mr-4">
              <Link to="/">
                <Logo width="50px" />
              </Link>
            </div>
          )}
          <div className={`hidden md:flex md:items-center md:ml-auto ${menuOpen ? 'hidden' : ''}`}>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className="my-2 md:my-0 md:mx-2 list-none">
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className="my-2 md:my-0 md:mx-2 list-none">
                <LogoutBtn />
              </li>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-700 hover:border-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <ul
            className={`flex flex-col items-center md:hidden ${ menuOpen ? 'block' : 'hidden'} w-full justify-center`}
          >
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className="my-2 md:my-0 md:mx-2">
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className="my-2 md:my-0 md:mx-2">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>

  )
}

export default Header