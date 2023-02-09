const Content1 =()=>{
    return(
        <>
        <div>
            <div className="flex gap-8 mx-12 my-8 lg:ml-36 xl:ml-72 2xl:pl-80 2xl:my-16 ">
                <div className="md:flex md:gap-8 ">
                <h1 className="my-2 text-sm  hover:text-blue-400 ">FEATURED</h1>
                <h1 className="my-2 text-sm  hover:text-blue-400">WRITING</h1>
                <h1 className="my-2 text-sm  hover:text-blue-400">PRE-PRODUCTION</h1>
                </div>
                <div className="md:flex md:gap-8">
                <h1 className="my-2 text-sm   hover:text-blue-400">POST-PRODUCTION</h1>
                <h1 className="my-2 text-sm  hover:text-blue-400">VIDEO EDITING</h1>
                <h1 className="my-2 text-sm  hover:text-blue-400">ANIMATION</h1>
                </div>
            </div>
            <div className="">
                <div className="lg:flex justify-center" >
                <div className="flex lg:ml-2">
                <div><img width={200} height={200} className="md:h-[400px] md:w-[400px] lg:h-[300px] lg:w-[300px]"  src="/images/writing.jpg" alt="writing" /><h1 className="ml-8 text-xl md:ml-32 md:text-2xl hover:text-blue-500 lg:ml-16">Blogs&Articles</h1></div>
                <div><img width={200} height={200} className="md:h-[400px] md:w-[400px] lg:h-[300px] lg:w-[300px]" src="/images/pre-production.jpg" alt="writing" /><h1 className="ml-8 text-xl md:ml-32 md:text-2xl hover:text-blue-500 lg:ml-16">Pre-Production</h1></div>
                </div>
                <div className="flex lg:ml-2">
                <div><img width={200} height={200} className="mt-12 md:h-[340px] md:w-[400px] lg:h-[230px] lg:w-[300px]" src="/images/post-production.jpg" alt="writing" /><h1 className="ml-8 text-xl mt-4 md:ml-32 md:text-2xl hover:text-blue-500 lg:ml-16">Post-Production</h1></div>
                <div><img width={200} height={200} className="md:h-[400px] md:w-[400px] lg:h-[300px] lg:w-[300px]" src="/images/video_editing.jpg" alt="writing" /><h1 className="ml-8 text-xl md:ml-32 md:text-2xl hover:text-blue-500 lg:ml-16">Video Editing</h1></div>
                </div></div>
                <div className="flex lg:flexz justify-center">
                <div><img width={160} height={180} className="mt-4 md:h-[350px] md:w-[400px] lg:h-[300px] lg:w-[300px]" src="/images/animation.jpg" alt="writing" /><h1 className="ml-8 text-xl md:ml-32 md:text-2xl hover:text-blue-500 lg:ml-16">3D Animation</h1></div>
                </div>
                


            </div>



        </div>
        
        
        
        
        </>
    );
};

export default Content1;