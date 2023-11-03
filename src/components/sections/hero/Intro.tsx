import List from '@/components/ui/List';
import { Eye, History, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

interface IntroProps {}

const Intro: FC<IntroProps> = ({}) => {
    return (
        <div className="flex flex-1 flex-col md:flex-row gap-7">
            <div className="flex flex-1">
               <iframe
                    className="w-full aspect-video rounded-lg"
                    src="https://www.youtube.com/embed/0lbzmZeS-BY?si=WAYd7-w0oV7O-p2V"
                ></iframe> 
                           
            </div>
            <div className="flex flex-col justify-between flex-1 p-5 md:p-0">
                <div className="flex flex-col gap-4 ">
                    <div className="text-2xl text-highlight font-semibold">
                         An introduction
                    </div>
                    <div className="flex gap-4">
                        <List variant="info" sizes="xs">
                            <Eye size={16} />
                            Imran Ali
                        </List>
                        <List variant="info" sizes="xs">
                            <History size={16} /> 6 Month Exprience
                        </List>
                        <List variant="info" sizes="xs">
                            <ThumbsUp size={16} /> Mern Stack Developer
                        </List>
                    </div>
                </div>
                <div className="text-secondary text-sm mt-2 md:mt-0  max-w-[500px]">
                     Myself Imran Ali, on an exciting coding
                    journey! Together, we&apos;ll delve into a world of
                    knowledge, i am Mern Stack Developer (especially the backend)  , i am skilled in the range of programming languages and platforms Like React and Node js let&apos;s (but i am always intersted to work with backend) build something extraordinary, one
                    line of code at a time!
                </div>
            </div>
        </div>
    );
};

export default Intro;
