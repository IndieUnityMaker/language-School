import st from "./MapBody.module.css";

const circlePosLeft = [
    [5, 7, 1, 3],
    [4, 6, 3, 5],
    [3, 5, 5, 7],
    [4, 6, 7, 9],
    [5, 7, 9, 11],
    [6, 8, 11, 13],
    [7, 9, 13, 15],
    [6, 8, 15, 17],
    [5, 7, 17, 19],
];
const circlePosRight = [
    [5, 7, 1, 3],
    [6, 8, 3, 5],
    [7, 9, 5, 7],
    [6, 8, 7, 9],
    [5, 7, 9, 11],
    [4, 6, 11, 13],
    [3, 5, 13, 15],
    [4, 6, 15, 17],
    [5, 7, 17, 19],
];

export const MapBody = () => {
    return (
        <div className={`${st.map}`}>
            {circlePosRight.map((pos, i) => (
                <div
                    onClick={() => console.log(`${pos[0]} / ${pos[1]}`)}
                    key={i}
                    className={`${st.item} ${st.gray}`}
                    style={{
                        gridColumn: `${pos[0]} / ${pos[1]}`,
                        gridRow: `${pos[2]} / ${pos[3]}`,
                    }}
                />
            ))}
        </div>
    );
};
