export function UserProfile({ name, age, job }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>나이 : {age}</p>
            <p>직업 : {job}</p>

        </div>
    )
}