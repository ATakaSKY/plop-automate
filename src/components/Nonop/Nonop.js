import React from 'react';
import PropTypes from 'prop-types';
import styles from './Nonop.module.css';

class Nonop {

  constructor(props){
    super(props);

    this.state = {}
  }

  render(){
    return (
            <div className={styles.root}>
            </div>
  } 
};

Nonop.defaultProps = {

};

Nonop.propTypes = {

};

export default Nonop;
