import ControlledInputs from "../pages/ControlledInputs/controlledInputs";
import GitHubUsers from "../pages/GitHubUsers/gitHubUsers";
import CitySelector from "../pages/WeatherTracker/CitySelector";
import Pagination from "../Pagination/Pagination";

export const Routes = [

	{
		route: "/weather",
		component: CitySelector,
		title: "WeatherTracker",
	},
	{
		route: "/gitHubUsers",
		component: GitHubUsers,
		title: "GitHubUsers",
	},
	{
		route: "/pagination",
		component: Pagination,
		title: "Pagination",
	},
	{
		route: "/controledInputs",
		component: ControlledInputs,
		title: "controledInputs",
	},
];
