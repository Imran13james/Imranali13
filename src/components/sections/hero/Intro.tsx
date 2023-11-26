import List from '@/components/ui/List';
import { Eye, Heart, HeartHandshake, History, ThumbsUp, Timer, TimerIcon } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

interface IntroProps {}

const Intro: FC<IntroProps> = ({}) => {
    return (
        <div className="flex flex-1 flex-col md:flex-row gap-7">
            <div className="flex flex-1">
               <iframe
                    className="w-full aspect-video rounded-lg"
                    src="https://www.youtube.com/embed/sW9npZVpiMI?si=3iZxDLE7_I83d23C"
                ></iframe> 
                           
            </div>
            <div className="flex flex-col justify-between flex-1 p-5 md:p-0">
                <div className="flex flex-col gap-4 ">
                    <div className="text-2xl text-highlight font-semibold">
                         An introduction
                    </div>
                    <div className="flex gap-4">
                        <List variant="info" sizes="xs">
                            <HeartHandshake size={16} />
                            Back-End
                        </List>
                        <List variant="info" sizes="xs">
                            <Timer size={16} /> 6 Month Exprience
                        </List>
                        <List variant="info" sizes="xs">
                            <ThumbsUp size={16} /> Mern Stack Developer
                        </List>
                    </div>
                </div>
                <div className="text-secondary text-sm mt-2 md:mt-0  max-w-[500px]">
                The enthusiastic MERN Stack developer is inspired by backend projects and system design. Specializing in reaction, node .js, has a keen interest in developing strong backend solutions. Dedicated to mastering system design principles to create scalable and efficient applications. To find opportunities to contribute and master backend development and system design efforts.
                </div>
            </div>
        </div>
    );
};

export default Intro;
