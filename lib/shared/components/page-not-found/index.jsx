import Component from 'components/component';
import React, {PropTypes} from 'react';
import Button from 'components/button';
import {Link, browserHistory} from 'react-router';

import styles from './index.less';

export default class PageNotFound extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render () {
    const {history} = this.context;
    return (
      <div className={styles.root}>
        <div className={styles.center}>
          <div className={styles.label404}>404</div>
          <div className={styles.subheader}>
            {"Oops, Sorry we Can't find that page"}
          </div>
          <div className={styles.subtext}>
            {"Either something went wrong or that page doesnt exist anymore"}
          </div>
          <div>
            <Link to="/">
            {"Home"}
            </Link>
            <Button onClick={()=>{
              // history.goBack()
              console.log(this.context, this.state, this.props)
            }}>
            {"back"}
            </Button>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
