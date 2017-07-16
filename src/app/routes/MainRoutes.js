/* eslint no-process-env:0 */
import React from 'react';
import {
 Route,
 Switch,
 Redirect
}                               from 'react-router-dom';
import {
  SimpleTablesConnected,
  PageNotFoundConnected,
  StatsCardConnected,
  NotificationsConnected,
  WorkProgressConnected,
  TwitterFeedConnected,
  TeamMatesViewConnected,
  TodoListViewConnected,
  StatViewConnected,
  TabPanelConnected,
  StripedProgressBarConnected,
  PaginationViewConnected
}                                 from '../containers';
import HomeConnected              from '../views/home';
import AlertConnected             from '../views/alert';
import BasicElementsConnected     from '../views/basicElements';
import BasicProgressBarConnected  from '../views/basicProgressBar';
import BreadcrumbViewConnected    from '../views/breadcrumb';
import EarningGraphConnected      from '../views/earningGraph';
import GeneralConnected           from '../views/general';

export const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomeConnected} />

    <Route path="/Dashboard/statsCard" component={StatsCardConnected} />
    <Route path="/Dashboard/earningGraph" component={EarningGraphConnected} />
    <Route path="/Dashboard/notifications" component={NotificationsConnected} />
    <Route path="/Dashboard/workProgress" component={WorkProgressConnected} />
    <Route path="/Dashboard/twitterFeed" component={TwitterFeedConnected} />
    <Route path="/Dashboard/teamMates" component={TeamMatesViewConnected} />
    <Route path="/Dashboard/todoList" component={TodoListViewConnected} />

    <Route exact path="/simpleTables" component={SimpleTablesConnected} />

    <Route exact path="/basicElements" component={BasicElementsConnected} />

    <Route exact path="/general" component={GeneralConnected} />
    <Route path="/general/breadcrumb" component={BreadcrumbViewConnected} />
    <Route path="/general/stat" component={StatViewConnected} />
    <Route path="/general/basicProgressBars" component={BasicProgressBarConnected} />
    <Route path="/general/tabPanels" component={TabPanelConnected} />
    <Route path="/general/stripedProgressBars" component={StripedProgressBarConnected} />
    <Route path="/general/alerts" component={AlertConnected} />
    <Route path="/general/pagination" component={PaginationViewConnected} />

    <Route component={PageNotFoundConnected} />
  </Switch>
);

export default MainRoutes;
