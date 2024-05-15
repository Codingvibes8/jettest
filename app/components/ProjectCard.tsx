import React from 'react';
import Link from 'next/link';
import { FaCode } from "react-icons/fa";
import { MdPreview } from "react-icons/md";

type ProjectCardProps = {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl: string;
    previewUrl: string;
};
const ProjectCard: React.FC<ProjectCardProps> = ({imgUrl, title, description, gitUrl, previewUrl,}) => {
    return (
        <div>
            <div
                className="h-52 md:h-72 rounded-t-xl relative group"
                style={{background: `url(${imgUrl})`, backgroundSize: 'cover'}}
            >
                <div
                    className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <Link href={gitUrl}
                          className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                        <FaCode
                            className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
                    </Link>
                    <Link href={previewUrl}
                          className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                        <MdPreview
                            className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
                    </Link>
                </div>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;

//code-bracketIcon
// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
//      className="w-6 h-6">
//     <path strokeLinecap="round" strokeLinejoin="round"
//           d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
// </svg>
