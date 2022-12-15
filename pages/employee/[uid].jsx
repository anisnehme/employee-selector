import {EmployeeBioLayout} from '../../components/layouts';
import {BioHeader, BioNavigation, BioTopic} from "../../components/employee-bio";
import { getEmployees } from "../../libs/getEmployees";
import { generateRandomTitle } from "../../libs/generateRandomTitle.js";
function SingleEmployeePage({ avatar, fullName, city, heading, ...bio}) {
  return (
    <div className="max-w-2xl mx-auto py-20">
      <BioNavigation avatar={avatar} fullName={fullName} />
      <BioHeader city={city} fullName={fullName} heading={heading} />
      <BioTopic topic="About Me" />
    </div>
  );
}

export default SingleEmployeePage;

export async function getStaticPaths() {
  const emps = await getEmployees();
  const paths = emps.map((emp) => ({ params: { uid: emp.uid } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const emps = await getEmployees();
  const emp = emps.find((emp) => emp.uid === params.uid);
  const bio = { ...emp, heading: generateRandomTitle() };

  return {
    props: bio,
  };
}

SingleEmployeePage.getLayout = function getLayout(page) {
    return (
      <EmployeeBioLayout>
        {page} 
      </EmployeeBioLayout>
    )
  }
