/** @format */
export enum formatStyleType {
	"SHORT" = "short",
	"MEDIUM" = "medium",
}
export const getFormatTime = (
	time: number,
	createdAt: string,
	mongo?: boolean,
	style?: formatStyleType
) => {
	if (mongo) {
		return new Date(createdAt).toLocaleString("ru-RU", {
			timeStyle: style ? style : "medium",
			dateStyle: "short",
		});
	}
	return Intl.DateTimeFormat("ru-RU", {
		timeStyle: style ? style : "medium",
		dateStyle: "short",
	}).format(time);
};
