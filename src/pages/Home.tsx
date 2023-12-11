import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="hero bg-base-100 flex flex-col items-center justify-start mt-20 overflow-hidden">
      <div className="text-center m-10 mt-20 justify-center mb-20">
        <h1 className="text-6xl font-bold mt-20">Hi, I am <span className='[&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]'>Sidharth Hejamadi</span></h1>
        <p className="text-xl mt-3 font-light ">A Computer Scientist from Champaign</p>
        <Link to="/about">
        <button className='btn btn-neutral mt-3'>Learn More</button>
        </Link>
      </div>
    </div>
  );
}