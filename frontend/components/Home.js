import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import Pagination from "react-js-pagination";
import Filters from "./layout/Filters";
import JobItem from "./job/JobItem";
import { useRouter } from "next/router";
import ll from '../public/images/workwisww.svg'
import bg from '../public/images/bg.png'


const Home = ({data}) => {

  const {jobs, count, resPerPage} = data;

  const router = useRouter();

  let {page = 1, keyword} = router.query;

  page = Number(page);

  let queryParams;
  if (typeof window !== "undefined") {
    queryParams = new URLSearchParams(window.location.search);
  }

  const handlePageClick = (currentPage) => {
    if (queryParams.has("page")) {
      queryParams.set("page", currentPage);
    } else {
      queryParams.append("page", currentPage);
    }

    router.push({
        search: queryParams.toString(),
      });
  };

  return <>


<div className="h-screen relative">
  {/* <Image
   src={ll}
   alt="pic of dog"
  //  fill={true}
   width={600}
   height={400}
   layout="responsive"
   objectFit="cover"
  //  layout="fill"
  /> */}

  <Image src={bg} alt="Picture of the author"
  //  fill={true}
   width={600}
   height={400}
   layout="responsive"
   objectFit="cover"
  //  layout="fill"

  />


  {/* <Image alt="Landscape" src="/public/images/workwisw.png" width={100} height={100}/> */}
  {/* <img src={`${process.env.PUBLIC_URL}/my-image.jpg`} /> */}
  {/* <Image src={'https://s.tmimgcdn.com/scr/53500/jobsfactory-job-portal-multipage-html5-website-template_53534-original.jpg'} alt='Home Page' width={100} height={100} /> */}
</div>

    <div className="container container-fluid">
      <div className="row">
        <div className="col-xl-3 col-lg-4">
          <Filters />{" "}
        </div>

        <div className="col-xl-9 col-lg-8 content-left-offset">
          <div className="my-5">
            <h4 className="page-title">
              {keyword
              ? `${jobs.length} Results for ${keyword}`
              : "Latest Jobs"}
            </h4>
            <Link href="/stats" legacyBehavior>
              <button className="btn btn-secondary float-right stats_btn">
                Get Topic stats
              </button>
            </Link>
            <div className="d-block">
              <Link href="/search">Go to Search</Link>
            </div>
          </div>
          {jobs && jobs.map((job)=> <JobItem key={job.id} job={job}/>)}

          {resPerPage < count && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={page}
                itemsCountPerPage={resPerPage}
                totalItemsCount={count}
                onChange={handlePageClick}
                nextPageText={"Next"}
                prevPageText={"Prev"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </>;
};

export default Home;