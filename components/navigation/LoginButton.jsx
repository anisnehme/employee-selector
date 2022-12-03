import Link from 'next/link'
function LoginButton({className, ...props}) {
    return ( 
        <Link href="signin" className={`hidden ${className} w-[130px] text-slate-600 font-bold`}>
            Login
        </Link>

     );
}

export default LoginButton; 