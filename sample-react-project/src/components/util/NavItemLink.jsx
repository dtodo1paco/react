/* NavItemLink.jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import FontIcon from 'react-md/lib/FontIcons';
import ListItem from 'react-md/lib/Lists/ListItem';
import { withRouter } from 'react-router-dom';


/**
 * Due to the fact that react-router uses context and most of the components
 * in react-md use PureComponent, the matching won't work as expected since
 * the PureComponent will block the context updates. This is a simple wrapper
 * with Route to make sure that the active state is correctly applied after
 * an item has been clicked.
 */
import debug from 'util/logger.jsx';

class NavItemLink extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.onclick) {
            debug("handling click...");
            this.props.onclick();
        } else {
            debug("updating parent...");
            this.props.updateParent(this.props.label);
        }
    }

    render() {
        const { label, to, icon, exact, history } = this.props;
        var current = String(this.props.history.location.pathname);
        let match = to != '/' && current.indexOf(to) !== -1;
        debug("Rendering link with ["+label+"] to ["+to+"] icon ["+icon+"] exact ["+exact+"]. ["+current+"] match ["+to+"] => " + match);
        let leftIcon;
        if (icon) {
            leftIcon = <FontIcon>{icon}</FontIcon>;
        }
        return (
            <ListItem
                component={Link}
                active={!!match}
                to={to}
                primaryText={label}
                leftIcon={leftIcon}
                onClick={() =>
                    this.handleClick()
                }
            />

            /*
                        <Route path={to} exact={exact}>
                        {({ match }) => {
                            let leftIcon;
                            if (icon) {
                                leftIcon = <FontIcon>{icon}</FontIcon>;
                            }
                            return (
                                <ListItem
                                    component={Link}
                                    active={!!match}
                                    to={to}
                                    primaryText={label}
                                    leftIcon={leftIcon}
                                    onClick={() => {
                                        this.props.history.push(to)
                                    }}
                                />
                            );
                        }}
                        </Route>
            */
        )
    }
}
NavItemLink.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string,
    exact: PropTypes.bool,
    icon: PropTypes.node,
};
export default withRouter(NavItemLink);