import Link from 'next/link'

function NavBarLinks() {
    return ( 
        <ul className=" hidden  md:flex gap-4 text-slate-600 font-bold ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/frontend">Contruction</Link>
        </li>
        <li>
          <Link href="/uiux">Accounting</Link> 
        </li>
        <li>
          <Link href="/fullstack">Docotors</Link> 
        </li>
        <li>
          <Link href="/backend">Mechanics</Link> 
        </li>
      </ul>
     );
}

export default NavBarLinks;