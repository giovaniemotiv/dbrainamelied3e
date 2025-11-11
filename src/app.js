import './css/style.css';
import * as THREE from 'three';
import MainBrain from './js/MainBrain';

// Three r91 compatibility shim for libs expecting setAttribute/deleteAttribute
// This allows three-bas to work with older Three versions bundled here.
if (THREE.BufferGeometry) {
	const proto = THREE.BufferGeometry.prototype;
	if (!proto.setAttribute && proto.addAttribute) {
		// eslint-disable-next-line no-underscore-dangle
		proto.setAttribute = function setAttribute(name, attribute) {
			// addAttribute(name, attribute)
			return this.addAttribute(name, attribute);
		};
	}
	if (!proto.deleteAttribute) {
		// eslint-disable-next-line no-underscore-dangle
		proto.deleteAttribute = function deleteAttribute(name) {
			if (this.attributes && this.attributes[name]) {
				delete this.attributes[name];
			}
			return this;
		};
	}
}

// eslint-disable-next-line
new MainBrain()
