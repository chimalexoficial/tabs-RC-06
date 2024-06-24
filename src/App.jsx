import { useEffect } from "react";
import { useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);
  const [jobs, setJobs] = useState([]);

  const fetchData = async () => {
    try {
      const req = await fetch(url);
      const res = await req.json();
      setJobs(res);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if(isLoading) {
    return <section className="jobs-center">
      <div className="loading"></div>
    </section>
  }

  return <section className="jobs-center">
    <BtnContainer 
    jobs={jobs} 
    currentItem={currentItem} 
    setCurrentItem={setCurrentItem} />
    
    <JobInfo 
    jobs={jobs} 
    currentItem={currentItem}/>
  </section>;
};
export default App;
