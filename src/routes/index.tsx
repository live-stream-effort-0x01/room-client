import { redirect, Title, useNavigate } from "solid-start";

export default function Home() {

    const navigate = useNavigate();

    const onSubmit: EventListener = (event) => {
        const formData = new FormData(event.target as HTMLFormElement);
        const serverURL = formData.get('serverUrl');
        const token = formData.get('token');
        navigate(`/meet/?liveKitUrl=${serverURL}&token=${token}`);
    }

    return (
        <main>
            <form onSubmit={onSubmit}>
                <input
                    id="serverUrl"
                    name="serverUrl"
                    type="url"
                    placeholder="Livekit Server URL"
                    required
                />
                <textarea
                    id="token"
                    name="token"
                    placeholder="Token"
                    required
                    rows={9}
                    style={{padding: '1px 2px', "font-size": 'inherit', "line-height": 'inherit'}}
                />
                <hr style={{width: '100%', "border-color": 'rgba(255, 255, 255, 0.15)', "margin-block": '1rem'}}/>
                <button
                    style={{"padding-inline": '1.25rem', width: '100%'}}
                    type="submit"
                >
                    Connect
                </button>
            </form>
        </main>
    );
}
