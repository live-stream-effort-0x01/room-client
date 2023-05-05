import { LiveKitRoom } from "solid-livekit";
import { useParams } from "solid-start";

export default function Meet() {

    const params = useParams<{liveKitUrl: string, token: string}>(); 

    const onConnected = async (room: any) => {
        await room.localParticipant.setCameraEnabled(true);
        await room.localParticipant.setMicrophoneEnabled(true);
    }

    return (
        <main>
            Meeting Room
            <LiveKitRoom 
                url={params.liveKitUrl}
                token={params.token}
                onConnected={room => onConnected(room)}
            />
        </main>
    );
}


