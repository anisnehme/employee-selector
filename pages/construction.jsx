import {ContentPageLayout} from './../components/layouts'
import {EmployeeCard} from './../components/employees'
import { getEmployees } from '../libs/getEmployees';

function ConstructionPage({emps}) {
    return (    
        <>
        { emps.map(emps=>  <EmployeeCard key={emps.uid} 
         fullName={emps.fullName} 
         avatar={emps.avatar}
         jobTitle={emps.jobTitle}
         experience={emps.experience}
         availability={emps.availability}
         />
         )}
        </>
    );
}
export default ConstructionPage;

ConstructionPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout  type='construction workers'  title='What are you building?'  tagline='choose a construction worker for your needs'>
        {page} 
      </ContentPageLayout>
    )
  }

  export async function getStaticProps(content){
    const emps = await getEmployees()
    
    const backEnd = emps.filter(emp=> emp.type==='construction')
    console.log(backEnd)
   return{
    props:{
     emps:backEnd
    }
   }
   }