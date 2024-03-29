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
//import { PrimeConfig } from "../externalLib";

// eslint-disable-next-line import/no-anonymous-default-export

// import { getALMConfig } from "./almLib/almLib/utils/global";
import { getALMConfig } from "./../adobe-learning-manager-components/ui.frontend/src/almLib/utils/global";
let almConfig = getALMConfig();

const mountingPoints = {
  catalogContainer: ".catalog__container",
  trainingOverviewPage: ".training__page__container",
  boardsContainer: ".boards__container",
  boardContainer: ".board__container",
  notificationContainer: ".notification__container",
  instanceContainer: ".instance__container",
  profilePageContainer: ".profile__container",
  userSkillsContainer: ".skills__container",
  activeFieldsContainer: ".activeFields__container",
};
(window as any).ALM = (window as any).ALM || {};
(window as any).ALM.ALMConfig["mountingPoints"] = mountingPoints;
export { mountingPoints };

export const BASE = "/";
export const PRIME_CATALOG = `${almConfig.catalogPath}`;
export const PRIME_TRAINING = `${almConfig.trainingOverviewPath}/trainingId/:trainingId/trainingInstanceId/:trainingInstanceId`;
export const PRIME_INSTANCE = `${almConfig.instancePath}/trainingId/:trainingId`;
export const PRIME_ALMPROFILE = "/profilePage";
export const PRIME_ACTIVEFIELDS = "/activeFields";
export const PRIME_USERSKILL = "/userSkills";
export const PRIME_BOARDPAGE = `${almConfig.communityBoardsPath}/boardId/:boardId`;
export const PRIME_BOARDLIST = `${almConfig.communityBoardDetailsPath}`;

