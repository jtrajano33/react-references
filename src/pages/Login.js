import Navbar from "../components/Navbar"
import { Signup } from "../components/SignUp"

export const Login = () => {
    return (
        <>
            <Navbar />
            <div className="container" style={{paddingTop: 75}}>
                <div className="row">
                    <div className="col-md-5">
                        <Signup />
                    </div>
                    <div className="col-md-7">

                    </div>
                </div>
            </div>
        </>
    )
}