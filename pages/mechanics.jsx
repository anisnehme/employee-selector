import {ContentPageLayout} from './../components/layouts'
import {EmployeeCard} from './../components/employees'
import { getEmployees } from '../libs/getEmployees';

function MechanicPage({emps}) {
    return (    
        <>
        { emps.map(emps=>  <EmployeeCard key={emps.uid} 
         fullName={emps.fullName} 
         avatar={emps.avatar}
         jobTitle={emps.jobTitle}
         experience={emps.experience}
         availability={emps.availability}
         uid={emps.uid}
         />
         )}
        </>
    );
}
export default MechanicPage;

MechanicPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout  type='mechanics'  title='Did you buy a german vehicle?'  tagline='mechanics with a wide range of skills'>
        {page} 
      </ContentPageLayout>
    )
  }

  export async function getStaticProps(content){
    const emps = await getEmployees()
    
    const mechanics = emps.filter(emp=> emp.type==='mechanics')
    console.log(mechanics)
   return{
    props:{
     emps:mechanics
    }
   }
   }