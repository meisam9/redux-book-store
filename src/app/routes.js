
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { lazy, Suspense } from "react";
import { Navbar } from "./Navbar";

// lazy loading routes
const App = lazy(()=>import('./App'));
const WritersContainer = lazy(()=>import('../writer/WritersContainer'));
const AddWriter = lazy(()=>import('../writer/components/WriterAdd'));
const BookAdd = lazy(()=>import('../book/components/bookAdd'));
const EditWriter = lazy(()=>import('../writer/components/WriterEdit'));
const NotFound = lazy(()=>import('./NotFound'));
export const MainRouter = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Navbar />
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route exact path="/writers" component={WritersContainer}/>
                        <Route  path="/writer/add" component={AddWriter}/>
                        <Route  path="/writer/edit/:id" component={EditWriter}/>
                        <Route  path="/book/add" component={BookAdd}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
            </BrowserRouter>
        </Suspense>
    )
}