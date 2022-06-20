/**
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// import "./config1";

import "./config1";
import { IntlProvider } from "react-intl";
import "./App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
//import "./config/config";
//import { mountingPoints } from "./config/config";
import { AppContextProvider } from "./contextProviders";
import {
  CommerceContextProvider,
  PrimeCatalogContainer,
  PrimeCommunityBoardList,
  PrimeCommunityBoardPage,
  PrimeInstancePage,
  PrimeNotificationContainer,
  PrimeTrainingPage,
} from "./--force";
import { Link, Route, Routes } from "react-router-dom";
import { 
  PRIME_ALMPROFILE,
  PRIME_CATALOG,
  PRIME_TRAINING,
  PRIME_INSTANCE,
  PRIME_BOARDPAGE,
  PRIME_BOARDLIST,
  BASE,
} from "./config/config";
import "./storage";
import { useProfile } from "./--force/hooks/profile/useProfile";
import { getALMObject } from "./--force/utils/global";
import Catalog from "./components/catalog";
import Training from "./components/training";
// import Profile from "./components/profile";
//import { ALMProfilePage } from "../almLib/almLib";
const App = (props: any) => {
  //let almConfig = getALMConfig();
  //const { mountingPoints } = config;
  //store.subscribe(() => console.log(store.getState()));
  const { profileAttributes } = useProfile();
  const { user } = profileAttributes;
  return (
   
    <IntlProvider locale={props.locale} messages={props.messages}>
      <div id="alertDialog"></div>
      <CommerceContextProvider>
        <AppContextProvider>
          {/* <div className="header">
          <div className="mx-auto"> */}
            {/* <div className="logo-image">
              <img src="https://iconape.com/wp-content/png_logo_vector/iconfinder-2.png"
              className="img-fluid"
              height="70"/>
            </div> */}
            <nav className="navigation">
              <div className="logo-image">
                <img src="https://iconape.com/wp-content/png_logo_vector/iconfinder-2.png"
                className="img-fluid"
                height="70"/>
              </div>
              <ul className="content">
                <li className="list">
                  <Link to={PRIME_CATALOG}  className="home">HOME</Link>
                </li>
                {getALMObject().isPrimeUserLoggedIn()?(
                  <>
                    <Link to={PRIME_BOARDLIST} className="community">COMMUNITY</Link>
                    <li className="notify">
                   <PrimeNotificationContainer/>
                   </li>
                    <div>
                      <Link to={PRIME_ALMPROFILE}>
                      <img src={user.avatarUrl}
                      alt="profile"
                      className="user"  height="40" width="40"/>
                     </Link>
                    </div>
                 </>
                ):""}
                {!getALMObject().isPrimeUserLoggedIn()?( 
                //   <li className="list">
                //     <div>
                //       <Link to={PRIME_ALMPROFILE}>
                //       <img src={user.avatarUrl}
                //       alt="profile"
                //       className="user"  height="40" width="40"/>
                //       </Link>
                //     </div>
                //   </li>
                // ):(<li className="list"> */}
                  <div>
                    <Link to={PRIME_ALMPROFILE}>
                      {/* TO-DO--->change image path 
                      src="https://images.rawpixel.com/image_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy
                    93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtaWNvbjQtamlyMjA2NC1wb3ItbC5qcGc.jpg?s=H3a8GUP1lDJmSxxLyi_281z9OCRp4n6bpGYGf6FaDnw"*/}
                    {/* <img 
                     src="src/images1/download.jpeg"
                     alt="profile"
                    className="user" height="40" width="40"/> */}
                    <FontAwesomeIcon className="icons" icon={faUserCircle} size={"2x"}></FontAwesomeIcon>
                   
                    </Link>
                  </div>
                ):""}
              </ul>
            </nav>
          {/* </div>
          </div> */}
       <Routes>
            <Route path={BASE} element={<Catalog/>} />
            <Route path={PRIME_CATALOG} element={<Catalog />} />
            <Route path={PRIME_TRAINING} element={<Training />} />
            <Route path={PRIME_INSTANCE} element={<PrimeInstancePage />} />
            {/* <Route path={PRIME_ALMPROFILE} element={<Profile />} />  */}
            <Route 
              path={PRIME_BOARDPAGE}
              element={<PrimeCommunityBoardPage />}
            />
            <Route
              path={PRIME_BOARDLIST}
              element={<PrimeCommunityBoardList />}
            />
        </Routes>
        </AppContextProvider>
      </CommerceContextProvider>
    </IntlProvider>

    //  <IntlProvider locale={props.locale} messages={props.messages}>
    // <div id="alertDialog"></div>
    // <CommerceContextProvider>
    //   <AppContextProvider>

    //     <Portal selector={mountingPoints.notificationContainer}>
    //       <PrimeNotificationContainer />
    //     </Portal>

    //     <Portal selector={mountingPoints.catalogContainer}>
    //       <PrimeCatalogContainer />
    //     </Portal>

    //     <Portal selector={mountingPoints.trainingOverviewPage}>
    //       <PrimeTrainingPage />
    //     </Portal>

    //     <Portal selector={mountingPoints.instanceContainer}>
    //       <PrimeInstancePage />
    //     </Portal>

    //      <Portal selector={mountingPoints.profilePageContainer}>
    //       <ALMProfilePage />
    //     </Portal>

    //      <Portal selector={mountingPoints.boardContainer}>
    //        <PrimeCommunityBoardPage />
    //      </Portal>

    //    <Portal selector={mountingPoints.boardsContainer}>
    //       <PrimeCommunityBoardList />
    //     </Portal>

    //   </AppContextProvider>
    // </CommerceContextProvider>
    // </IntlProvider>
  );
};

export default App;

