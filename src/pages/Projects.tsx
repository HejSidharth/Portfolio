
export default function Projects() {
  return (
<div className='flex flex-col mt-10 sm:h-auto h-screen sm:justify-start justify-center mb-10'>
      <div className='text-4xl font-bold mt-20 ml-0 sm:ml-12 flex justify-center sm:justify-start'>Projects</div>
      <div className='flex flex-col sm:flex-row mt-5 justify-start sm:justify-start items-center sm:items-start gap-5'>
      <a href="https://taskmon.netlify.app">
      <div className="ml-0 sm:ml-5 card w-96 bg-base-100 shadow-xl  h-52 hover:bg-base-200 transition-colors duration-200 indicator">
        <div className="card-body">
          <h2 className="card-title">
            Taskmon 
            <svg className='fill-current' height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
            </svg>    
            </h2>
          <p>A user centric task management website!</p>
          <div className="card-actions justify-end mt-2">
            <div className="badge badge-neutral">JavaScript</div> 
            <div className="badge badge-neutral">Tailwind</div>
            <div className="badge badge-neutral">API</div>
      </div>
    </div>
  </div>
  </a>
        <a href="https://github.com/HejSidharth/HonestWeather">
      <div className="ml-0 sm:ml-5 card w-96 bg-base-100 shadow-xl  hover:bg-base-200 transition-colors duration-200 h-52 indicator">
        <div className="card-body">
          <h2 className="card-title">
            HonestWeather 
            <svg className='fill-current' height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
            </svg>    
            </h2>
          <p>An interactive weather application that gives you weather information using OpenWeather and OpenAI GPT 4.0 Turbo</p>
          <div className="card-actions justify-end mt-2">
            <div className="badge badge-neutral">JavaScript</div> 
            <div className="badge badge-neutral">HTML</div>
            <div className="badge badge-neutral">CSS</div>
      </div>
    </div>
  </div>
  </a>
  <div className="ml-0 sm:ml-5 card w-96 bg-base-100 shadow-xl  hover:bg-base-200 transition-colors h-52 duration-200">
        <div className="card-body">
          <h2 className="card-title">
            Inclusive Stem Library
            <svg className='fill-current' height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
            </svg>          
            </h2>
          <p>An online library focused on providing accessible content for people with disabilities</p>
          <div className="card-actions justify-end mt-2">
            <div className="badge badge-neutral">Typescript</div> 
            <div className="badge badge-neutral">CSS</div>
            <div className="badge badge-neutral">Figma</div>
      </div>
    </div>
  </div>
  </div>
  </div>  
  )
}
