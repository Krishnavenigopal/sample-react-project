import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom"

export default function Home() {
    //Access history object with useHistory
    const history = useHistory();

    //Access the location object with useLocation
    const location = useLocation();

    //Access the match object with useRouteMacth
    const match = useRouteMatch();

    //Extract the url parameters with useParams
    const params = useParams();

    return <div> Home page</div>
}
