export const timeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const secondsAgo = Math.round((now.getTime() - date.getTime()) / 1000);

    const intervals: { [key: string]: number } = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };

    for (const unit in intervals) {
        const count = Math.floor(secondsAgo / intervals[unit]);
        if (count >= 1) {
            return `${count} ${unit}${count !== 1 ? "s" : ""} ago`;
        }
    }

    return "Just now";
};