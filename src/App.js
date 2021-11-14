import { createTheme , ThemeProvider } from '@material-ui/core';
import "bootstrap/dist/css/bootstrap.min.css"
import { purple } from '@material-ui/core/colors';
import React from 'react'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Admin from './Pages/Admin';
import Student from './Pages/Student';
import Faculty from './Pages/Faculty';
import AddMarks from './Components/Faculty/AddMarks';
import ResolveQuery from './Components/Faculty/ResolveQuery';
import CheckResult from './Components/Student/CheckResult';
import SubmitQuery from './Components/Student/SubmitQuery';
import LayoutStudent from './Components/LayoutStudent';
import AddNotice from './Components/Admin/AddNotice';
import EditToppers from './Components/Admin/EditToppers';
import EditFaculties from './Components/Admin/EditFaculties';
import CheckResultAdmin from './Components/Admin/CheckResultAdmin';
import EditStudents from './Components/Admin/EditStudents';
import LayoutAdmin from './Components/LayoutAdmin';
import Layout from './Components/Layout';
import Test from './Pages/Test';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

const App = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
          <Route path="/about">
          <About/>
          </Route>
          
          <Route path="/contact">
          <Contact/>
          </Route>
          
          <Route path="/signin">
          <SignIn/>
            </Route>
          <Route path="/signup">
          <SignUp/>
            </Route>
            
          <Route path="/test">
          <Test/>
          </Route>
          
          <Route path="/admin">
          <Admin/>
          </Route>
          
          <Route path="/student">
          <Student/>
          </Route>

          <Route path="/faculty">
          <Faculty/>
          </Route>

          <Route path="/add-marks">
          <AddMarks/>
          </Route>

          <Route path="/resolve-query">
          <ResolveQuery/>
          </Route>

          <Route path="/add-notice">
          <AddNotice/>
          </Route>

          <Route path="/edit-toppers">
          <EditToppers/>
          </Route>

          <Route path="/checkResultAdmin">
            <LayoutAdmin>
          <CheckResultAdmin/>
          </LayoutAdmin>
          </Route>

          <Route path="/edit-students">
          <EditStudents/>
          </Route>

          <Route path="/edit-faculties">
          <EditFaculties/>
          </Route>

          <Route path="/checkResult">
          <LayoutStudent>
          <CheckResult/>
          </LayoutStudent>
          </Route>

          <Route path="/raiseQuery">
            <LayoutStudent>
          <SubmitQuery/>
          </LayoutStudent>
          </Route>

          <Route path="/">
          <Home/>
          </Route>
          
    </Switch>
    </Layout>
      </Router>
      </ThemeProvider>
      
  )
}

export default App
