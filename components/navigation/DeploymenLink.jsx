import Link from 'next/link'
import {DeployIcon} from '../icons'
function DeploymentLink() {
    return ( 
      <Link href="https://next-best-dev-ten.vercel.app/"  passHref={true} target="_blank"> <DeployIcon/></Link>
     );
}

export default DeploymentLink;