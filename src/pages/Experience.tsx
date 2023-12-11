
export default function Experience() {
  return (
<div className='flex flex-col mt-10 sm:justify-center'>
      <div className='text-4xl font-bold mt-20 ml-12 flex justify-start'>Experience</div>
      <div className='flex mt-5 justify-start'>
      <a href="https://uiuc.hack4impact.org/">
      <div className="ml-10 card w-96 bg-base-100 shadow-xl  hover:bg-base-200 transition-colors duration-200 indicator">
        <div className="card-body">
          <h2 className="card-title">
            Hack4Impact 
            <svg className='fill-current' height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
            </svg>    
            </h2>
          <p>Worked on building applications for social good.</p>
          <div className="card-actions justify-end mt-2">
            <div className="badge badge-neutral">Typescript</div> 
            <div className="badge badge-neutral">Figma</div>
      </div>
    </div>
  </div>
  </a>
  <a href="https://www.linkedin.com/in/sidharth-hejamadi/">
  <div className="ml-10 card w-96 bg-base-100 shadow-xl  hover:bg-base-200 transition-colors duration-200">
        <div className="card-body">
          <h2 className="card-title">
            APS Data Technologies
            <svg className='fill-current' height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
            </svg>          
            </h2>
          <p>Worked on designing and building a utility app for the city of Aurora</p>
          <div className="card-actions justify-end mt-2">
            <div className="badge badge-neutral">Flutter</div> 
            <div className="badge badge-neutral">Dart</div>
            <div className="badge badge-neutral">Figma</div>
      </div>
    </div>
  </div>
  </a>
  </div>
  </div>
)
}
