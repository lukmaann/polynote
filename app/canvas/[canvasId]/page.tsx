import Canvas from "./_components/Canvas";
import Room from "@/components/room";
import Loading from "./_components/loading";


interface CanvasPageProps {
    params: {
        canvasId: string;
    }
}

const CanvasPage = ({ params }: CanvasPageProps) => {

    // return <Loading/>
    return (
        <Room roomId={params.canvasId} fallback={<Loading />}>
            <Canvas canvasId={params.canvasId} />
        </Room>

    )
}


export default CanvasPage;