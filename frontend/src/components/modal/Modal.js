import React, { Component } from 'react'
import Portal from './portal'

export default class Modal extends Component {
  render() {
    
    const {children, toggle, active} = this.props;

    
    
    return (
      <Portal>
        active && {
            <div style= {StyleSheet.wrapper}>
                <div style={styles.window}>
                    <button style={styles.closeBtn} onClick={toggle}> X </button>
                </div>
                <div>{children}</div>

            </div>
        }


      </Portal>
    )
  }
}

const styles = {
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100',
        height: '100',
        display: 'flex',
        justifyContent: 'center',
        allignItems: 'center',
    },

    window: {
        position: 'relative',
        background: '#fff',
        borderRadius: 5,
        padding: 15,
        boxShadow: '2px 2px 10px rgba(0,0,0,0,0.3)',
        zIndex: 10,
        minWith: 320,
    },

    closeBtn: {
        position: 'absolute',
        top: 0,
        right: 0,
    }


}
