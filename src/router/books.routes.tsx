import { Routes,Route } from "react-router-dom";
import App from "../App";
import AddBooks from "../pages/AddBooks";



 function Router(){
    return(        
    <Routes>
       <Route index element={<App />} />
       <Route path="/adds" element={<AddBooks/>}/>
    </Routes>
    )
}

export default Router;