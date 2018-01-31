import React from 'react';
import ReactDOM from 'react-dom';

import { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

import { Route, HashRouter as Router } from 'react-router-dom';
import { Link, Switch } from 'react-router-dom';
import { Button } from 'react-md/lib/Buttons';

import FontIcon from 'react-md/lib/FontIcons';
import SVGIcon from 'react-md/lib/SVGIcons';
import arrowBack from 'react-md/lib/SVGIcons';

import { NavigationDrawer } from 'react-md/lib/NavigationDrawers';
import { translate, capitalize } from 'util/translator.js';

const TO_PREFIX = '/';

const navItems = [{
    label: 'Home',
    to: TO_PREFIX,
    exact: true,
    icon: 'home'
}, {
    label: 'Home2',
    to: TO_PREFIX + 'home2',
    icon: 'home'
}, {
    label: 'Help',
    to: TO_PREFIX + 'help',
    icon: 'help'
}
];

const styles = {
    content: { minHeight: 'auto' }
};

import debug from 'util/logger.jsx';

import NavItemLink from 'components/util/NavItemLink.jsx';

export class Home extends PureComponent {

    constructor(props) {
        super (props);
        this.state = {
            toolbarTitle:'default'
        };
        this.setTitle = this.setTitle.bind(this);
    }
    componentDidMount() {
        console.log(this.props.baseURL + " mounted. Connected to " + this.props.portletURL);
    }

    componentWillUnmount() {
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ toolbarTitle: this.getCurrentTitle(nextProps) });
    }

    setTitle (title) {
        this.setState( {
            toolbarTitle: title
        });
    }

    getCurrentTitle () {
        debug("app: get current title");
        const pathname = location.pathname;
        const lastSection = pathname.substring(pathname.lastIndexOf('/') + 1);
        if (lastSection === 'navigation-drawers') {
            return 'Home';
        }
        return lastSection;
    };

    closeDrawer () {
        debug("closing drawer");
    }

    render() {
        const { toolbarTitle } = this.state;
        const baseURL = this.props.baseURL;
        return (
            <Router basename={baseURL}>
                <NavigationDrawer id="app-sidebar" // footer=... node //persistentIcon = element //temporaryIcon
                    toolbarTitle={toolbarTitle}
                    mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
                    tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                    desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                    navItems={navItems.map(props => <NavItemLink {...props} key={props.to} updateParent={this.setTitle} history={history} />)}
                    contentStyle={styles.content}
                    contentId="react-app"
                    autoclose
                >
                    <Switch>
                        <Route path={navItems[0].to} exact render={(props) => <Button icon>home</Button>} />
                        <Route path={navItems[1].to} render={(props) => <Button icon>home</Button>}/>
                        <Route path={navItems[2].to} exact render={(props) => <Button icon>home</Button>} />
                        <Route render={(props) => <div>Not found</div>} />
                    </Switch>

                </NavigationDrawer>
            </Router>
        );
    }
};



