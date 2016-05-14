import React from 'react';
import MaterialTitlePanel from './MaterialTitlePanel';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
	sidebarLinkLogout: {
    display: 'block',
    padding: '16px 0px',
    color: '#c8c8c8',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};

const SidebarContent = (props) => {
  this.propTypes = {
    style: React.PropTypes.object,
  };
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;

	// This should be deleted soon
  const links = [];

  for (let ind = 0; ind < 10; ind++) {
    links.push(
      <a key={ind} href="#" style={styles.sidebarLink}>Mock menu item {ind}</a>);
  }

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <a href="/" style={styles.sidebarLink}>Inicio</a>
        <a href="/reporta" style={styles.sidebarLink}>Reporta</a>
        <a href="/alertas" style={styles.sidebarLink}>Alertas</a>
				<a href="/comparte" style={styles.sidebarLink}>Comparte</a>
				<a href="/privacidad" style={styles.sidebarLink}>Privacidad</a>

				<div style={styles.divider} />
				<a id="logout" href="#" style={styles.sidebarLinkLogout}>Salir</a>
      </div>
    </MaterialTitlePanel>
  );
};

export default SidebarContent;
