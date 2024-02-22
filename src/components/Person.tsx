
interface PersonProps {
    name: string;
    age: number;
    email: string;
    isMarried: boolean;
    friends: string[];
    country?: Country;
}

export enum Country {
    Brazil = "Brazil",
    USA = "USA",
    Canada = "Canada"
}

export const Person = (props: PersonProps) => {

    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
            <p>Married: {props.isMarried ? "Yes" : "No"}</p>
            {props.friends.map((friend: string) => {
                return <p>Friend: {friend}</p>;
            })}

            {props.country && <p>Country: {props.country}</p>}
        </div>
    );
}