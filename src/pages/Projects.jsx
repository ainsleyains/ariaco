import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function Projects() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('api/projects');
                const data = await res.json();
                setProjects(data.projects);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const ele = projects.map((project) => (
        <div
            key={project.id}
            className='mb-16 hover:scale-110 transition-all duration-500 hover:text-[#FFEAD0]'
        >
            <Link
                to={`/projects/${project.id}`}
                aria-label={`View details for ${project.name} ${project.type} project`}
            >
                <img
                    className='max-w-full rounded-md'
                    src={project.imageUrl}
                    alt={project.name}
                />
                <div className='info'>
                    <p className='font-bold text-2xl my-4 uppercase'>{project.name}</p>
                    <p className={'text-l underline uppercase'}>View Details</p>
                </div>
            </Link>
        </div>
    ));

    return (
        <div className='max-w-full p-4'>
            <h1 className='font-bold text-3xl mt-28 md:ml-40'>Selected Works</h1>
            <div className='grid md:grid-cols-2 gap-4 justify-center mx-auto place-items-center mt-12 '>
                {ele}
            </div>
        </div>
    );
}
