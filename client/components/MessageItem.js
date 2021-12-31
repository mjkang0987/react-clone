export const MessageItem = ({
    userId,
    timeStamp,
    text
}) => {
    return (
        <li className="message__item">
            <strong>
                {userId}{' '}
                <span>
                    {new Date(timeStamp).toLocaleString('ko-KR', {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                    })}
                </span>
            </strong>
            {text}
        </li>
    );
};
