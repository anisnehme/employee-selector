import {ContentPageLayout} from './../components/layouts'
import {EmployeeCard} from './../components/employees'
import { getEmployees } from '../libs/getEmployees';

function AccountingPage({emps}) {
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
export default AccountingPage;

AccountingPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout  type='accountants'  title='Looking to make money?'  tagline='choose the one to make you money'>
        {page} 
      </ContentPageLayout>
    )
  }

  export async function getStaticProps(content){
    const emps = await getEmployees()
    
    const backEnd = emps.filter(emp=> emp.type==='accountants')
    console.log(backEnd)
   return{
    props:{
     emps:backEnd
    }
   }
   }