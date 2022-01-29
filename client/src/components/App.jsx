import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {MainContext} from '../contexts/MainContext.js'
import { SiteNavigator } from './siteNavigator.jsx';
import { NewUser } from './LoginAndSelection/newUser.jsx';
import { Login } from './LoginAndSelection/login.jsx';
import { DriverAddTrip } from './DriverSelection/DiverOptions/driverAddTrip.jsx';
import { DriverTripSelection } from './DriverSelection/DiverOptions/driverTripSelection.jsx';
import { DriverPortal } from './DriverSelection/driverPortal.jsx';
import { RiderSearch } from './RiderSelection/NewRide/riderSearch.jsx';
import { SaveMeASeat } from './RiderSelection/NewRide/saveMeASeat.jsx';
import { RiderPaymentMethods } from './RiderSelection/RiderHamburgerModal/MenuOptions/riderPaymentMethods.jsx';
import { RiderQuestionAndComments } from './RiderSelection/RiderHamburgerModal/MenuOptions/riderQuestionAndComments.jsx';
import { RiderTripDetails } from './RiderSelection/RiderHamburgerModal/MenuOptions/riderTripDetails.jsx';
import { RiderTripHistory } from './RiderSelection/RiderHamburgerModal/MenuOptions/riderTripHistory.jsx';
import { RiderUpcomingTrips } from './RiderSelection/RiderHamburgerModal/MenuOptions/riderUpcomingTrips.jsx';
import { RiderMenu } from './RiderSelection/RiderHamburgerModal/riderMenu.jsx';
import { RiderPortal } from './RiderSelection/RiderPortal.jsx';
import { DriverTripHistory } from './DriverSelection/DiverOptions/driverTripHistory.jsx';

const App = () => {
    const [userId, setUserId] = useState(null);
    const [currentPage, setCurrentPage] = useState('siteNavigator');
    const [siteMap, setSiteMap] = useState(
      { 'siteNavigator' : <SiteNavigator />,
        'login'         : <Login />,
        'newUser'       : <NewUser />,
        'driverAddTrip' : <DriverAddTrip />,
        'driverTripHistory' : <DriverTripHistory />,
        'driverTripSelection' : <DriverTripSelection/>,
        'driverPortal'    : <DriverPortal />,
        'riderSearch'     : <RiderSearch />,
        'saveMeASeat'     : <SaveMeASeat />,
        'riderPaymentMethods' : <RiderPaymentMethods />,
        'riderQuestionAndComments' : <RiderQuestionAndComments />,
        'riderTripDetails': <RiderTripDetails />,
        'riderTripHistory': <RiderTripHistory />,
        'riderUpcomingTrips': <RiderUpcomingTrips />,
        'riderMenu'       : <RiderMenu />,
        'riderPortal'     : <RiderPortal />
    });



     return(
   <MainContext.Provider value={{
         userId, setUserId,
         currentPage, setCurrentPage,
         siteMap, setSiteMap
       }}>
         {
         siteMap[currentPage]}





       </MainContext.Provider>
     );

}

export default App;


