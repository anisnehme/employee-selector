import Link from 'next/link'

function NavBarLinks() {
    return ( 
        <ul className=" hidden  md:flex gap-4 text-slate-600 font-bold ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/construction">Contruction</Link>
        </li>
        <li>
          <Link href="/accounting">Accounting</Link> 
        </li>
        <li>
          <Link href="/doctors">Doctors</Link> 
        </li>
        <li>
          <Link href="/mechanics">Mechanics</Link> 
        </li>
      </ul>
     );
}

export default NavBarLinks;