type AnswerOptionProps = {
    text: string;
    transcription: string;
    className: string;
    onClick: () => void;
};

export const AnswerOption = ({
    text,
    className,
    transcription,
    onClick,
}: AnswerOptionProps) => {
    return (
        <div className={className} onClick={() => onClick()}>
            <p>{text}</p>
            <p>{transcription}</p>
        </div>
    );
};
