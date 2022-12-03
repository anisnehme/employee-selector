import LogoSvg from './../icons/LogoSvg'

function NavBarBranding({className, ...props}) {
    return (
        <figure className='flex items-center gap-1'>
        <LogoSvg className="fill-red-500 w-6"/>
        <figcaption>
            <h1 className='text-slate-600 font-bold'>Next Best Dev</h1>
        </figcaption>
    </figure>
      );
}

export default NavBarBranding;