import {ContentPageLayout} from './../components/layouts'
import {EmployeeCard} from './../components/employees'
import { getEmployees } from '../libs/getEmployees';

function DocotorPage({emps}) {
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
export default DocotorPage;

DocotorPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout  type='docotors'  title='Looking to sell your kidney?'  tagline='choose the best doctor for your needs'>
        {page} 
      </ContentPageLayout>
    )
  }

  export async function getStaticProps(content){
    const emps = await getEmployees()
    
    const backEnd = emps.filter(emp=> emp.type==='docotors')
    console.log(backEnd)
   return{
    props:{
     emps:backEnd
    }
   }
   }