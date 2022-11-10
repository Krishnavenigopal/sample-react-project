import { useNavigate, useLocation, useParams, useMatch } from "react-router-dom"

export default function Home() {
    //Access history object with useHistory
    const history = useNavigate();

    //Access the location object with useLocation
    const location = useLocation();

    //Access the match object with useRouteMacth
    const match = useMatch();

    //Extract the url parameters with useParams
    const params = useParams();

    return <div> Home page</div>
}
