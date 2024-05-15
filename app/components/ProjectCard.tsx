import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
                ///greenleaf.jpgstyle={{background: `url(${imgUrl})`, backgroundSize: 'cover'}}
            >
                <div
                    className="">
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
                <Image src={imgUrl} width={500} height={280} alt={''} className="rounded-t-xl"/>
            </div>
        </div>
    );
};

export default ProjectCard;


