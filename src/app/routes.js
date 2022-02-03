
import { BrowserRouter, Route, Switch } from "react-router-dom"
import {WritersContainer} from "../writer/WritersContainer"
import {App} from './App'
import { AddWriter } from "../writer/components/WriterAdd";
import { BookAdd } from "../book/components/bookAdd";
import { Loading } from "./common/Loading";
import { Navbar } from "./Navbar";
import { NotFound } from "./NotFound";

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/writers" component={WritersContainer}/>
                    <Route  path="/writer/add" component={AddWriter}/>
                    <Route  path="/book/add" component={BookAdd}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
        </BrowserRouter>
    )
}