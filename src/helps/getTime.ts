/** @format */
export enum formatStyleType {
	"SHORT" = "short",
	"MEDIUM" = "medium",
}
export const getFormatTime = (time: number, style?: formatStyleType) => {
	return Intl.DateTimeFormat("ru-RU", {
		timeStyle: style ? style : "medium",
		dateStyle: "short",
	}).format(time);
};
