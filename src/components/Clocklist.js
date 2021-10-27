import Ehandling from './EventHandling';

export default function ClockList({ quantities = [] }) {
    return (
        <>
            <div>
                {quantities.map((key) => (
                    <Ehandling key={key} />
                ))}
            </div>
        </>
    );
}
