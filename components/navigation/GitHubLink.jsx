import Link from 'next/link'
import {GitHubIcon} from './../icons/'
function GitHubLink() {
    return ( 
      <Link href="https://github.com/anisnehme/employee-selector"  passHref={true} target="_blank"> <GitHubIcon /></Link>
     );
}

export default GitHubLink;