import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function ProjectDetail() {
    const params = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch(`/api/projects/${params.id}`)
            .then((res) => res.json())
            .then((data) => setProject(data.projects));
    }, [params.id]);

    return (
        <div className='max-w-[1440px]  w-full mx-auto '>
            {project ? (
                <div className='grid md:grid-cols-3 gap-10 justify-between mx-auto p-6 '>
                    <div className='col-span-2 my-44'>
                        <img
                            className='rounded-sm w-full '
                            src={project.imageUrl}
                            alt={project.name}
                        />
                    </div>

                    <div className='flex flex-col justify-center  mt-8'>
                        <h2 className='text-4xl mb-[10px] uppercase'>{project.name}</h2>
                        <p className='leading-relaxed text-2xl py-6 '>{project.description}</p>
                        <p className='text-2xl mt-4'>{project.services}</p>
                        <a
                            href='/projects'
                            className='block mt-[60px]  text-2xl font-bold hover:translate-x-[-15px] hover:text-[#f6d5ac]'
                        >
                            &larr; <span>Back to Projects</span>
                        </a>
                    </div>
                </div>
            ) : (
                <h2>Loading..</h2>
            )}
        </div>
    );
}
