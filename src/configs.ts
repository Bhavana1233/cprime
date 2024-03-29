export {}
// declare const window: Window &
//    typeof globalThis & {
//      ALM: any
//    }
declare const window:any;
const PRIME_USAGE_TYPE = "aem-sites";
  const ES_USAGE_TYPE = "aem-es";
  const COMMERCE_USAGE_TYPE = "aem-commerce";
const ALMConfig = {
        almBaseURL: "https://captivateprimeqe.adobe.com",
        primeApiURL: "https://captivateprimeqe.adobe.com/primeapi/v2/",
        magentoGraphqlEndpoint: "/magento/graphql",
        locale: "en-US",
        cdnBaseUrl: "https://cpcontentsqe.adobe.com",
        usageType: "aem-commerce",
        accountData:
          '{"links":{"self":"https://learningmanagerqe.adobe.com/primeapi/v2/account"},"data":{"id":"7110","type":"account","attributes":{"catalogsVisible":true,"dateCreated":"2020-09-29T08:11:22.000Z","disabledApps":[],"elthorLocation":"{\\"option\\": \\"ADOBE\\", \\"windowsUrl\\": \\"\\", \\"windowsVersion\\": \\"\\", \\"macUrl\\": \\"\\",\\"macVersion\\": \\"\\",\\"webPageUrl\\": \\"\\"}","enableCardIcons":true,"enableECommerce":true,"enableEnhancedLp":true,"enableExternalSkills":true,"enableModulePreview":true,"enableOffline":true,"enableSidebar":true,"enableSocialAsHome":false,"enableSocialLearning":true,"exploreSkills":true,"gamificationEnabled":true,"hideRetiredTrainings":true,"lastSyncedDateCreatedForMagento":"2022-05-21T08:19:55.000Z","learnerLayout":"IMMERSIVE","lmsBaseUrl":"https://publish-p57757-e498686.adobeaemcloud.com/content/learning/language-masters/en/email-redirect.html","locale":"en-US","loginInBrowser":false,"loginUrl":"https://learningmanagerqe.adobe.com/7110/login","logoStyling":"LOGO_ONLY","logoUrl":"https://cpcontentsqe.adobe.com/public/account/7110/accountassets/7110/Microsoft.JPG","moduleResetEnabled":false,"name":"Microsoft","recommendationAccountType":"LMS","showEffectiveness":false,"showRating":true,"socialPostApprovalType":"NONE","subdomain":"learningexperienceplatform","themeData":"{\\"id\\":\\"5\\",\\"name\\":\\"Vivid\\",\\"url\\":\\"https://cpcontentsqe.adobe.com/public/account/7110/accountassets/7110/accounttheme/acaptheme835d23e17fc84cfe9c182f4ad2a45138.css?cp_oauth_jwt=eyJhbGciOiJIUzI1NiJ9.eyJwIjoidXJsIiwicmFuZCI6IjE4OWQwYzcyYjAxM2I3ZjU1YmM3OWUyZjJmM2Y4ZWJjIiwidiI6IjEiLCJvcmlnaW5hbFVybEhhc2giOiIzZDJkYzg5ZmE3YjNjYWFlNmFlZjAzYTU0YTk4Mzc5NzhjYTE2MmQ5IiwiZXhwIjoxNjUzOTAyOTI1LCJyaWQiOiI1MDg4MCIsImlhdCI6MTY1MzI5ODEyNSwiY2lkIjoiMTIxNiJ9.Ve4McyAwtyq0WEoCWsuYu8GvLGBY4jcqFL8CrXgIiJE\\",\\"className\\":\\"prime-accessible\\",\\"brandColor\\":\\"#ffffff\\",\\"sidebarIconColor\\":\\"#eb5e00\\",\\"sidebarColor\\":\\"#232323\\",\\"widgetPrimaryColor\\":\\"#306eb5\\"}","timeZoneCode":"IST","accountTerminologies":[{"entityType":"MODULE","locale":"en-US","name":"Module","pluralName":"Modules"},{"entityType":"COURSE","locale":"en-US","name":"Course","pluralName":"Courses"},{"entityType":"LEARNING_PATH","locale":"en-US","name":"Learning Path","pluralName":"Learning Paths"},{"entityType":"CERTIFICATION","locale":"en-US","name":"Certification","pluralName":"Certifications"},{"entityType":"LEARNING_PLAN","locale":"en-US","name":"Learning Plan","pluralName":"Learning Plans"},{"entityType":"JOB_AID","locale":"en-US","name":"Job Aid","pluralName":"Job Aids"},{"entityType":"CATALOG","locale":"en-US","name":"Catalog","pluralName":"Catalogs"},{"entityType":"SKILL","locale":"en-US","name":"Skill","pluralName":"Skills"},{"entityType":"BADGE","locale":"en-US","name":"Badge","pluralName":"Badges"},{"entityType":"ANNOUNCEMENT","locale":"en-US","name":"Announcement","pluralName":"Announcements"},{"entityType":"MY_LEARNING","locale":"en-US","name":"My Learning","pluralName":"My Learning"},{"entityType":"LEADERBOARD","locale":"en-US","name":"Leaderboard","pluralName":"Leaderboard"},{"entityType":"EFFECTIVENESS","locale":"en-US","name":"Effectiveness","pluralName":"Effectiveness"},{"entityType":"PREREQUISITE","locale":"en-US","name":"Prerequisite","pluralName":"Prerequisites"},{"entityType":"PREWORK","locale":"en-US","name":"Prework","pluralName":"Prework"},{"entityType":"CORE_CONTENT","locale":"en-US","name":"Core Content","pluralName":"Core Content"},{"entityType":"TESTOUT","locale":"en-US","name":"Testout","pluralName":"Testout"},{"entityType":"SELF_PACED","locale":"en-US","name":"Self Paced","pluralName":"Self Paced"},{"entityType":"BLENDED","locale":"en-US","name":"Blended","pluralName":"Blended"},{"entityType":"CLASSROOM","locale":"en-US","name":"Classroom","pluralName":"Classrooms"},{"entityType":"VIRTUAL_CLASSROOM","locale":"en-US","name":"Virtual Classroom","pluralName":"Virtual Classroom"},{"entityType":"ACTIVITY","locale":"en-US","name":"Activity","pluralName":"Activities"},{"entityType":"PATH","locale":"en-US","name":"Path","pluralName":"Paths"},{"entityType":"SKILL_LEVEL","locale":"en-US","name":"Skill Level","pluralName":"Skill Levels"},{"entityType":"SOCIAL_LEARNING","locale":"en-US","name":"Social Learning","pluralName":"Social Learning"},{"entityType":"SOCIAL","locale":"en-US","name":"Social","pluralName":"Social"}],"contentLocales":[{"locale":"en-US","name":"English"},{"locale":"de-DE","name":"Deutsch"},{"locale":"fr-FR","name":"Français"},{"locale":"zh-CN","name":"简体中文"},{"locale":"es-ES","name":"Español"},{"locale":"it-IT","name":"Italiano"},{"locale":"pt-BR","name":"Português"},{"locale":"ja-JP","name":"日本語"},{"locale":"da-DK","name":"Dansk"},{"locale":"hi-IN","name":"हिन्दी"},{"locale":"hu-HU","name":"Magyar"},{"locale":"nl-NL","name":"Nederlands"},{"locale":"pl-PL","name":"Polski"},{"locale":"fi-FI","name":"Suomi"},{"locale":"th-TH","name":"Thai"},{"locale":"tr-TR","name":"Türkçe"},{"locale":"ko-KR","name":"한국어"},{"locale":"zh-TW","name":"繁體中文"},{"locale":"no-NO","name":"Norsk"},{"locale":"sv-SE","name":"Svenska"},{"locale":"ro-RO","name":"Română"},{"locale":"cs-CZ","name":"Čeština"},{"locale":"ru-RU","name":"Pусский"},{"locale":"fr-CA","name":"Français (Canada)"},{"locale":"en-AU","name":"English (Australia)"},{"locale":"id-ID","name":"Bahasa Indonesia"},{"locale":"es-XL","name":"Español (Latinoamericano)"},{"locale":"ar-SA","name":"العربية"},{"locale":"am-ET","name":"አማርኛ"},{"locale":"sl-SL","name":"Slovenščina"},{"locale":"sk-SK","name":"Slovenský"},{"locale":"sr-SP","name":"Srpski"},{"locale":"hr-HR","name":"Hrvatski"},{"locale":"uk-UA","name":"Українська"},{"locale":"he-IL","name":"עברית"}],"filterPanelSetting":{"catalog":true,"duration":true,"format":true,"price":true,"priceRange":true,"skill":true,"skillLevel":true,"tag":true,"type":true},"gamificationLevels":[{"color":"#f3853c","name":"Bronze","points":1500},{"color":"#ff6400","name":"Silver","points":1600},{"color":"#ff9d00","name":"Gold","points":1800},{"color":"#ffd640","name":"Platinum","points":2000}]}}}',
        esBaseUrl:
          /* "https://primeapps-stage.adobe.com/almsearch/api/v1/qe/8814/3453b894-e38e-40c9-ad0c-82b3932e3deb/search", */
          "https://primeapps-stage.adobe.com/almsearch/api/v1/qe/7110/a75477eb-2a4c-4f6e-b897-a6506da18e3f",
        instancePath: "/instance.html",
        catalogPath: "/explore.html",
        trainingOverviewPath: "/trainingOverview.html",
        communityPath: "/community.html",
        communityBoardsPath: "/community.html",
        communityBoardDetailsPath: "/community.html",
        commerceBasePath: "",
        //almCdnBaseUrl: "https://cpcontentsqe.adobe.com",
        almCdnBaseUrl:
          /* "https://cpcontentsqe.adobe.com/public/guest/qe/api/3453b894-e38e-40c9-ad0c-82b3932e3deb/8814", */
          "https://cpcontentsqe.adobe.com/public/guest/qe/api/21135923-b63f-4a0a-801e-023c9e5bf72f/7110",
        /* "https://cpcontentsqe.adobe.com/public/guest/qe/api/c6caced3-3750-4647-8868-08aa7317726a/8722", */
        primeTileColors: {
          0: "#00000",
          1: "#FFFFFF",
          2: "#445566",
        },
        commerceSignInPath: "signIn",
        commerceURL:
          "https://aemsites-mfabl2i-i6chtryvajcii.ap-4.magentosite.cloud/graphql",
        /* "https://captiveprimeteam-bbkwwgi-qf7u6l5qi6iqs.ap-4.magentosite.cloud/", */
      };

      const isPrimeUserLoggedIn = () => {
        return true;
      };
      
      const getAccessToken = () => {
        return "2d82308ba79912b33234f6ed346569d7";
      };
      const COMMERCE_TOKEN_COOKIE_NAME = "alm_commerce_token";

      const getCommerceToken = () => {
        let cookieValues = document.cookie.match(
          `(^|[^;]+)\\s*${COMMERCE_TOKEN_COOKIE_NAME}\\s*=\\s*([^;]+)`
        );
        return cookieValues ? cookieValues.pop() : "";
      };
      // console.log("hi");
      let ALM=window.ALM;
      const getALMConfig = () => {
        return ALM.ALMConfig;
      };

      const navigateToTrainingOverviewPage = (
        trainingId:String,
        trainingInstanceId = ""
      ) => {
        let { trainingOverviewPath } = getALMConfig();
        trainingOverviewPath = getUrl(trainingOverviewPath, {
          trainingId: trainingId,
        });
        window.location = trainingInstanceId
          ? getUrl(trainingOverviewPath, {
              trainingInstanceId: trainingInstanceId,
            })
          : trainingOverviewPath;
      };

      const navigateToInstancePage = (trainingId:String) => {
        let { instancePath } = getALMConfig();
        window.location = getUrl(instancePath, { trainingId: trainingId });
      };

      const navigateToBoardDetailsPage = (boardId:String) => {
        let { communityBoardDetailsPath } = getALMConfig();
        window.location = getUrl(communityBoardDetailsPath, {
          boardId: boardId,
        });
      };

      const getUrlWithQueryParams = (urlStr:any, params:any) => {
        const url = new URL(urlStr);
        for (const param in params) {
          url.searchParams.append(param, params[param].toString());
        }
        return url.toString();
      };

      const getUrl = (urlStr:any, params:any) => {
        for (const param in params) {
          urlStr = urlStr + "/" + param + "/" + params[param];
        }
        return urlStr;
      };

      async function getALMUser() {
        if (!ALM.isPrimeUserLoggedIn()) {
          ALM.storage.removeItem("user");
          return;
        }

        let user = ALM.storage.getItem("user");
        if (user) {
          return user;
        }
        console.log("Fetch user");
        const primeApiURL = ALM.ALMConfig.primeApiURL;
        const userUrl = `${primeApiURL}/user?include=account`;
        const headers = {
          Accept: "application/vnd.api+json",
          Authorization: `oauth ${getAccessToken()}`,
        };
        try {
          const userResponse = await fetch(`${userUrl}`, {
            credentials: "include",
            headers,
            method: "GET",
          });
          if (userResponse && userResponse.status === 200) {
            user = await userResponse.json();
            const userStr = JSON.stringify(user);
            console.log("set user");
            ALM.storage.setItem("user", userStr, 1800);
            return userStr;
          } else {
            console.error("User call failed!!");
            ALM.storage.removeItem("user");
          }
        } catch (e) {
          ALM.storage.removeItem("user");
          console.log("Fetch user exception " + e);
          throw e;
        }
      }

      const updateALMUser = async () => {
        ALM.storage.removeItem("user");
        return getALMUser();
      };

      const getAccountActiveFields = async () => {
        const primeApiURL = getALMConfig().primeApiURL;
        const accountActiveFieldsUrl = primeApiURL + "account/fields";
        const headers = {
          Accept: "application/vnd.api+json",
          Authorization: `oauth ${getAccessToken()}`,
        };
        try {
          const response = await fetch(accountActiveFieldsUrl, {
            credentials: "include",
            headers,
            method: "GET",
          });
          if (response) {
            const activeFields = await response.json();
            console.log(activeFields);
            return activeFields;
          }
        } catch (e) {
          throw e;
        }
      };

      const updateAccountActiveFieldsDetails = async (activeFields:any, userId:any) => {
        const baseApiUrl = getALMConfig().primeApiURL;
        const body = {
          data: {
            type: "user",
            id: userId,
            attributes: {
              fields: activeFields,
            },
          },
        };

        const updateAccountActiveFieldsUrl =
          baseApiUrl + "users/" + `${userId}`;
        const headers = { "content-type": "application/json" };
        try {
          const response = await fetch(updateAccountActiveFieldsUrl, {
            credentials: "include",
            headers: {
              "Content-type": "application/json",
              Authorization: `oauth ${getAccessToken()}`,
              Accept: "application/vnd.api+json",
            },
            method: "PATCH",
            body: JSON.stringify(body),
            
          });
          if (response) {
            const activeFields = await response.json();
            console.log(activeFields);
            await updateALMUser();
            return activeFields;
          }
        } catch (e) {
          throw e;
        }
      };

      const navigateToCommerceSignInPage = () => {
        let { commerceSignInPath } = getALMConfig();
        window.location.pathname =
          commerceSignInPath +
          "?redirectPath=" +
          encodeURIComponent(window.location.pathname);
      };

      function handlePrimeLogIn() {
        console.log("login to prime");
      }

      function handleLogIn() {
        let { commerceSignInPath } = getALMConfig();
        window.location.pathname = commerceSignInPath;
        
        switch (CURRENT_USAGE_TYPE) {
          case PRIME_USAGE_TYPE:
          case ES_USAGE_TYPE:
            handlePrimeLogIn();
            break;

          case COMMERCE_USAGE_TYPE:
            ALM.navigateToCommerceSignInPage();
            break;

          default:
            break;
        }
      }

      ALM = ALM || {};
      ALM.ALMConfig = ALMConfig; //window.ALM.ALMConfig || primeConfig;
     ALM.getALMConfig = getALMConfig;
      ALM.handleLogIn = handleLogIn;
      ALM.navigateToTrainingOverviewPage =
        navigateToTrainingOverviewPage;
      ALM.navigateToInstancePage = navigateToInstancePage;
      ALM.navigateToBoardDetailsPage = navigateToBoardDetailsPage;
      ALM.navigateToCommerceSignInPage = navigateToCommerceSignInPage;
      ALM.isPrimeUserLoggedIn = isPrimeUserLoggedIn;
      ALM.getAccessToken = getAccessToken;
      ALM.getCommerceToken = getCommerceToken;
     ALM.getALMUser = getALMUser;
      ALM.getAccountActiveFields = getAccountActiveFields;
      ALM.updateAccountActiveFieldsDetails =
        updateAccountActiveFieldsDetails;
      ALM.updateALMUser = updateALMUser;
      
      ALM.updateCart = function (value:any) {
        console.log(value);
      };
      const CURRENT_USAGE_TYPE = ALM.ALMConfig.usageType || PRIME_USAGE_TYPE;
      if (isPrimeUserLoggedIn()) {
        getALMUser();
      }
